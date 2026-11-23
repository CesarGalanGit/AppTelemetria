# 🛰️ AppTelemetria 

**AppTelemetria** es una aplicación web frontend desarrollada con **Angular** que simula un panel de monitorización en tiempo real para supervisar el estado de distintas sondas espaciales en el sistema solar. 

Este proyecto nació como una prueba práctica para poner en marcha los conceptos fundamentales de Angular moderno: comunicación entre componentes, control de flujo, directivas personalizadas y transformación de datos mediante pipes.

---

##  ¿Qué hace esta aplicación?

El panel permite visualizar y gestionar una flota de sondas (como *Voyager-IX* en Marte o *Kronos-Orbiter* en Saturno) ofreciendo las siguientes funcionalidades:

* **Monitorización general:** Muestra un resumen superior con el total de sondas que se encuentran actualmente en línea.
* **Filtro de emergencias:** Permite alternar la vista para mostrar únicamente las sondas en estado crítico (batería por debajo del 20% o desconectadas). Si todo está en orden, el sistema lo indica.
* **Pulso de recarga solar:** Cada sonda cuenta con un botón interactivo para enviarle energía. Al pulsarlo, suma un **+25% de batería** (hasta un máximo del 100%) y restablece su conexión si estaba fuera de línea.
* **Alertas visuales dinámicas:** Las tarjetas reaccionan visualmente al estado de cada nave mediante indicadores de batería baja, barras de progreso, estilos de desconexión y bordes de advertencia animados.
* **Cálculo de retardo de señal:** Calcula automáticamente cuánto tarda en llegar una transmisión desde la sonda hasta la Tierra en función de su distancia y la velocidad de la luz ($300.000\text{ km/s}$), mostrando el resultado en segundos o minutos.

---

##  Arquitectura y conceptos aplicados

Aunque es una aplicación sencilla (100% frontend con datos simulados en memoria), está estructurada siguiendo buenas prácticas de Angular:

1. **Componentes (`CentroControl` y `PanelSonda`):** Separación de responsabilidades entre el panel principal (que gestiona el estado global y los filtros) y las tarjetas individuales (que reciben datos mediante `@Input()` y notifican acciones con `@Output()`).
2. **Directivas Estructurales:** Uso de control de flujo (`@for`, `@if`, `@switch`) para renderizar dinámicamente las tarjetas, avisos de batería crítica e iconos según el planeta de destino.
3. **Directivas de Atributo:** Combinación de `ngClass` / `ngStyle` con una directiva personalizada (`appPulsoAlerta`) para resaltar visualmente las naves sin conexión.
4. **Pipes Nativos y Personalizados:** Uso de `UpperCasePipe`, `TitleCasePipe` y `DatePipe` para formatear textos y fechas, junto con un pipe propio (`retardoSenal`) para las conversiones astronómicas.

---

##  Cómo ejecutar el proyecto en local

Si quieres probar la aplicación en tu ordenador, sigue estos pasos:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/CesarGalanGit/AppTelemetria.git
   cd AppTelemetria
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Arranca el servidor de desarrollo:**
   ```bash
   ng serve
   ```

4. Abre tu navegador y entra en `http://localhost:4200/`.

---

*Desarrollado con Angular.*