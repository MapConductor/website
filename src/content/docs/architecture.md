---
id: architecture
title: High‑Level Architecture
sidebar_label: Architecture
---

At a high level, MapConductor sits between your app and the underlying map SDKs. Your app talks to MapConductor using a unified set of classes and methods. MapConductor then forwards those operations to the selected map provider.

For example, you can add a marker or draw a polygon through MapConductor, and MapConductor will translate that into the correct calls for Google Maps, Mapbox, ArcGIS, HERE, or MapLibre on Android.

## Core architecture

```mermaid
flowchart TB
  subgraph App["Your app"]
    UI["UI & business logic"]
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

From the developer’s point of view:

- You write your map code against the **Unified Map API**.
- The **Core** layer handles common behavior such as shapes, events, and state.
- The **Drivers** translate those common operations into each underlying provider’s SDK calls.

## Scope of abstraction

MapConductor does not try to wrap every single capability of each map SDK. Instead, it focuses on common operations such as showing a map, markers, and basic shapes, while still giving developers access to the underlying native map instances when they need provider‑specific features. This keeps the shared API simple and portable without sacrificing what makes each provider unique.
