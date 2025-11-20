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
  - Mostrar mapas
  - Añadir marcadores
  - Dibujar polilíneas y polígonos
  - Dibujar círculos
  - Añadir imágenes de fondo (actualmente solo en Google Maps)

## Ejemplo de uso

El siguiente es un código de muestra simple para MapConductor. Para obtener detalles completos de la API e instrucciones de instalación, consulta el sitio de documentación del SDK de MapConductor por separado.

```kotlin
// State del SDK de mapas que deseas usar
// Google Maps → rememberGoogleMapViewState
// Mapbox → rememberMapboxViewState
val state =
    rememberMapLibreMapViewState(
        cameraPosition =
            MapCameraPositionImpl(
                position = GeoPointImpl.fromLatLong(21.324513, -157.925074),
                zoom = 5.0,
            ),
    )
// Marcador
val markerState =
    remember {
        MarkerState(
            position = GeoPointImpl.fromLatLong(21.324513, -157.925074),
            draggable = true,
        )
    }

// Círculo
val circleState =
    remember {
        CircleState(
            id = "demo-circle",
            center = markerState.position,
            radiusMeters = 5000.0,
            strokeColor = Color.Magenta,
            strokeWidth = 2.dp,
            fillColor = Color.Cyan.copy(alpha = 0.3f),
            geodesic = true,
        )
    }

// Mostrar el mapa
// Google Maps → GoogleMapViewState
// Mapbox → MapBoxViewState
MapLibreMapView(
    modifier = modifier,
    state = state,
    onMarkerDrag = { draggedState ->
        // Cuando se arrastra el marcador, mover el centro del círculo
        circleState.center = draggedState.position
    },
) {
    Marker(markerState)
    Circle(circleState)
}
```

![Ejemplo de MapConductor](/img/example.gif)
