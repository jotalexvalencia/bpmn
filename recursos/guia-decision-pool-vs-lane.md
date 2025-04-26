
# Guía de Decisión: ¿Pool o Lane en BPMN?

## Criterios clave para la decisión

| Factor | Pool (participante separado) | Lane (rol dentro del mismo proceso) |
|--------|------------------------------|-------------------------------------|
| **Autonomía** | Entidad con procesos y controles independientes | Rol o departamento dentro de la misma organización |
| **Comunicación** | Comunicación formal mediante mensajes (contratos, órdenes) | Comunicación interna mediante flujos de secuencia |
| **Control del proceso** | Control independiente sobre sus actividades | Control centralizado dentro del mismo proceso |
| **Visibilidad** | Visibilidad limitada entre los participantes | Visibilidad completa del proceso |

## Lista de verificación para identificar un Pool

Considera usar un Pool separado cuando la entidad:

- [ ] Es una organización diferente (cliente, proveedor, socio)
- [ ] Tiene sus propios objetivos de negocio independientes
- [ ] Opera con sus propios procesos internos
- [ ] Intercambia documentos formales con tu organización
- [ ] Tiene autonomía para decidir cómo ejecutar sus actividades
- [ ] Tu organización no puede controlar directamente sus actividades

## Lista de verificación para identificar un Lane

Considera usar un Lane cuando el participante:

- [ ] Es un departamento o rol dentro de tu organización
- [ ] Ejecuta actividades bajo las mismas políticas y procedimientos organizacionales
- [ ] Se comunica mediante flujos de trabajo internos
- [ ] Está sujeto a la misma cadena de mando y control
- [ ] Comparte objetivos organizacionales comunes
- [ ] Su trabajo es visible y medible dentro del mismo proceso

## Ejemplos comunes

### Típicos Pools (entidades separadas)
- Proveedores externos
- Clientes
- Entidades reguladoras
- Socios comerciales
- Entidades financieras
- Compañías de seguros

### Típicos Lanes (roles internos)
- Departamentos (Ventas, Marketing, Finanzas)
- Roles específicos (Analista, Gerente, Director)
- Sistemas internos automatizados
- Niveles de aprobación
- Áreas funcionales (Front-office, Back-office)

## Notas importantes
- Un Pool siempre contiene un proceso completo e independiente
- La comunicación entre Pools siempre es mediante mensajes (líneas discontinuas)
- La comunicación dentro de un Pool (entre Lanes) siempre es mediante flujos de secuencia (líneas continuas)
- Un Lane nunca puede comunicarse directamente con otro Pool; la comunicación siempre pasa por el Pool que lo contiene
