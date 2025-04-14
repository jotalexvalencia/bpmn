
# ¿Qué es un evento y sus tipos en BPMN?

## Introducción

En esta sección aprenderemos cómo podemos simplificar los flujos de procesos mediante el uso de **eventos** en BPMN (Business Process Model and Notation).

## ¿Qué es un evento?

Un evento es algo que ocurre en algún momento durante un proceso y se representa con un círculo en BPMN. Los eventos pueden clasificarse según el momento en que ocurren dentro del flujo:

- **Antes del flujo**: Eventos de inicio
- **Durante la ejecución del flujo**: Eventos intermedios
- **Al final del flujo**: Eventos de finalización

## Tipos de eventos según su posición en el proceso

### Eventos de inicio

- Se representan con un círculo simple
- Gatillan el inicio del proceso
- Marcan el comienzo de un proceso o subproceso
- Cuando el inicio de un proceso no está definido, simplemente se inicia

#### Subtipos de eventos de inicio

1. **Evento de inicio temporizador**
   - Ejemplo: Un proceso que debe iniciarse todos los días a las 09:00
   - Se utiliza cuando el proceso comienza en un momento específico

2. **Evento de inicio de mensaje**
   - Se representa con un círculo con un sobre dentro
   - Ejemplo: Cuando llega una orden de compra, se inicia el proceso para atenderla
   - Se utiliza cuando el proceso comienza al recibir un mensaje

### Eventos intermedios

- Se representan con un doble círculo concéntrico
- Ocurren durante la ejecución del proceso
- Pueden suceder en cualquier momento a lo largo del flujo

#### Ejemplos de eventos intermedios

1. **Evento intermedio de espera**
   - Ejemplo: En una oficina, después de sacar un ticket y antes de la atención, hay un evento de espera hasta que aparece un mensaje en pantalla

2. **Eventos intermedios adosados a una actividad**
   - Se colocan en el borde de una actividad
   - Ejemplo: En un proceso de orden de compra, se espera el pago con un límite de dos días
     - Si el pago no llega en dos días, se cancela la orden
     - Si el pago llega a tiempo, se prepara y entrega el pedido

### Eventos de finalización

- Se representan con un círculo de borde grueso
- Ocurren al finalizar un proceso
- Marcan el término de un flujo de proceso

## Ejemplos prácticos

### Ejemplo básico de un proceso con los tres tipos de eventos

1. **Evento de inicio**: Queremos cocinar
2. **Evento intermedio**: Esperar que la cena se haya preparado
3. **Evento de finalización**: Terminar de comer

### Simplificación de un flujo con eventos

**Proceso original:**
1. Llega un mensaje
2. Preguntamos si es consulta de cliente
3. Si es consulta: preparamos y elaboramos respuesta
4. Si no es consulta: terminamos el proceso

**Proceso simplificado con eventos:**
1. Evento de inicio de mensaje: Solicitud de cliente
2. Preparamos la respuesta
3. Evento de finalización con mensaje: Enviamos respuesta al cliente

## Conclusión

Los eventos en BPMN son elementos fundamentales para representar momentos específicos en los procesos de negocio. Su correcta utilización permite simplificar los diagramas y hacerlos más comprensibles, al tiempo que capturan con precisión las circunstancias de inicio, espera y finalización de los procesos.
