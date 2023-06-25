# Merchos-Place (refugio)

##  Definición de cliente:

Esta aplicación web surge de la necesidad de llevar un control más exhaustivo de un refugio. Las necesidades principales son
la gestión de la medicación diara de los perros, ahora mismo se gestiona en papel cada día; la alimentación, algunos tienen 
que comer por separado, porque no comen a la misma velocidad, tienen intolerancias o control de la cantidad de pienso; las curas,
que van de la manos de las medicaciones; y las castraciones y las visitas veterinarias, ya que se van castrando poco a poco cuando 
hay fondos para ello y hay que llevar un control.

Como usuario quiero poder registrarme si no poseo ya una cuenta en la página. Un vez con la cuenta creada, quiero poder acceder
a los datos del refugio. Debe existir un enlace entra la página de registro  y la página de login. En caso de estar registrado 
poder acceder a través de login y en caso de no estar registrado, poder acceder desde la página de resgistro y después logarme.

Despúes de seguir los pasos anteriores, desde la página de login debe aparecerme la página principal del refugio.

En ella, podré ver un listado con los perros que están a cargo del refugio. O bien el mapa del refugio con la disposición de 
los cheniles. Pinchando sobre el nombre del perro, me debe aparecer: número de chenil, si toma o no medicación si está castrado,
si es macho o hembra, si come por separado y tipo de pienso.

En el caso del mapa, si pincho en un chenil, me deben de aparecer los perros que están dentro, y una vez ahí, podré pinchar en el
nombre del perro y aparecerme los datos descritos anteriormente.

También debe existir un menú desplegable arriba a la izquierda, con las siguientes rutas, "Inicio", "about", "contacto", "colabora" y "ronda".

Inicio llevaría a la página del mapa o listado en caso de estar logeado, sino, llevaría a la página de login.

About, explica un poco de historia del refugio y quienes son sus colaboradores.

Contacto, datos tipo teléfono, correo, dirección y redes sociales.

Colabora, distintos links o correos para pedir información para colaborar.

Ronda, sería la más útil para los voluntarios, para llevar un resgistro de si se ha proporcionado la medicación, alimentacio y demás.

La idea además es que el listado y el mapa del refugio puedan ser modificables, añadir y quitar perros, modificar el estado de castrado y 
medicinas...

Añado datos visuales en un archivo png.



## Definicióm técnica:


### Back

Debemos tener una tabla dogs:

- id (uuid v4, PK)
- Name (text, not null)
- Meds (text, not null)
- Food (text, not null)
- Eat (text, not null)
- Castrated (text, not null)

Tabla meds:

- id (uuid v4, PK)
- Name (text, not null)

Tabla food:

- id (uuid v4, PK)
- Name (text, not null)

Dos tablas intermedias para conectar casa perro con su medicina y otra para conectarlo con su pienso:

dogs_meds

dogs_food

Se tendrían que hacer peticiones get para obtener los datos de los perros y también post, delete y put para
la actualización de los listados y el mapa.



### Front

*Empieza el proyecto pensando y maquetando siempre en móvil, luego en escritorio


Debemos tener 6 páginas:
- Register (Sin proteger, pero si estamos logados, nos redirigirá al Panel)
- Login (Sin proteger, pero si estamos logados, nos redirigirá al Panel)
- Inicio (Protegida, si no estamos logados, nos redirigirá al Login)
- About (Sin proteger)
- Colabora (Sin proteger)
- Ronda (Protegida, si no estamos logados, nos redirigirá al Login)

La página "Register" contendrá un formulario:
- Título h1 "Welcome to Mercho's Place"
- Título h2 "Create account"
- Campo email (requerido)
- Campo username (requerido)
- Campo password (requerido, longitud mínima de 4 caracteres)
- Campo submit (si todo va bien, redirigir a Login)

La página "Login" contendrá un formulario:
- Título h1 "Welcome to Mercho's Place"
- Título h2 "Login"
- Campo email (requerido)
- Campo password (requerido, longitud mínima de 4 caracteres)
- Campo submit (si todo va bien, redirigir a Panel)

La página de inicio:
- Título h1 "Welcome to Mercho's Place"
- Listado perros y si cambias de vista el mapa
	- Subpágina con datos de los perros


La página de "About":
- Título h1 "Welcome to Mercho's Place"
- Texto p con datos sobre el refugio, su creación y personal.

La página de "Colabora":
- Título h1 "Welcome to Mercho's Place"
- Links (a) o correos a las distintas formas de colaborar

La página de "Ronda":
- Título h1 "Welcome to Mercho's Place"
- Lista de tareas por hqacer ul, il y poder marcar completadas
- Deben aparecer las tareas por perro

La página "Inicio" y "Ronda" contendrá en la esquina superior derecha:
- El nombre del usuario en negrita
- Justo al lado habrá un botón o un icono de apagado
- Haciendo click en este elemento, la aplicación mostrará un modal preguntando si deseas salir de la aplicación
- En caso afirmativo, desconectar al usuario y redirigir a la página de Login
- En caso negativo, solo quitar el modal

