# Registro de usuarios e inventario de productos

Recuerde que deben de ejecutar ```npm install``` para recostruir los modulos de Node.
Ejecutar ``node index.js`` para iniciar la aplicacion 

1. La aplicacion cuenta con 3 opciones principales
╔═════════════════════╗
    MENU PRINCIPAL
╚═════════════════════╝
? Seleccione Una Opcion (Use arrow keys)
> 1. Registro de Usuarios
  2. Buscar usuarios Base de datos
  3. Inventario
  0. Salir

2. En la opcion de registro de usuarios, se crear, modifica o elimina usuarios,
   se almacena en una base de datos de mongodb.
╔══════════════════════╗
  REGISTRO DE USUARIOS
╚══════════════════════╝
? Seleccione Una Opcion (Use arrow keys)
> 1. Crear usuario nuevo
  2. Modificar un usuario nuevo
  3. Borrar un usuario
  0. Salir

3. Busca usuarios en la base de datos en los diferentes filtros
╔══════════════════════╗
  BUSQUEDA DE USUARIOS
╚══════════════════════╝
? Seleccione Una Opcion (Use arrow keys)
> 1. Buscar por nombre
  2. Buscar por email
  3. Buscar por numero
  4. Mostrar usuarios registrados
  0. Salir

4. Seccion donde se crea, elimina categorias y productos, y se muestra todo el inventario,
   para entrar a esta seccion hay que pasar por una validacion de loging. Todo cambio echo en esa secion es guardado con el id del usuario logeado. 
╔══════════════════════╗
       INVENTARIO
╚══════════════════════╝
? Seleccione Una Opcion (Use arrow keys)
> 1. Crear Catrgoria
  2. Borrar Catrgoria
  3. Registrar Producto
  4. Modificar Producto
  5. Borrar Producto
  6. Mostrar Inventario
  0. Salir