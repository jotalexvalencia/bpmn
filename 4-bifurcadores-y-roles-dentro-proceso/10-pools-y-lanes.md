
# Pools y Lanes en BPMN

## Introducción

El objetivo de esta sección es aprender cómo delimitar los roles mediante el uso de Pools y Lanes en BPMN (Business Process Model and Notation). En la vida real, existen varios participantes en un proceso, no es una sola persona la que ejecuta todas las actividades. Asimismo, existen varios procesos dentro de una organización. Veremos cómo documentar esta situación en nuestros modelos BPMN.

## Pools: Representación de Procesos

### ¿Qué es un Pool?

Un Pool es un recuadro que agrupa en su parte interna todas las actividades que son parte de un proceso. En la parte izquierda del Pool se coloca el nombre del mismo.

### Características de los Pools:
- Representan un proceso completo o una entidad organizacional
- Contienen actividades, eventos y gateways relacionados con ese proceso
- Para comunicar entre procesos que se encuentran en diferentes pools, se utiliza un flujo de mensajes

## Lanes: Identificación de Participantes

### ¿Qué son los Lanes?

Los lanes (carriles) son subdivisiones dentro de un pool que representan diferentes roles o departamentos que ejecutan partes específicas del proceso.

### Características de los Lanes:
- Identifican a los participantes que ejecutan las diferentes tareas dentro de un proceso
- Se nombran según el rol que ejecuta ese grupo de actividades
- Una persona puede ejecutar tareas en diferentes procesos (y por tanto aparecer en diferentes lanes)

## Conexiones entre actividades y procesos

### Tipos de conexión:
1. **Flujo de secuencia**: Conecta actividades dentro de un mismo proceso (dentro de un pool)
2. **Flujo de mensajes**: Comunica dos procesos diferentes (entre distintos pools)

## Ejemplo práctico: Proceso de solicitud de crédito

Veamos un ejemplo del proceso de solicitud de crédito para la compra de un automóvil, identificando los roles y procesos involucrados.

### Procesos identificados:
1. **Proceso de evaluación de créditos**
2. **Proceso de evaluación de riesgos**

### Roles identificados:
1. En el proceso de evaluación de créditos:
   - Recepcionista del banco
   - Funcionario de créditos
2. En el proceso de evaluación de riesgos:
   - Analista de riesgos

### Flujo del proceso de evaluación de créditos:

**Lane: Recepcionista del banco**
1. Evento de inicio: Recibe solicitud
2. Actividad: Revisa la documentación
3. Actividad: Envía la solicitud al funcionario de crédito

**Lane: Funcionario de créditos**
1. Actividad: Evalúa la solicitud
2. Evento intermedio de espera: Espera la respuesta del área de evaluación de riesgos (evento de mensaje)
3. Gateway: ¿Está aprobado por riesgos?
   - Si está aprobado:
     - Actividad: Desembolsa el dinero
     - Evento de fin de mensaje: Comunicación al cliente (aprobación)
   - Si no está aprobado:
     - Evento de fin de mensaje: Comunicación al cliente (rechazo)

### Flujo del proceso de evaluación de riesgos:

**Lane: Analista de riesgos**
1. Evento de inicio de mensaje: Recibe solicitud de evaluación del funcionario de créditos
2. Actividad: Evalúa el riesgo de la solicitud y del cliente
3. Actividad: Determina el nivel de riesgo
4. Evento de fin de mensaje: Envía respuesta al funcionario de créditos

### Comunicación entre procesos:
- Flujo de mensaje desde la actividad del funcionario de créditos hacia el evento de inicio del proceso de evaluación de riesgos
- Flujo de mensaje desde el evento de fin del proceso de evaluación de riesgos hacia el evento intermedio de espera del funcionario de créditos

## Resumen

- Los **Pools** agrupan todas las actividades que forman parte de un proceso.
- Los **Lanes** identifican los diferentes roles que participan en la ejecución de las actividades de un proceso.
- La comunicación entre actividades dentro de un mismo proceso se realiza mediante **flujos de secuencia**.
- La comunicación entre procesos diferentes se realiza mediante **flujos de mensaje**.

Mediante el uso de pools y lanes, podemos representar de manera clara y estructurada los diferentes participantes y responsabilidades en un proceso de negocio, facilitando la comprensión del flujo de trabajo y la colaboración entre diferentes áreas o entidades.
