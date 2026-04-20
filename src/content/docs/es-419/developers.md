---
id: developers
title: Para desarrolladores
sidebar_label: Para desarrolladores
---

MapConductor está diseñado para ser amigable con quienes desarrollan apps de mapas en Android e iOS. En lugar de aprender una API diferente para cada proveedor, aprendes un conjunto de conceptos que puedes reutilizar entre varios SDK y plataformas.

## Estado actual

### Android

- **SDK de mapas compatibles**: Google Maps, Mapbox, ArcGIS Maps SDK, HERE SDK, MapLibre
- **Framework de UI**: Jetpack Compose
- **Funciones disponibles a través de la API unificada**:
  - Mostrar mapas
  - Añadir marcadores (totalmente personalizables)
  - InfoBubble (escrito en Jetpack Compose)
  - Dibujar polilíneas y polígonos
  - Círculo con radio en metros
  - Añadir imágenes de fondo
  - Mapas de calor
  - Agrupación de marcadores (clustering)
  - Capas ráster

### iOS

- **SDK de mapas compatibles**: Google Maps, Mapbox, MapKit, ArcGIS Maps SDK, MapLibre
- **Framework de UI**: SwiftUI
- **Funciones disponibles a través de la API unificada**:
  - Mostrar mapas
  - Añadir marcadores (totalmente personalizables)
  - InfoBubble (escrito en SwiftUI)
  - Dibujar polilíneas y polígonos
  - Círculo con radio en metros
  - Añadir imágenes de fondo
  - Mapas de calor
  - Agrupación de marcadores (clustering)
  - Capas ráster

## Ejemplo de uso en Android

El siguiente es un código de muestra simple para MapConductor en Android. Para obtener detalles completos de la API e instrucciones de instalación, consulta el sitio de documentación del SDK de Android de MapConductor.

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
// Google Maps → GoogleMapView
// Mapbox → MapboxMapView
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

## Ejemplo de uso en iOS

El siguiente es un código de muestra simple para MapConductor en iOS. Para obtener detalles completos de la API e instrucciones de instalación, consulta el sitio de documentación del SDK de iOS de MapConductor.

```swift
import SwiftUI
import MapConductorCore
import MapConductorForMapLibre

struct ContentView: View {
    @StateObject private var state = MapLibreViewState(
        cameraPosition: MapCameraPosition(
            position: GeoPoint(latitude: 21.324513, longitude: -157.925074),
            zoom: 5
        )
    )

    @State private var markerPosition = GeoPoint(latitude: 21.324513, longitude: -157.925074)

    var body: some View {
        // Google Maps → GoogleMapView
        // Mapbox → MapboxMapView
        // MapKit → MapKitMapView
        MapLibreMapView(state: state) {
            Marker(
                position: markerPosition,
                icon: DefaultMarkerIcon(label: "T"),
                draggable: true,
                onDragEnd: { position in
                    markerPosition = position
                }
            )
            Circle(
                center: markerPosition,
                radiusMeters: 5000,
                fillColor: UIColor.cyan.withAlphaComponent(0.3),
                strokeColor: UIColor.magenta,
                strokeWidth: 2
            )
        }
    }
}
```

![Ejemplo de MapConductor](/img/example.gif)
