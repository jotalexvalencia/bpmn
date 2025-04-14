
# Ejemplos de Aplicación de BPMN

Este documento contiene ejemplos prácticos de aplicación de Modelado de Procesos de Negocio (BPMN), según lo revisado en la sesión de aprendizaje.

## Conceptos Clave Repasados

- **Evento**: Punto que gatilla el inicio de un flujo
- **Secuencia de flujo**: Representadas por flechas que conectan actividades
- **Actividades**: Tareas que se realizan en el proceso
- **Proceso**: Conjunto de actividades relacionadas
- **Asociación**: Permite vincular elementos como datos o comentarios
- **Objeto de datos**: Información adicional (como procedimientos o documentos)
- **Anotación**: Comentarios o aclaraciones dentro del diagrama

## Ejemplo 1: Proceso de Preparación de Comida

### Descripción
Diagrama del proceso de preparar una comida, desde tener hambre hasta comer.

### Elementos del diagrama
1. **Evento de inicio**: "Tenemos hambre"
2. **Actividades**:
   - Seleccionar el plato a preparar
   - Comprar los ingredientes
   - Preparar la comida
   - Comer
3. **Elementos adicionales**:
   - Comentario: Lista de ingredientes que necesitamos comprar
   - Objeto de datos: Receta (detalle del procedimiento)
4. **Evento de fin**: Culminación del proceso después de comer

## Ejemplo 2: Preparación de Comida con Ensalada Opcional

### Descripción
Diagrama que incluye un bifurcador para decidir si preparar ensalada como acompañamiento.

### Elementos del diagrama
1. **Evento de inicio**: Inicio del proceso de preparación
2. **Bifurcador** (rombo): "¿Queremos comer ensalada?"
   - Si la respuesta es afirmativa: Flujo hacia "Preparar ensalada"
   - Si la respuesta es negativa: Flujo directo hacia preparar plato principal
3. **Actividades**:
   - Preparar ensalada (opcional)
   - Preparar plato principal
   - Comer
4. **Evento de fin**: Culminación del proceso después de comer

### Concepto clave: Bifurcador
- Representado por un rombo
- Direcciona el flujo según una condición específica
- Solo permite seguir uno de los caminos alternativos

## Ejemplo 3: Solicitud de Crédito Vehicular

### Descripción
Diagrama del proceso de solicitud y evaluación de un crédito para compra de auto.

### Elementos del diagrama
1. **Evento de inicio**: Solicitud de crédito
2. **Actividades**:
   - Recepción de solicitud (banco)
   - Revisión de documentación
   - Evaluación de solicitud
   - Comunicación al cliente (aprobación o rechazo)
   - Desembolso (solo si es aprobado)
3. **Bifurcador**: "¿Aprueba la solicitud?"
   - Si es aprobada: Comunicación de aprobación → Desembolso → Fin
   - Si es rechazada: Comunicación de rechazo → Fin
4. **Elementos adicionales**:
   - Objetos de datos: Resultado de la evaluación (para ambos caminos)
5. **Eventos de fin**: Culminación del proceso (después de desembolso o después de comunicar rechazo)

## Conclusión

Estos ejemplos demuestran la aplicación práctica de los elementos de BPMN para modelar procesos de diferente complejidad. Los diagramas permiten visualizar claramente el flujo de actividades, las decisiones basadas en condiciones, y la información adicional necesaria para completar los procesos.

El material incluye ejercicios adicionales para practicar estos conceptos y reforzar el aprendizaje.
