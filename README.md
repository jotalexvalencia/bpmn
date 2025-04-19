
# Curso de BPMN

<div align="center">
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Círculo gris de fondo (representa el 100%) -->
    <circle cx="100" cy="100" r="80" fill="none" stroke="#e6e6e6" stroke-width="15" />
    
    <!-- Círculo de progreso (inicialmente 0%) -->
    <!-- Para actualizar: cambia el valor "0" en "stroke-dasharray" según tu progreso -->
    <!-- 0% = "0 502.4", 25% = "125.6 502.4", 50% = "251.2 502.4", 75% = "376.8 502.4", 100% = "502.4 502.4" -->
    <circle cx="100" cy="100" r="80" fill="none" stroke="#4CAF50" stroke-width="15" 
            stroke-dasharray="0 502.4" stroke-dashoffset="0" 
            transform="rotate(-90 100 100)" />
    
    <!-- Texto de porcentaje en el centro -->
    <text x="100" y="105" font-family="Arial" font-size="30" text-anchor="middle" fill="#333" font-weight="bold">
      0%
    </text>
    
    <!-- Etiqueta de progreso -->
    <text x="100" y="130" font-family="Arial" font-size="12" text-anchor="middle" fill="#666">
      Progreso del curso
    </text>
  </svg>
</div>

## 📋 Seguimiento de Progreso

Este README incluye un sistema de seguimiento para marcar tu avance en el curso. Cada módulo completado representa un 25% del progreso total.

### Cómo utilizar este sistema:

1. **Marca las lecciones completadas** cambiando `[ ]` por `[x]` en las casillas
2. **Cuando completes un módulo entero**, actualiza el gráfico SVG según las instrucciones al final

## Módulo 1: Fundamentos de BPMN (25% del total)
- [ ] Lección 1.1: Introducción a BPMN
- [ ] Lección 1.2: Elementos básicos de modelado
- [ ] Lección 1.3: Flujos y conexiones

## Módulo 2: Modelado de Procesos (25% del total)
- [ ] Lección 2.1: Actividades y tareas
- [ ] Lección 2.2: Eventos y compuertas
- [ ] Lección 2.3: Pools y lanes

## Módulo 3: BPMN Avanzado (25% del total)
- [ ] Lección 3.1: Subprocesos y transacciones
- [ ] Lección 3.2: Manejo de excepciones
- [ ] Lección 3.3: Eventos complejos

## Módulo 4: Implementación Práctica (25% del total)
- [ ] Lección 4.1: Herramientas BPMN
- [ ] Lección 4.2: Caso práctico completo

---

## 🔄 Instrucciones para Actualizar el Progreso

### Pasos para actualizar el gráfico de progreso:

1. Cuando completes todas las lecciones de un módulo, debes modificar dos partes del SVG:

   a) **Actualiza el círculo de progreso**: Busca la línea que contiene `stroke-dasharray="0 502.4"` y cámbiala según tu progreso:
   
      - Para 25% (1 módulo completado): `stroke-dasharray="125.6 502.4"`
      - Para 50% (2 módulos completados): `stroke-dasharray="251.2 502.4"`
      - Para 75% (3 módulos completados): `stroke-dasharray="376.8 502.4"`
      - Para 100% (4 módulos completados): `stroke-dasharray="502.4 502.4"`
   
   b) **Actualiza el texto del porcentaje**: Busca la línea que contiene `0%` entre etiquetas `<text>` y cámbiala por el porcentaje correspondiente (`25%`, `50%`, `75%` o `100%`).

2. También puedes cambiar el color del círculo de progreso modificando el valor `stroke="#4CAF50"`:
   - Verde (completado): `#4CAF50`
   - Amarillo (en progreso): `#FFC107`
   - Rojo (por iniciar): `#F44336`

### Ejemplo:

Para mostrar un 50% de progreso (2 módulos completados), el SVG debería verse así:

```xml
<circle cx="100" cy="100" r="80" fill="none" stroke="#FFC107" stroke-width="15" 
        stroke-dasharray="251.2 502.4" stroke-dashoffset="0" 
        transform="rotate(-90 100 100)" />

<text x="100" y="105" font-family="Arial" font-size="30" text-anchor="middle" fill="#333" font-weight="bold">
  50%
</text>
```

### 📝 Notas Técnicas (para referencia):

- El gráfico SVG utiliza un círculo con una circunferencia de aproximadamente 502.4 unidades (2π × r, donde r=80)
- El atributo `stroke-dasharray` controla cuánto del círculo se dibuja:
  - El primer número es la longitud del trazo visible
  - El segundo número es la circunferencia total
- La transformación `rotate(-90 100 100)` hace que el progreso comience desde la parte superior

---

_¡Buena suerte con tu curso de BPMN!_
