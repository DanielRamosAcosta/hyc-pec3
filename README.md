# Prueba de Evaluación Continua 3 - Tablas, formularios, estilos avanzados

En esta PEC se nos pide implementar una página web llamada Naturae Hub, que consta de cuatro páginas HTML. En este documento vamos justificar las decisiones que se han tomado en cada una de ellas.

Además, se incluye una parte final en la que se explica cómo continuar con el desarrollo.

## Partes Comunes

1. `head`: De nuevo, no voy a profundizar mucho en las etiquetas `meta`, ya que lo hemos tratado en anteriores PEC. De forma similar a la anterior, cada página tiene un `title` y `description` específicos, para mejorar el SEO en el caso que fuera una web real.
2. `header`: El header es sencillo. En su parte izquierda contiene el logo con un enlace a la página principal. En la parte derecha, un menú de navegación principal con enlaces al "Tema del Mes" y al "Blog".
3. `footer`: El footer consta de dos partes. A la izquierda tenemos el logo, que es un elemento meramente decorativo y el copyright con el nombre del alumno. A la derecha, tenemos los enlaces a las redes sociales y los enlaces a cuestiones legales (política de privacidad, cookies, etc).

## `index.html`

La pagina principal tiene cuatro partes bien diferenciadas.

Primero nos encontramos un hero. Corrigiendo respecto la anterior PEC, esta vez no es una sección, sino que es un `div` sin carga semántica, que contiene un título de primer nivel `h1` y un subtítulo.

La primera sección es muy simple, ya que únicamente contiene su titular `h2` y algunos párrafos. A su derecha tenemos un formulario para suscribirse a la Newsletter. Como este contenido no está directamente relacionado con el contenido de la página y casi parece más un anuncio, creo que es adecuado meterlo en un `aside`. El formulario es muy sencillo, sólo tiene un `input` de tipo `text` para el nombre, y un `input` de tipo `email` para el correo. Ambos campos son obligatorios. He añadido un `label` para cada campo, y un `button` para enviar el formulario.

La última sección es la de Historias del Cambio. Esta sección contiene tres tarjetas maquetadas con la etiqueta article

## `nosotros.html`

A nivel de marcado, esta página es bastante sencilla (el CSS si es algo más complicado). Consta de 4 secciones. Cada una de ellas contiene un título. Eso es algo que he aprendido en esta PEC, que una sección siempre debería contener al menos un título.

Para poder alcanzar el resultado de las capturas, las secciones ocupan todo el ancho de la página, y luego dentro de ellas contienen un `div` con la clase container que es la que ajusta el ancho máximo de la página, tal y como se recomendaba en el enunciado.

Quería prestar especial atención a la parte de la dirección. En este caso, he optado usar la etiqueta `<br>` para separar el texto. Considero que es todo el mismo texto, pero que el hecho de separar las líneas es simplemente un salto de línea.

Creo que se podría interpretar también como un listado si ningún tipo de estilo de lista, pero creo que era más adecuado en este caso particular interpretarlo de la primera forma.

Otro apunte es que el teléfono creo que se podría etiquetar con un `a` para que sea un enlace con el prefijo `tel:`. No lo he hecho porque en las capturas que se adjuntaban no se visualizaba como un enlace, pero creo que habría estado mejor así.

## `eventos.html`

La tabla la he separado en tres partes, `thead`, `tbody` y `tfoot`, ya que en las capturas se veía claramente esta distinción. El `thead` realmente contiene dos títulos.

Respecto al `thead`, tiene el título principal "Relación de Eventos", que tiene un `colspan` de 4, ya que ocupa las 4 columnas de la tabla. Para que sea accesible, también he añadido el atributo `scope` con el valor `colgroup` para especificar que es el título de todas las columnas. Luego, cada columna tiene su propio título.

Respecto al `tbody` ocurre algo similar. He considerado que el nombre del evento viene encabezando la fila de la tabla, por lo que la he marcado con un `th` y de forma similar a la columna, he usado el atributo `scope` con valor `row`.
Creo que es interesante también comentar, que las fechas las he marcado con la etiqueta `time` para que sea más semántico.

Por último, tenemos el `tfoot`. Sólo contiene una fila con una única celda que ocupa las 4 columnas.

Había pensado añadir un `caption` para poder hacer la tabla más accesible, pero creo que una persona que usara el lector en pantalla, ya tendría suficiente contexto sobre FOCO como para entender esta tabla.

## `formulario.html`

El formulario creo que ha sido la parte más complicada de la PEC, ya que tiene muchos campos, distribuídos de distintas formas y hay que organizarlo todo bien.

Lo primero que he identificado es que el formulario está dividido en tres partes bien diferenciadas. Por lo tanto, he envuelto cada parte en su propio `fieldset` y les he añadido un `legend` que contiene el título de la sección.

Cada grupo de `label` e `input` los he agrupado finalmente en un `div` con la clase `input-group`. Esto es para que respeten las distancias entre sí, ya que si estuvieran sueltos en la raíz del `fieldset` se verían afectados por el `gap`.

Los elementos de formulario que estaban agrupados en dos, los he metido en un `div` con la clase `two-columns`. Esto es para que se vean en dos columnas en la versión de escritorio, pero en la versión móvil se vean uno debajo de otro.

Los asteriscos en un principio había pensado marcarlos con un `span` con un `aria-label` que describiera lo que significa el asterisco (ya que es un signo de puntuación realmente). Pero como he visto que está subrayado igual que los `abbr`, finalmente he optado por esta última opción.

Vamos a comentar cada uno de los inputs del formulario:

* Nombre: Este es un `input` de tipo texto, sin nada muy interesante. He añadido un `pattern` para que sólo se puedan introducir letras y espacios.
* Descripción. Este es un `textarea` para que se pueda introducir más texto. En este caso parece que tiene una descripción algo más pequeña. He encontrado que en estos casos se puede usar la etiqueta `small` ya que se puede usar para pequeños comentarios (side comments).
* Fecha: Este es un `input` de tipo `datetime-local`. He añadido un `min` para que no se puedan seleccionar fechas anteriores a la actual.
* Ubicación: Este es un `input` de tipo texto.
* Categoría: Este es un `select` con varias opciones. He añadido una a modo de placeholder.
* Nombre de la organización: Este es un `input` de tipo texto.
* Descripción de la organización. Al igual que la descripción del evento, he usado un `textarea` para que se pueda introducir más texto.
* Persona de contacto: Este es un `input` de tipo texto y también tiene una pequeña descripción.
* Correo electrónico de contacto: Este es un `input` de tipo email.
* Teléfono de contacto: Este es un `input` de tipo teléfono. He añadido una longitud máxima de 9, ya que en España los números de teléfono son de 9 dígitos.
* Aforo: Este es un `input` de tipo número. He añadido un `min` de 0, ya que no puede haber aforo negativo.
* Precio de la entrada: Este es un `input` de tipo número. He añadido un `min` de 0, ya que no puede haber precios negativos y además un step de 0.01, ya que los precios suelen ser con dos decimales.
* ¿Es necesario registro previo?: Este es un `input` de tipo `radio`. He añadido un `name` para que sólo se pueda seleccionar una opción.
* He leído y acepto la política de privacidad: Este es un `input` de tipo `checkbox`. He añadido un `required` para que sea obligatorio.

Por último, el botón de enviar, que lo he dejado como un botón simple.

Al rellenar el formulario, se hará una petición `POST` en `http://localhost:3000`. En el enunciado se especificaba que no hacía falta implementar la parte que recibe esta petición, pero me he tomado la libertad de implementar un pequeño servidor que imprima por consola los datos que se han enviado. Este servidor se puede arrancar usando `node server.mjs` (hay que usar una versión de node reciente).

El log de salida debería ser algo como esto:

```
URLSearchParams {
  'eventName' => 'Codemotion',
  'eventDescription' => 'Un evento tecnológico en Madrid',
  'eventStartDate' => '2024-12-10T19:42',
  'eventEndDate' => '2024-12-13T19:42',
  'eventLocation' => 'Madrid',
  'eventCategory' => 'tecnológica',
  'organizationName' => 'Codemotion',
  'organizationDescription' => 'Esto es un ejemplo',
  'organizationContactName' => 'Marcos',
  'organizationContactEmail' => 'marcos@example.com',
  'organizationContactPhone' => '666123123',
  'organizationWebsite' => 'http://codemotion.com',
  'eventCapacity' => '100',
  'eventPrice' => '23',
  'registration' => 'yes',
  'acceptsPrivacyPolicy' => 'on' }
```

## `estilos.css`

De nuevo, para esta PEC he dividido los etilos con comentarios especiales para que esté más organizado y sea más fácil de corregir.

* Reset: Son los estilos que se aplican a todos los elementos para que se vean igual en todos los navegadores.
* Root Variables: Son las variables CSS que se usan en todo el documento. Además, también establezco el valor de la fuente general de todo el documento.
* Header: Estilos del header.
* Typography: Estilos de tipografía. He usado las fuentes de Google Fonts que se especificaban en el enunciado. Sólo he tenido que estilar dos niveles de títulos y el subtítulo.
* Layout: Estilos relacionados con el formato de la página: Que salga a tamaño completo, el container para que aparezca centrado y con márgenes, etc.
* Button: Estilos del botón y del enlace con estilo botón
* Footer: Estilos del footer. He usado flexbox para alinear los elementos de la lista, y les he puesto un punto como separador entre ellos.
* General styles inside sections: Aquí hay bastantes estilos de cómo se deben ver las secciones en general, y el contenido que aparece dentro. Lo más relevante creo que es el estilo de los enlaces. Lo he puesto aquí dentro para que no interfiera con los enlaces del menú ni del footer.
* Dark sections: estilos específicos para las secciones oscuras (aunque solo hay una en este caso).
* Table: Estilos de la tabla. Un aspecto interesante en este punto, es que había tenido que usar bastantes clases CSS para poder estilar los títulos de las tablas. Finalmente he refactorizado el código para usar selectores por el scope que tienen los títulos de las tablas. Creo que así ha quedado más semántico.
* Form: Estilos del formulario. Los elementos que están uno debajo de otros, en general se alinean con flexbox con un `gap` determinado. Lo más interesante es que he usado pseudoclases para estilar los inputs que tienen foco, que tienen algún error, y también cuando son válidos.
* Utilities: Algunos estilos de utilidad, como el de `light` para tener un color de fondo más claro o `uppercase` para poner el texto en mayúsculas.

## Apuntes finales

De nuevo, he intentado acercarme lo máximo posible al diseño original, para lo cual he tenido que ir un poco con ensayo y error hasta dar con el resultado adecuado. 

La verdad que he aprendido bastante con esta prueba, en especial respecto a toda la diversidad de inputs y de atributos que pueden tener estos elementos HTML. También me ha gustado mucho las distintas formas que hay de maquetar los títulos de las tablas HTML.
