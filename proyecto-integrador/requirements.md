# Requerimientos

## Clase 1 - Patrones de diseño

1. Extraer la lógica que se encarga de abrir la ventana modal del personaje seleccionado en un custom Hook, de forma de que sea reutilizable y podamos aprovecharla más adelante.

2. Solucionar el props drilling que hay por toda la aplicación. Deberemos almacenar este estado en el Context y, utilizando el useSelector, podremos acceder a él en cada componente que requiera la traducción

## Clase 2 - Patrones de diseño

1. Crear un compound component llamado Card, junto a sus hijos CardPicture, CardContent y CardActions, para mejorar la lógica que se encarga de visualizar un personaje.

2. Refactorizar cada componente que utilice el componente Loading, por medio de la creación de un higher-order component (HOC) llamado LoadContent. Utilizando este HOC, podremos decorar nuestros componentes, cuando sea necesario, para mostrar el componente Loading cuando haya alguna acción pendiente y —por medio de la propiedad onFailedToLoad— mostrar un mensaje de error.

## Clase 4 - Clean Code

1. Instalar y configurar la herramienta ESLint de forma de que podamos utilizar el autofix para corregir todo el proyecto de forma automática.

   ```json
   "eslint": "^8.10.0",
   "eslint-config-prettier": "^8.5.0",
   "eslint-import-resolver-typescript": "^2.7.0",
   "eslint-plugin-import": "^2.25.4",
   "eslint-plugin-prettier": "^4.0.0",
   "eslint-plugin-react": "latest",
   ```

2. Configurar el archivo ESlint.

## Clase 5 - Accesibilidad

1. Obtener un score de 90 o más en la categoría de accesibilidad de la herramienta Google Lighthouse.

## Clase 7 - SOLID

1. Aplicar el principio de responsabilidad única —en la grilla de characters— es identificar toda la lógica que no pertenece a la grilla en sí. Es decir, la lógica que accede y modifica a los favoritos, tanto como el render de cada character en particular.

2. Aplicar los patrones abierto-cerrado y sustitución de Liskov.
   - Si analizamos los archivos features/tracking/software/amplitude.liskov.ts y features/tracking/software/amplitude.ts, podemos ver que liskov es una clase hija de amplitude y viola ambos principios. No solo modifica la clase padre, sino que tampoco se puede reemplazar fácilmente la clase padre por la hija, sin tener en cuenta la posibilidad de que, al no enviar la prop location, la clase hija (.liskov.ts) está generando un error. Es nuestro desafío alterar esta clase hija con la creación de un nuevo método que no permita modificar la lógica de la clase padre, sino extenderla y —a la vez— dejar de violar el principio de Liskov.

## Clase 8 - SOLID

1. Aplicar el principio de segregación de interfaces en la actual interfaz de TrackingSoftware. Extraer el método de initialize en una nueva interfaz que puede llamarse Initializable.

2. Aplicar el principio de inversión de dependencias en el archivo features/languages/language.context.tsx, de forma de que este archivo no requiera conocer la implementación específica de donde se obtienen las traducciones (los data files).
