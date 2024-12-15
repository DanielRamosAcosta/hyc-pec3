import puppeteer, { Page } from "puppeteer";
import fs from "node:fs";
import PNG from "pngjs";
import pixelmatch from "pixelmatch";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const browser = await puppeteer.launch({
  headless: true,
  args: ["--hide-scrollbars"]
});

const views = ["desktop", "tablet", "phone"];
const pages = ["index", "tema-del-mes", "blog", "post"];

const skipViews: string[] = [];
const skipPages: string[] = ["index", "tema-del-mes", "blog"];

const result = await Promise.all(
  pages
  .filter((page) => !skipPages.includes(page))
  .map(async (pageName, i) => {
    const pagePath = `${pageName}.html`;
    const absolutePath = `file:///Users/danielramos/Documents/university/hyc/pec-03/${pagePath}`;
    const page = await browser.newPage();
    await page.goto(absolutePath);

    return {
      pageName,
      rendering: false,
      pagePath,
      page,
      elements: views
      .filter((view) => !skipViews.includes(view))
      .map((view) => {
        const index = pages.indexOf(pageName);
        const originalPath = `materiales/mockups/0${index + 1}-${pageName}-${view}.png`;
        const originalFile = PNG.PNG.sync.read(fs.readFileSync(originalPath));
        return {
          view,
          originalPath,
          originalFile,
        };
      }),
    };
  }),
);

type ResultElement = (typeof result)[0];

const onChange = async (page: Page, element: ResultElement): Promise<void> => {
  if (element.rendering) {
    console.log(`Rendering ${element.pageName}, waiting...`);
    await sleep(100);
    return onChange(page, element);
  } else {
    console.log(`Rendering ${element.pageName}`);
  }

  element.rendering = true;
  await page.reload();

  for (const entry of element.elements) {
    const width = entry.originalFile.width;
    const height = entry.originalFile.height;
    await page.setViewport({ width, height });
    const uint8Array = await page.screenshot({
      path: toNew(entry.originalPath),
    });
    const buffer = Buffer.from(uint8Array);
    const mine = PNG.PNG.sync.read(buffer);
    const diff = new PNG.PNG({ width, height });

    pixelmatch(entry.originalFile.data, mine.data, diff.data, width, height, {
      threshold: 0.1,
    });

    await fs.promises.writeFile(
      toDiff(entry.originalPath),
      PNG.PNG.sync.write(diff),
    );
  }
  element.rendering = false;
  console.log(`${element.pageName} rendered`);
};

for (const element of result) {
  const page = element.page;
  fs.watchFile(element.pagePath, { interval: 100 }, () => {
    onChange(page, element).catch(console.error);
  });
}

fs.watchFile("css/estilos.css", { interval: 100 }, () => {
  for (const element of result) {
    onChange(element.page, element).catch(console.error);
  }
});

for (const element of result) {
  onChange(element.page, element).catch(console.error);
}

function toNew(path: string) {
  return path.replace(".png", "-new.png");
}

function toDiff(path: string) {
  return path.replace(".png", "-diff.png");
}
