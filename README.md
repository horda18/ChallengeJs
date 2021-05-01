# ChallengeJs
ALKEMY CHALLENGE
Challenge JS

Objetivo

Desarrollar una aplicación para administración de presupuesto personal. La misma debe
permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las
operaciones registradas.
Requerimientos Técnicos

Deberás desarrollar una API en Node.js junto a cualquiera de los siguientes frameworks, en
sus versiones estables:

● Express
● Adonis
● Koa

En el caso de querer utilizar otro framework es posible, pero debe consultarse con
anterioridad.

Los datos mostrados deben ser persistidos en una base de datos relacional. El esquema de
datos puede armarse según se considere apropiado en base a los requerimientos del
negocio. La API deberá exponer URLS que devuelvan datos en JSON.
Estos datos en JSON deberán ser consumidos por un cliente, a través de peticiones AJAX. El
cliente puede ser armado con
● React.js
● Angular
El trabajo realizado se subirá a un repositorio.

Secciones

Home
La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los ingresos y
egresos de dinero cargados, y un listado de los últimos 10 registrados.

ABM de operaciones (ingresos y egresos)
La aplicación deberá contener:
● Formulario de registro de operación. El mismo deberá contener:
○ Concepto
○ Monto
○ Fecha
○ Tipo (ingreso o egreso)
● Listado de operaciones registradas según su tipo (ingreso o egreso).
● Desde el listado, se debe poder modificar o eliminar una operación registrada
previamente. No debe ser posible modificar el tipo de operación (ingreso o egreso)
una vez creada.

Bonus

De forma adicional, puede:
Autenticación de usuarios
Agregar un formulario de registro y login para permitir identificar al usuario que utiliza la
aplicación, y vincular las operaciones registradas al usuario autenticado en el sistema, tanto
para el listado y creación de nuevos registros. Los datos indispensables para permitir el
ingreso deben ser un email y contraseña, pudiendo agregar los que se deseen.

Create User ✨

![signup](https://user-images.githubusercontent.com/61124379/116796086-38de7080-aab0-11eb-8cea-fc41ea96f314.png)

Log In User :rocket:

![signin](https://user-images.githubusercontent.com/61124379/116796079-28c69100-aab0-11eb-8c8b-f1af3bf34b67.png)

Home Page 🏠

![Home](https://user-images.githubusercontent.com/61124379/116796089-3d0a8e00-aab0-11eb-8823-f097f16ad211.png)

Budgets List 💹

![Budgets](https://user-images.githubusercontent.com/61124379/116796090-41cf4200-aab0-11eb-845c-889d36be83d8.png)

New Operation 🆕

![New Operation](https://user-images.githubusercontent.com/61124379/116796095-4b58aa00-aab0-11eb-9351-49340c23362c.png)

Edit Operation 🖊️

![editoperation](https://user-images.githubusercontent.com/61124379/116796091-44ca3280-aab0-11eb-9a73-77600f249a5f.png)

Delete Operation 🗡️

![deleteoperation](https://user-images.githubusercontent.com/61124379/116796093-47c52300-aab0-11eb-8cd5-0eb39278f31b.png)




