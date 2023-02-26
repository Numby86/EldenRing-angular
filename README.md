PROYECTO ANGULAR ELDEN RING
-   Creo una estructura para mi proyecto que se divide en core, pages y shared.
-   En styles creo colores y clases como btn e ipt, que luego son mi estilo para los inputs y buttons de mi pagina.
-   La pagina esta hecha responsive web, para tamaño movil Iphone XR y en su version horizontal, y tambien para Ipad horizontal, aunque como mejor se ve es en tamaño del monitor a pantalla completa, porque hay muchos efectos hover y animaciones que no se aprecian en mv y tambien tuve que poner cosas en display none porque no me entraban bien para movil.
-   Hago que mis modulos se carguen con lazy loading y que cada uno de ellos traiga su componente correspondiente.
-   En shared creo las pipes de paginacion, busqueda y para las armaduras de sort (para que las ordene segun su peso), las exporto en su modulo y funcionan en los componentes que las necesito.
-   En core creo todos los servicios de llamadas a la API en cada servicio tambien estan los modelos de esas llamadas.
Tambien creo un loader personalizado que se activa y desactiva mientras espera respuesta de la API.
Tambien en core estan creados el header y el footer que siempre estan pintados por lo tanto los exporto y los utilizo en el app module.
En el header hice un navBar que se activa y desactiva en el que van todas mis rutas, la ruta que esta activa se queda en otro color con linksActive y tambien he creado una funcion onclick, para que cuando entres a alguna de esas rutas el navBar se desactive y se cierre.
El logo de la pagina siempre te devuelve al home.
Y en el footer he puesto enlaces a mi gitHub y a mi linkedin.
-   Creo una vista de error personalizada con un mapa del juego, que carga cuando se introduce una url que no existe.
-   En la vista Home creo un carrousel 'casero', con un setInterval que cada 3seg lo que hace es generar un numero random, con ese numero random lo guardo en una variable y luego en el html le digo que me pinte la posicion del numero random de mi array de imagenes en el carrousel. *(En un principio las imagenes te las traia de las localizaciones de la api y consegui que funcionara bien, pero lo descarte porque la calidad de esas imagenes era muy mala y me cree yo un array con imagenes de buena calidad, dejo el codigo comentado, por si se quiere probar).
-   En las pages hay varios tipos de componentes distintos con diferentes llamadas a la API, se piden armaduras, bosses, items, etc... del juego, algunos son directamente la card con la info y otros es una lista sobre la que puedes pulsar y ver otra pagina de detalle de ese elemento.
Si en la pagina se tiene que pintar una imagen y no existe en la api, se pinta una imagen de una semilla del juego.
-   Creo una pagina en la que puedes crearte tu propio personaje igual que en el juego que es un formulario con varios inputs, uno de ellos un select en el que al seleccionar la clase que quieres para tu personaje, te pinta al lado la imagen de esa clase y sus estadisticas.
Si al crearte el personaje no subes una imagen, en el listado de jugadores se muestra una imagen de user neutra.
Para crearte ese personaje debes estar registrado, asique esa ruta tiene una guardia que te pide que hagas login antes de acceder.
-   Los componentes estan hechos en styles, con estructura BEM, salvo alguna cosa excepcional como el navbar que se creo aparte y alguna clase como btn e ipt.
-   Los jugadores creados se pueden consultar en otra vista aparte que pinta la lista con los jugadores (en esta lista hay un button que te permite borrar al jugador creado, funciona pero lo tengo comentado porque la he desplegado y no quiero que me borren jugadores, mas adelante lo pondre para que solo yo pueda eliminarlos), y cada jugador tiene su vista detalle. Que esta creada con una llamada combinada (forkJoin), en el que por un lado te pinta datos del jugador y por otro datos de su clase elegida.
En esta vista de detalle tienes una opcion en la que puedes editar tu personaje, que te devuelve al formulario de creacion pero ya con tus datos rellenados para que cambies el campo que quieras.
-   Todos las colecciones de clases, usuarios, jugadores, estan subidos a la base de datos hecha con nodeJS.
-   El login se hace a traves de JWT y cuando estas logueado, te aparece un icono con una runa del juego que si pulsas sobre el te da la opcion de hacer logout.
-   La api esta desplegada en vercel, asique se puede ver.