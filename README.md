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

La última sección es la de Historias del Cambio. Esta sección contiene tres tarjetas maquetadas con la etiqueta `article`, ya que estas representan información autocontenida.

## `tema-del-mes.html`

Esta página es algo más complicada, ya que cambia bastante entre el formato de escritorio y el de móvil. Finalmente gracias a CSS Grid, se ha simplificado bastante la implementación.

Primero encontramos el título de primer nivel `h1`, el subtítulo y el menú de navegación interno. Este menú está primero dentro de un `aside`, ya que no forma parte del contenido principal de esta página pero está relacionado con él. Además, es un elemento de navegación importante, por lo tanto también está dentro de un `nav`. Para que este elemento sea accesible y ya que no aparece ningún texto en los mockups, se le ha añadido una etiqueta `aria-label` con el valor "Tabla de contenidos" para que se entienda mejor cuando se navega con un lector de pantalla.

Luego, encontramos cada uno de los elementos de los temas del mes. En un principio había pensado usar una Description List, pero creo que esto me complicaba la maquetación y finalmente he optado por usar títulos y y secciones simplemente. 

## `blog.html`


## `post.html`


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
