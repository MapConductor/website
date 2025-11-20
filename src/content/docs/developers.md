---
id: developers
title: For Developers
sidebar_label: For Developers
---

MapConductor is designed to be friendly to developers who are new to Android map development. Instead of learning a new API for each vendor, you learn one set of concepts and reuse them across providers.

## Current Status

- **Platform**: Android (iOS and other platforms are planned, but not available yet).
- **Supported Android map SDKs**:
  - Google Maps
  - Mapbox
  - ArcGIS Maps SDK
  - HERE SDK
  - MapLibre
- **Features available through the unified API**:
  - Displaying maps
  - Adding markers
  - Drawing polylines and polygons
  - Drawing circles
  - Adding ground images (currently supported on Google Maps only)

## Usage Example

The following is a simple sample code for MapConductor. For actual API details and installation instructions, please refer to the separate MapConductor SDK documentation site.

```kotlin
// State for the map SDK you want to use
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
// Marker
val markerState =
    remember {
        MarkerState(
            position = GeoPointImpl.fromLatLong(21.324513, -157.925074),
            draggable = true,
        )
    }

// Circle
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

// Display the map
// Google Maps → GoogleMapViewState
// Mapbox → MapBoxViewState
MapLibreMapView(
    modifier = modifier,
    state = state,
    onMarkerDrag = { draggedState ->
        // When the marker is dragged, move the circle center
        circleState.center = draggedState.position
    },
) {
    Marker(markerState)
    Circle(circleState)
}
```

![MapConductor example](/img/example.gif)
