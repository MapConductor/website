---
id: developers
title: Para desarrolladores
sidebar_label: Para desarrolladores
---

MapConductor está diseñado para ser amigable con quienes se inician en el desarrollo de mapas en Android. En lugar de aprender una API diferente para cada proveedor, aprendes un conjunto de conceptos que puedes reutilizar entre varios SDK.

## Estado actual

- **Plataforma**: Android (iOS y otras plataformas están previstas, pero aún no están disponibles).
- **SDK de mapas para Android compatibles**:
  - Google Maps
  - Mapbox
  - ArcGIS Maps SDK
  - HERE SDK
  - MapLibre
- **Funciones disponibles a través de la API unificada**:
  - Mostrar un mapa
  - Añadir marcadores
  - Dibujar polilíneas y polígonos
  - Dibujar círculos
  - Añadir imágenes de fondo (actualmente solo en Google Maps)

## Uso a alto nivel (conceptual)

El siguiente ejemplo utiliza nombres ilustrativos para mostrar cómo podría verse MapConductor en la práctica. Consulta la documentación específica del SDK de MapConductor para ver la API real y los pasos de instalación.

```kotlin
// 1. Configurar el proveedor de mapas que quieres utilizar
val config = MapConductorConfig(
    provider = MapProvider.GoogleMaps // o Mapbox, ArcGIS, HERE, MapLibre
)

// 2. Crear y mostrar un mapa a través de MapConductor
val map = MapConductorMapView(context, config)

// 3. Usar la API unificada para añadir contenido
map.addMarker(latitude = 35.0, longitude = 139.0, title = "Hello Map")
map.addPolyline(points = listOf(/* ... */))
map.addCircle(center = /* ... */, radiusMeters = 200.0)
```

En lugar de llamar a cada SDK directamente, escribes la lógica del mapa contra la API de MapConductor. Si más adelante decides cambiar de proveedor, solo tienes que ajustar la configuración en lugar de reescribir toda la base de código.

## Dónde encontrar documentación detallada

Los pasos de instalación, la referencia completa de la API y ejemplos más completos estarán disponibles en un sitio de documentación separado para el SDK de MapConductor. Esta página se centra en el concepto y la dirección del proyecto más que en los detalles de implementación de bajo nivel.

