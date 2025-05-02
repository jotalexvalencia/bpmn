# AUTOEVALUACIÓN 2

## Indicaciones:

1.  Diagrame el proceso descrito a continuación de atención de requisiciones de materiales varios usando el estándar BPMN.


## DESCRIPCIÓN DEL PROCESO: Atención de Reclamos en una oficina de Celulares

A continuación se detallan los pasos del proceso, estructurados dentro de un Pool principal con sus respectivos Lanes para facilitar el modelado en BPMN.

---

### Pool: ATENCIÓN RECLAMOS CELULARES

*   **Descripción:** Representa la entidad completa que gestiona el proceso de atención de reclamos de celulares.

#### Lane: Cliente (Jorge)

*   **Rol:** Persona que busca solución a un problema con su servicio/equipo celular. Interactúa con diferentes roles dentro de la oficina.

**Pasos:**

1.  **Llegar a la oficina:** Ingresa a las instalaciones.
2.  **Solicitar atención:** Interactúa con el Agente de Atención para indicar el motivo de su visita (problema con el servicio).
3.  **Recibir ticket:** Acepta el ticket de atención proporcionado por el Agente de Atención.
4.  **Esperar atención:** Se dirige a la zona de espera y aguarda a que su número aparezca en la pantalla.
    *   **[Modificación] Evento de Tiempo (15 min):** Si transcurren 15 minutos y su número no ha aparecido en la pantalla, Jorge decide irse de la oficina. *(Este flujo alternativo termina el proceso para este Lane)*.
5.  **Acudir a ventanilla:** Al ver su número y la ventanilla asignada en la pantalla, se dirige hacia ella.
6.  **Identificarse y dar número:** Proporciona su identificación y número de celular al personal de Ventanilla cuando se lo solicita.
7.  **Explicar problema:** Describe los inconvenientes: facturación incorrecta y fallas en el teléfono al personal de Ventanilla.
8.  **Entregar teléfono:** Facilita su celular al personal de Ventanilla para la revisión técnica.
9.  **Esperar resolución:** Aguarda mientras el personal de Ventanilla gestiona la revisión de facturación y la revisión técnica (que implica interacción con el Lane Técnico).
10. **Recibir teléfono y confirmación:** El personal de Ventanilla le informa que el problema está resuelto y le entrega el teléfono.
11. **Retirarse:** Da por concluida la atención y sale de la oficina.

#### Lane: Agente de Atención

*   **Rol:** Primer punto de contacto, orienta y gestiona el flujo inicial de clientes.

**Pasos:**

1.  **Recibir al cliente:** Aborda a Jorge a su llegada.
2.  **Consultar motivo:** Pregunta el tipo de atención que necesita.
3.  **Entregar ticket:** Genera y entrega un ticket con un número de atención a Jorge.
4.  **Indicar espera:** Informa a Jorge que debe esperar a que su número sea llamado en la pantalla y se le asigne una ventanilla.
5.  **(Implícito) Gestionar Cola/Llamado:** Interactúa con el sistema (o realiza manualmente) para que el número del cliente aparezca en pantalla y se asigne a una ventanilla disponible cuando sea su turno. *(Nota: La pantalla/sistema en sí no es un Lane, pero su función es activada/gestionada desde este rol o el de Ventanilla)*.

#### Lane: Ventanilla

*   **Rol:** Personal que atiende directamente el reclamo del cliente y coordina la solución.

**Pasos:**

1.  **Llamar al cliente (implícito):** El sistema/Agente de Atención le notifica/asigna el siguiente cliente (Jorge).
2.  **Recibir al cliente:** Atiende a Jorge cuando llega a la ventanilla asignada.
3.  **Solicitar datos:** Pide a Jorge que se identifique y proporcione su número de celular.
4.  **Escuchar problema:** Recibe la descripción detallada del problema de facturación y del teléfono.
5.  **Iniciar diagnóstico:** Determina que se requiere una revisión de facturación y una revisión técnica del aparato.
6.  **Enviar a Técnico:** Remite el celular de Jorge al Lane Técnico para su revisión (genera una solicitud/entrega física).
7.  **Revisar facturación:** Accede al sistema y analiza el historial de facturación de Jorge.
8.  **Corregir facturación:** Realiza los ajustes necesarios en la facturación si encuentra errores.
9.  **Recibir de Técnico:** Recibe el celular de vuelta del Lane Técnico con el informe de la revisión.
10. **Consolidar solución:** Verifica que tanto la revisión técnica como la corrección de la facturación se hayan completado.
11. **Informar resolución:** Comunica a Jorge que el problema (facturación y teléfono) ha sido resuelto.
12. **Entregar teléfono:** Devuelve el celular a Jorge.
13. **Finalizar atención:** Marca la atención como finalizada en el sistema.

#### Lane: Técnico

*   **Rol:** Área especializada en la revisión y diagnóstico de equipos celulares.

**Pasos:**

1.  **Recibir teléfono:** Recibe el celular enviado desde el Lane Ventanilla.
2.  **Realizar revisión:** Ejecuta las pruebas y diagnósticos correspondientes en el teléfono de Jorge.
3.  **Devolver teléfono:** Retorna el celular al Lane Ventanilla, posiblemente con un informe del estado o las acciones realizadas.

---

### Nota sobre la Modificación para BPMN:

*   Dentro del **Lane: Cliente**, la tarea "Esperar atención" tendría asociado un **Evento Intermedio de Temporizador (Timer Intermediate Event)** adjunto a su borde.
*   Este evento se configuraría con una duración de 15 minutos.
*   Si el temporizador se dispara (pasan los 15 minutos) *antes* de que ocurra el evento que indica que debe "Acudir a ventanilla" (que sería gatillado por una señal/mensaje desde el Lane Agente de Atención o Ventanilla), el flujo del proceso para el Lane Cliente se desviaría hacia un **Evento de Fin (End Event)** que represente "Cliente se retira por demora".

