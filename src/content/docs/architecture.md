---
id: architecture
title: High‑Level Architecture
sidebar_label: Architecture
---

At a high level, MapConductor sits between your app and the underlying map SDKs. Your app talks to MapConductor using a unified set of classes and methods. MapConductor then forwards those operations to the selected map provider.

MapConductor is available for both Android (Kotlin + Jetpack Compose) and iOS (Swift + SwiftUI), each with its own SDK package built on a shared design.

## Android architecture

```mermaid
flowchart TB
  subgraph App["Your app (Android)"]
    UI["UI & business logic<br/>(Jetpack Compose)"]
  end

  subgraph MC["MapConductor SDK (Android)"]
    API["Unified Map API"]
    Core["Core features<br/>(map, markers, shapes, events)"]
    Drivers["Map SDK drivers"]
  end

  subgraph Providers["Map SDK providers"]
    GMaps["Google Maps"]
    Mapbox["Mapbox"]
    ArcGIS["ArcGIS Maps SDK"]
    HERE["HERE SDK"]
    MapLibre["MapLibre"]
  end

  UI --> API
  API --> Core
  Core --> Drivers
  Drivers --> GMaps
  Drivers --> Mapbox
  Drivers --> ArcGIS
  Drivers --> HERE
  Drivers --> MapLibre
```

## iOS architecture

```mermaid
flowchart TB
  subgraph App["Your app (iOS)"]
    UI["UI & business logic<br/>(SwiftUI)"]
  end

  subgraph MC["MapConductor SDK (iOS)"]
    API["Unified Map API"]
    Core["Core features<br/>(map, markers, shapes, events)"]
    Drivers["Map SDK drivers"]
  end

  subgraph Providers["Map SDK providers"]
    GMaps["Google Maps"]
    Mapbox["Mapbox"]
    MapKit["MapKit"]
    ArcGIS["ArcGIS Maps SDK"]
    MapLibre["MapLibre"]
  end

  UI --> API
  API --> Core
  Core --> Drivers
  Drivers --> GMaps
  Drivers --> Mapbox
  Drivers --> MapKit
  Drivers --> ArcGIS
  Drivers --> MapLibre
```

From the developer’s point of view:

- You write your map code against the **Unified Map API**.
- The **Core** layer handles common behavior such as shapes, events, and state.
- The **Drivers** translate those common operations into each underlying provider’s SDK calls.

## Scope of abstraction

MapConductor does not try to wrap every single capability of each map SDK. Instead, it focuses on common operations such as showing a map, markers, and basic shapes, while still giving developers access to the underlying native map instances when they need provider‑specific features. This keeps the shared API simple and portable without sacrificing what makes each provider unique.
