# Checklist para Autoevaluación de Diagramas BPMN

## Verificación Básica
- [ ] ¿El diagrama tiene un evento de inicio claramente definido?
- [ ] ¿El diagrama tiene al menos un evento de fin?
- [ ] ¿Todas las actividades están conectadas con flujos de secuencia?
- [ ] ¿Todas las actividades tienen un nombre claro y descriptivo?
- [ ] ¿Hay un camino conectado desde el inicio hasta cada uno de los fines?

## Carriles y Participantes
- [ ] ¿Cada actividad está asignada al carril (lane) correcto?
- [ ] ¿Los nombres de los carriles representan roles o sistemas específicos?
- [ ] ¿Las transiciones entre carriles tienen sentido y están bien representadas?

## Gateways (Bifurcadores)
- [ ] ¿Para cada gateway divisor hay un gateway convergente correspondiente?
- [ ] ¿Los gateways exclusivos (X) tienen etiquetas de pregunta o condición?
- [ ] ¿Los flujos salientes de gateways exclusivos tienen etiquetas de respuesta?
- [ ] ¿Los gateways paralelos (+) se utilizan correctamente para actividades simultáneas?
- [ ] ¿Los gateways inclusivos (O) incluyen todas las combinaciones posibles?

## Eventos
- [ ] ¿Los eventos intermedios (como temporizadores o mensajes) están usados correctamente?
- [ ] ¿Los eventos de error están asociados con el manejo apropiado?
- [ ] ¿Hay eventos de compensación para actividades que pueden necesitar revertirse?

## Flujo Lógico
- [ ] ¿Hay bucles infinitos en el flujo? (deben evitarse)
- [ ] ¿Existen callejones sin salida? (actividades sin flujo saliente)
- [ ] ¿Hay caminos que nunca se ejecutarán? (inalcanzables)
- [ ] ¿Las condiciones en las ramas son mutuamente excluyentes cuando es necesario?
- [ ] ¿Las condiciones en las ramas son exhaustivas? (cubren todos los casos posibles)

## Semántica Empresarial
- [ ] ¿El diagrama refleja claramente la lógica del negocio?
- [ ] ¿El nivel de detalle es apropiado (ni muy general ni muy detallado)?
- [ ] ¿El proceso es eficiente o hay pasos redundantes?
- [ ] ¿Se manejan adecuadamente los casos excepcionales?

## Elementos Específicos
- [ ] ¿Los subprocesos se utilizan para encapsular lógica compleja?
- [ ] ¿Los artefactos (anotaciones, grupos) se utilizan para aclarar información?
- [ ] ¿Los objetos de datos muestran claramente qué información fluye entre actividades?

## Estilo y Legibilidad
- [ ] ¿El diagrama evita cruzar demasiadas líneas de flujo?
- [ ] ¿El tamaño del diagrama es manejable o se necesita dividir en subprocesos?
- [ ] ¿Las etiquetas son concisas pero informativas?
- [ ] ¿Se usa un código de colores consistente si se aplica?