# Prueba de Evaluación Continua 3 - Tablas, formularios, estilos avanzados

En esta PEC se nos pide implementar una página web llamada Naturae Hub, que consta de cuatro páginas HTML. En este documento vamos justificar las decisiones que se han tomado en cada una de ellas.

Además, se incluye una parte final en la que se explica cómo continuar con el desarrollo.

En esta PEC se ha subido a Github ([enlace al repositorio](https://github.com/DanielRamosAcosta/hyc-pec3)) y se ha usado Github Pages para publicar la página en internet. La página está accesible en https://www.danielramos.me/hyc-pec3/.

Este informe se ha escrito en Markdown y pasado luego a PDF usando el propio servicio de Github. A pesar de que se ha entregado en PDF, recomiendo su lectura en la web directamente, ya que creo que es más cómodo.

## Partes Comunes

1. `head`: De nuevo, no voy a profundizar mucho en las etiquetas `meta`, ya que lo hemos tratado en anteriores PEC. De forma similar a la anterior, cada página tiene un `title` y `description` específicos, para mejorar el SEO en el caso que fuera una web real.
2. `header`: El header es sencillo. En su parte izquierda contiene el logo con un enlace a la página principal. En la parte derecha, un menú de navegación principal con enlaces al "Tema del Mes" y al "Blog".
3. `footer`: El footer consta de dos partes. A la izquierda tenemos el logo, que es un elemento meramente decorativo y el copyright con el nombre del alumno. A la derecha, tenemos los enlaces a las redes sociales y los enlaces a cuestiones legales (política de privacidad, cookies, etc).

## `index.html`

La pagina principal tiene cuatro partes bien diferenciadas.

Primero nos encontramos un hero. Corrigiendo respecto la anterior PEC, esta vez no es una sección, sino que es un `div` sin carga semántica, que contiene un título de primer nivel `h1` y un subtítulo.

La primera sección es muy simple, ya que únicamente contiene su titular `h2` y algunos párrafos. A su derecha tenemos un formulario para suscribirse a la Newsletter. Como este contenido no está directamente relacionado con el contenido de la página y casi parece más un anuncio, creo que es adecuado meterlo en un `aside`. El formulario es muy sencillo, sólo tiene un `input` de tipo `text` para el nombre, y un `input` de tipo `email` para el correo. Ambos campos son obligatorios. He añadido un `label` para cada campo, y un `button` para enviar el formulario.

La última sección es la de Historias del Cambio. Esta sección contiene tres tarjetas maquetadas con la etiqueta `article`, ya que estas representan información autocontenida.

## `tema-del-mes.html`

Esta página es algo más complicada, ya que cambia bastante entre el formato de escritorio y el de móvil. Finalmente gracias a CSS Grid, se ha simplificado bastante la implementación.

Primero encontramos el título de primer nivel `h1`, el subtítulo y el menú de navegación interno. Este menú está primero dentro de un `aside`, ya que no forma parte del contenido principal de esta página pero está relacionado con él. Además, es un elemento de navegación importante, por lo tanto también está dentro de un `nav`. Para que este elemento sea accesible y ya que no aparece ningún texto en los mockups, se le ha añadido una etiqueta `aria-label` con el valor "Tabla de contenidos" para que se entienda mejor cuando se navega con un lector de pantalla.

Luego, encontramos cada uno de los elementos de los temas del mes. En un principio había pensado usar una Description List, esto  complicaba bastante la maquetación. Finalmente he optado por usar títulos y secciones simplemente.

Un aspecto que he pensado bastante son los número que están como prefijo de cada uno de los encabezados. En un principio, los había añadido en el marcado del HTML, añadiéndoles atributos `aria-label` para que fueran leídos correctamente por un lector de pantalla. Sin embargo, investigando, he encontrado la forma de hacerlo sólo con CSS gracias a la propiedad `counter-reset`, así que finalmente he optado por esta alternativa.

## `blog.html`

La página de blog tiene un título de primer nivel `h1`, y luego un `article` para cada entrada del blog representada como una card. El marcado de cada Card es sencillo, incluye una `figure` con su `figcaption` correspondiente, un h2 para el título, un párrafo por la descripción y luego el autor del artículo. Para el autor del artículo, he encontrado en [la documentación de MDN](https://arc.net/l/quote/hypaklpu) que es adecuado usar la etiqueta `address`. En principio en esta etiqueta se debería poner la información de contacto del autor, pero entiendo que en este caso que no tenemos una sección de "Perfiles de los autores" es adecuado poner el nombre del autor.

Al final tenemos la paginación, que simplemente es un `nav` con enlaces. Leyendo la documentación de MDN, parece que en este caso sí es correcto usarlo ya que serviría para navegar el listado de entradas de blog.

## `post.html`

En el fichero `post.html` lo primero que encontramos es el breadcrumb. He usado un `nav` con un `ol` para representar el breadcrumb. He usado un `ol` en lugar de un `ul` porque en un `ol` se presupone que hay un orden, y en este caso el orden es importante. He añadido un `aria-label` para que se entienda mejor cuando se navega con un lector de pantalla.

El siguiente elemento es el `article`, que tiene el articulo del post entero, en este elemento tenemos:

* Título: Una etiqueta `h1` representando la cabecera de primer nivel
* Autor: Al igual que en las cards de la página de blog, he usado la etiqueta `address` para representar el autor del post.
* Cover Image: He usado una `figure` para representar la imagen de portada del post, y al igual que en las cards, un `figcaption` que describe la autoría de la imagen.
* Descripción: Este es un texto algo más destacado sobre el resto del artículo. Creo que no tiene más peso semántico que un `p`.
* Secciones: Los siguientes elementos que encontramos son secciones, algunas de ellas con contenido rico. Lo más importante es un elemento iframe para embeber un video de YouTube, y una lista ordenada para reducir el impacto de la moda rápida.

Por último, encontramos la sección de "Te puede interesar". Estuve dudando si esta parte tiene sufficient autonomía como para ser una sección en si misma, pero creo que sí ya que tiene entradas de blog y cumple con el criterio de tener un encabezado propio. Las entradas del blog están reutilizadas de la página de `blog.html`.

## `estilos.css`

En esta PEC ha sido el fichero de CSS más extenso de todos, llegando casi a las 1000 líneas. A pesar de su tamaño, he intentado organizarlo orientado a componentes, de forma que sea más fácil de mantener y de corregir, hay muy poco CSS global. De nuevo al igual que anteriores PECs, el fichero está dividido en distintas secciones usando `editor-fold`.

1. `Reset`: En esta sección, he añadido un reset de CSS básico, que elimina los márgenes y paddings por defecto de los elementos HTML, y cambia el modelo de caja a `box-sizing: border-box`.
2. `Global`: En esta sección, he definido las variables globales de CSS, como los colores, las fuentes y otro tipo de CSS global como las fuentes y los colores.
3. `Utils`: En esta sección, he definido alguna clase de utilidad, aunque ahora mismo sólo existe la clase `.container`, al igual que en anteriores PEC.
4. `Component: Typography`: Esta sección define el CSS de los títulos y los párrafos de forma global.
5. `Component: Header`: Este componente es el correspondiente a las cabeceras de cada una de las páginas de esta PEC. Además de usar CSS Nesting, también tiene media queries nesteadas para adaptarse a las diferentes pantallas. En los apuntes finales comentaré más sobre este mecanismo. Este componente usa `display: flex` para mostrarse en formato columna en pantallas pequeñas, y en formato fila en pantallas grandes.
6. `Component: Footer`: De nuevo otro componente transversal a todas las páginas. Este es algo más complicado, y es el primero de esta lista que hace uso de CSS Grid para maquetar los elementos. En este caso, he hecho uso de `grid-template-areas` definiendo 4 áreas: `logo`, `copy`, `social-networks` y `legal`. Estas áreas se ven una debajo de la otra en móvil, pero usando un media query, se ven en dos columnas. La parte de _social network_ y los enlaces legales se muestran con `display flex` y la parte legal tiene media queries para cambiar la distribución en escritorio.
7. `Component: Link`: Componente para los enlaces. Usa un `text-decoration: underline` con `text-decoration-style: dotted` para generar el subrayado punteado tal y como se ve en los mockups. Además, en su estado `hover` tiene un estilo sólido.
8. `Component: Text Field`: El estilo de este componente es muy sencillo. Hace uso de `display flex` para poder usar un `gap`, y se aplican los estilos al input para que coincidan con los del mockup.
9. `Component: Checkbox`: Aquí tenemos los estilos de otro componente del formulario, el checkbox. Vale la pena detenernos aquí, ya que el selector es interesante. Necesito un selector CSS que escoja el `div` que está rodeando el `input[type="checkbox"]`, y para ello he usado la pseudoclase `has()`. De esta forma, la regla `div:has(> input[type="checkbox"])` se podría leer comp "selecciona el div que tenga un input de tipo checkbox directamente descendiente".
10. `Component: Button`. Esto son los estilos tanto del botón, como el enlace con estilo de botón. Se muestra como un bloque, y se alinea al principio, ya que siempre que lo vemos mostrado se muestra lineado de esta forma. En su estado `hover` cambia el color del borde a verde.
11. `Component: Stories`: Para no estar poniendo una clase CSS a cada uno de los componentes que se quiera mostrar como una "Historia del Cambio", mi estrategia (que es la misma que en las entradas del blog) es aplicar una clase en plural al contenedor, y luego seleccionar el hijo que me interese para que aplique a todos. En este caso, selecciono todos los `article` que estén dentro del `stories`. Gracias al CSS Nesting, creo que este componente queda más o menos fácil de leer. Primero los estilos del título `h3`, luego su contenido que es un `p`, y por último el `.button`.
12. `Component: Breadcrumb`: Para poder estilar el breadcrumb, simplemente se le aplican estilos al `ol` para que se muestren en horizontal. Merece la pena destacar el mecanismo que se usa para mostrar el caracter ">" entre los elementos. Usando el selector `&:not(:first-child)::before`, seleccionamso todos los elementos que no sean el primer hijo, y a su `::before` les añadimos un `content: " >";`. De esta forma, se añade el caracter ">" entre los elementos, pero no al principio.
13. `Component: Figures`: Esto son los estilos cuando queramos un `figcaption` que esté como overlay, por ejemplo en las imágenes de las cards del blog. También tenemos estilado el `figure` que contiene el `iframe` del vídeo.
14. `Blog: Entry`: Este es el componente que tiene los estilos de cada una de las entradas del blog. Usa la misma estrategia que el componente de `Stories` para aplicar los estilos a cada uno de las entradas del blog. Cada entrada de blog, se estila con su `.content`, el título que es un `h2`, su contenido un `p`, el autor usando la clase `.author` y por último el `.button`.
15. `Component: Table Of Contents`: Esta es la tabla de contenidos de la página del Tema del Mes. En móvil se muestran los elementos con `display: flex` con `flex-direction: row`, y en escritorio se muestran en columna para coincidir con el diseño original. Para estilar los puntos que se ven en móvil, se usa el mismo mecanismo que en el breadcrumb.
16. `Component: Pagination`: Este es el componente de la paginación. Se trata de nuevo de un contenedor con `display: flex`. Me parece interesante cómo está estilada la página actual. He usado `aria-current="page"` en el HTML para poder marcar esa es la página actual, y me he aprovechado de este atributo para poder estilar el enlace de la página actual de forma diferente.
17. `Component: Month Topics`: De forma similar a las entradas de blog, esta clase aplica a varios elementos, y cada elemento viene definido por la etiqueta `article`. Creo que es interesante comentar que el número del heading en el que estamos, se hace mediante la propiedad `counter-increment: article-counter`. Luego, en cada `h2` se coloca en el pseudoelemento `::before` un `content: "#" counter(article-counter)`. De esta forma logramos que el número del heading sea el número del título en el que se encuentra.
18. `Component: Hero`: Este es el componente que se usa a modo de cabecera en la página principal. Ha quedado un poco enrevesado porque he tenido que justar un poco los espaciados para que coincida pefectamente con las capturas.
19. `Component: Page Cover`: Este componente se usa en la cabecera de la página del post para ajustar los estilos de la imagen.
20. `Page-specific styles`: El resto de estilos que tenemos, lo único que hacen es ajustar la distribución y los espaciados para que todo coincida en todos los tamaños con los diseños originales. Cada clase CSS de esta sección corresponde directamente con alguna de las páginas o con alguna sección dentro de éstas. Lo más reseñable, es el uso de CSS Grid en las entradas de blog.

## Metodología y continuación del desarrollo.

Se que en el mundo del CSS existen varias metodologías como BEM, SMACSS, Atomic, etc. En este caso, he intentado seguir una metodología orientada a componentes intentando innovar un poco. Para lograrlo he intentado que el CSS Global sea el mínimo posible, y definir estructuras de estos componentes pequeños como los botones, los enlaces, los títulos, etc. De esta forma, si en un futuro se quisiera cambiar el estilo de un botón, por ejemplo, sólo habría que tocar el componente de botón, y no tendría que tocar el componente de enlace con estilo de botón, el componente de botón en una card, etc.

Además, creo que con el CSS Nesting este approach queda bastante bien, ya que tenemos un una corelación casi 1 a 1 entre el CSS y el HTML.

Si se quisiera continuar con el desarrollo, los pasos serían los siguientes:

1. Ante un cambio en el diseño...
2. Identificar el componente nuevo o el componente afectado
3. Buscar la mejor forma de seleccionar el HTML de ese componente. En algunos casos es necesario una clase CSS, en otras se puede realizar usando etiquetas `aria`.
4. Añadir el CSS correspondiente a este componente de la forma más aislada posible, intentando no impactar en otros componentes.

## Apuntes finales

De nuevo en esta práctica final, he intentado acercarme lo máximo posible al diseño original. En algunas ocasiones es un poco difícil, ya que no estoy seguro si el especiado de los elementos es algo intrínseco del propio elemento, padding o margin específico en ese lugar o algo distinto como `line-height`.

Creo que si hiciera una web desde cero, intentaría ser un poco más simplista en cuanto a la componentización y el espaciado.

Otra experiencia que me llevo de esta PEC, es que hay que separar muy bien (y mejor) los estilos del propio componente, y el espaciado que tiene en el lugar particular que ocupa en la página.

Creo que la parte que me ha resultado más interesante, ha sido experimentar bastante con CSS Grid y su combinación con media queries, me ha parecido muy muy potente.