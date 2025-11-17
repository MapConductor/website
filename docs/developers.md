---
id: developers
title: For Developers
sidebar_label: For Developers
---

MapConductor is designed to be friendly to developers who are new to Android map development. Instead of learning a new API for each vendor, you learn one set of concepts and reuse them across providers.

## Current status

- **Platform**: Android (iOS and other platforms are planned, but not available yet).
- **Supported Android map SDKs**:
  - Google Maps
  - Mapbox
  - ArcGIS Maps SDK
  - HERE SDK
  - MapLibre
- **Supported features through the unified API**:
  - Displaying a map
  - Adding markers
  - Drawing polylines and polygons
  - Adding circles
  - Adding ground images (currently supported on Google Maps only)

## High‑level usage (conceptual)

The following example uses illustrative names to show how MapConductor might look in practice. Please refer to the separate MapConductor SDK documentation site for the actual API and installation steps.

```kotlin
// 1. Configure which map provider you want to use
val config = MapConductorConfig(
    provider = MapProvider.GoogleMaps // or Mapbox, ArcGIS, HERE, MapLibre
)

// 2. Create and show a map through MapConductor
val map = MapConductorMapView(context, config)

// 3. Use the unified API to add content
map.addMarker(latitude = 35.0, longitude = 139.0, title = "Hello Map")
map.addPolyline(points = listOf(/* ... */))
map.addCircle(center = /* ... */, radiusMeters = 200.0)
```

Instead of calling each SDK directly, you write your map code against the MapConductor API. If you later decide to switch providers, you change the configuration, not the entire codebase.

## Where to find detailed docs

Installation steps, full API reference, and more complete examples will be available on a separate MapConductor SDK documentation site. This page focuses on the concept and direction of the project rather than low‑level implementation details.

