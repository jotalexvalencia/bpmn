
# Ejemplos de Aplicación de Eventos en BPMN

## Introducción

En esta sección aplicaremos los conceptos teóricos de BPMN con ejercicios prácticos, enfocándonos en el uso de eventos en diferentes escenarios de procesos de negocio.

## Ejercicio 1: Apertura de Cuenta de Ahorros

### Descripción del proceso

Un cliente ha ido al banco y solicita abrir una cuenta de ahorros. La recepcionista le indica que saque un ticket para ser atendido por un funcionario. El cliente espera ser llamado. Cuando lo llaman, el funcionario le solicita la documentación requerida para la apertura. La persona entrega toda la información y espera a que le entreguen su tarjeta.

El funcionario le entrega un documento para que firme y le solicita que cambie la clave de la tarjeta y haga un depósito inicial. El cliente se dirige a la ventanilla para hacer el depósito. Luego de hacer el depósito, retorna donde el funcionario, quien le entrega la documentación final.

### Diagrama del proceso

1. **Evento de inicio**: Solicitud del cliente para abrir una cuenta de ahorros
2. **Actividad**: Sacar ticket para ser atendido
3. **Evento intermedio de espera**: Cliente espera ser llamado para la atención
4. **Actividad**: Funcionario solicita documentación requerida
5. **Actividad**: Cliente entrega los documentos
6. **Evento intermedio de espera**: Cliente espera mientras el funcionario realiza la apertura de cuenta
7. **Actividad**: Funcionario entrega la tarjeta temporal
8. **Actividad**: Funcionario indica al cliente que se acerque a realizar el depósito inicial
9. **Evento intermedio de espera**: Funcionario espera que el cliente realice el depósito
10. **Actividad**: Cliente retorna donde el funcionario
11. **Actividad**: Cliente entrega constancia del depósito inicial
12. **Actividad**: Funcionario entrega documentación final para firma
13. **Evento de finalización**: Proceso completado

## Ejercicio 2: Proceso de Cobranzas

### Descripción del proceso

El área de cobranzas revisa la relación de deudores dependiendo del número de cuotas vencidas de cada deudor, y toma acciones diferentes:

- **Clientes con una cuota vencida**: Se les envía un correo indicándole que tiene una cuota vencida.
- **Clientes con dos cuotas vencidas**: Se les envía una carta dándoles un plazo de dos días para cancelar, de lo contrario serán reportados a la central de riesgo como morosos.
- **Clientes con más de tres cuotas vencidas**: Se les llama por teléfono indicándoles que se iniciarán acciones judiciales de cobranza.

### Diagrama del proceso

1. **Evento de inicio temporizador**: Proceso se ejecuta todos los miércoles
2. **Actividad**: Revisar la relación de deudores
3. **Compuerta**: Selección por número de cuotas vencidas (3 caminos posibles)

**Camino 1 - Una cuota vencida**:
- **Actividad**: Enviar correo indicando que tiene una cuota vencida
- **Evento de finalización**: Finaliza este flujo

**Camino 2 - Dos cuotas vencidas**:
- **Actividad**: Enviar carta dando plazo de dos días para cancelar
- **Evento temporizador adosado a la actividad**: Espera de dos días
- **Compuerta**: ¿Pagó el cliente?
  - **Si pagó**:
    - **Actividad**: Verificar conformidad del pago
    - **Actividad**: Cancelar deuda en el sistema
    - **Evento de finalización**: Finaliza este flujo
  - **No pagó**:
    - **Actividad**: Reportar a central de riesgo
    - **Evento de finalización**: Finaliza este flujo

**Camino 3 - Tres o más cuotas vencidas**:
- **Actividad**: Llamar por teléfono para informar inicio de acciones legales
- **Evento de finalización**: Finaliza este flujo

## Errores comunes a evitar

1. **Actividad sin evento de finalización**: Todo flujo debe terminar con un evento de finalización.
2. **Actividades sin conexión**: Todas las actividades deben estar conectadas adecuadamente en el flujo.
3. **Falta de etiquetas en compuertas**: Es importante colocar las condiciones o resultados en las compuertas para claridad del diagrama.

## Conclusión

En esta sección hemos tenido la oportunidad de aplicar los conceptos teóricos sobre eventos en BPMN a través de ejercicios prácticos. Estos ejemplos demuestran cómo los eventos pueden ser utilizados para representar diferentes momentos y condiciones en los procesos de negocio, permitiendo modelar de manera efectiva flujos complejos de trabajo.
