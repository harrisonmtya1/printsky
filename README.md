# Printsky
Es un proyecto de una aplicacion movil que tiene como objetivo gestionar las solicitudes de servicio  de los diferentes clientes de una empresa que se dedica al soporte y reparacion de quipos de impresion.

La aplicación permite gestionar toda la trazabilidad de un soporte técnico, desde crear una incidencia de acuerdo con la falla que reporte un usuario hasta que un técnico realice el soporte y el usuario este de acuerdo con el funcionamiento del equipo.
La idea de la aplicacion parte de la necesidad de mejorar tiempos en el soporte, el soporte para un equipo de impresión presentaba tiempos extensos por falta de oportunidad en la información, por ejemplo, al momento de que un técnico revise una impresora y requiere de un repuesto este no se solicita hasta que el técnico llegue a la empresa y presenta los soportes para pedirlo, lo que podría ser más eficiente si el repuesto se pide de inmediato por medio de una aplicación. Adicional se maneja muchos formatos físicos que puede ser tratados de forma virtual y evitar el gasto de papel.
Por lo anterior se propone el desarrollo de la App móvil donde estén los formatos que se diligencia de forma física, se puedan guardar registros fotográficos del soporte, solicitar repuestos y que cumpla con las demás necesidades del proceso.
Cuando se reciba una solicitud de soporte de un usuario, el sistema permite crear esta solicitud, registrando por medio de un formulario todos los datos del soporte; datos como: nombre de usuario o empresa, detalles de daño, síntomas, fecha, serial de impresora, modelo y ubicación. Una vez creada la solicitud se debe poder asignar a un técnico para su gestión y este recibirá una alerta de nuevo soporte
El sistema tiene una interfaz para los técnicos, en esta visualizan los soportes asignados a su nombre y el estado de cada uno. Los casos de soporte deben poderse abrir para ver los detalles, ingresar observaciones, solicitar repuestos o cambiar su estado. También se tiene una interfaz para la administración, donde se puedan gestionar usuarios para los técnicos, administrar casos de soporte y administrar solicitudes de repuestos para impresoras.



Ejecucion:
El proyecto se puede ejecutar en un computador con sistema operativo windows, linux o macOS y ser visualizado desde el navegador web o en un dispositivo movil con sistema operativo android o iOS, para cualquiera de las opciones se debe descargar el codigo del repositorio o clonarlo. A continuacion se indican los pasos para la ejecucion en un computador o dispositivo movil

Requisitos:
 - Node js
 - Git
 - npm
 - Angular version 16.2.2
 - Android Studio
   

- Conar repositorio
  git clone https://github.com/harrisonmtya1/printsky.git

- Instalacion de depenencias
  Estando en el directorio del proyecto se debe ejectuar el comando 'npm install' para instalar todas las dependencias del proyecto
  
- Ejecucion en computador para visualizar desde un navegador
  Ejecutar comando 'ng serve -o' esto ejecuta el proyecto y abre el navegador predeterminado
  Se debe visualizar en el navegador con un tamaño de un telefono movil, ya que la interfaz esta configurada para dispositivos mobiles

- Ejecucion en un dispositivo movil android
  Borrar directorio android que esta en la raiz del proyecto
  Ejecutar el comando 'ng build' esto compila el proyecto y crea un directorio con la version de produccion en la ruta 'dist/'
  Ejecutar el comando 'npx cap add android' este comando coge el directorio de produccion creado en el anterior paso y crea un directorio llamado android donde estara el poroyecto para ser ejecutado con android studio
  Ejecutar el comando 'npx cap open android' esto abre el proyecto en android stuio

  
  




