# Objetos en BPMN (Business Process Model and Notation)

## Introducción

Los objetos en BPMN nos permiten representar flujos complejos o grupos de actividades que se repiten en los procesos de negocio. Esta notación estandarizada facilita la documentación y comunicación de procesos.

## Tipos de Objetos

### 1. Subprocesos

Cuando tenemos flujos muy complejos o grupos de actividades que se repiten, podemos agruparlas en un subproceso.

**Ejemplo**: Un conjunto de tareas para generar una orden de compra podría incluir:
- Registrar el requerimiento
- Validar stock
- Generar la orden

Estas actividades se pueden representar con un solo objeto llamado "Generar orden de compra".

**Representación**: Se utiliza el símbolo de una actividad con un recuadro y el símbolo "+" (más). Esto indica que dentro de este símbolo hay un conjunto de actividades que puede repetirse en distintos puntos del proceso o que simplifica el flujo.

### 2. Objetos de Datos

Existen dos tipos principales:

1. **Objeto de datos**: Sirve para asociar a una actividad con un documento o información importante que debe ser consultada por la persona que ejecuta la actividad.

2. **Comentario**: Cuando queremos proporcionar mayor información dentro del flujo sobre el desarrollo de una actividad, utilizamos este artefacto.

### 3. Eventos

Los eventos marcan puntos importantes en el proceso:

- **Evento de inicio**: Marca el comienzo de un proceso.
- **Evento de fin**: Marca la finalización de un proceso.

### 4. Objetos de Conexión

Los objetos de conexión pueden ser:

1. **Secuenciadores de flujo**: Indican por dónde va el flujo. Muestran la trayectoria de una instancia a lo largo del proceso. Es importante que todo flujo tenga una conexión entre todos sus elementos mediante estos secuenciadores.

2. **Secuencia de mensajes**: Se utiliza cuando tenemos dos procesos que necesitan comunicarse. Por ejemplo, cuando un proceso termina con un evento que envía un mensaje a otro proceso para que este se inicie.

3. **Asociación**: Cuando queremos proporcionar más información a una tarea, agregamos un elemento de datos con una asociación. Esto permite asociar documentos o comentarios a tareas específicas para proporcionar información complementaria.

## Importancia en la Documentación de Procesos

Estos objetos son fundamentales para:
- Simplificar flujos complejos
- Representar actividades repetitivas
- Proporcionar información adicional
- Establecer conexiones claras entre elementos
- Documentar la comunicación entre procesos

La correcta utilización de estos objetos permite crear diagramas de procesos claros y comprensibles que facilitan la comunicación entre todas las partes interesadas.