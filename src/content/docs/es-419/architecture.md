---
id: architecture
title: Arquitectura de alto nivel
sidebar_label: Arquitectura
---

A grandes rasgos, MapConductor se sitúa entre tu aplicación y los SDK de mapas subyacentes. Tu app habla con MapConductor usando un conjunto unificado de clases y métodos, y MapConductor reenvía esas operaciones al proveedor de mapas seleccionado.

Por ejemplo, puedes añadir un marcador o dibujar un polígono a través de MapConductor, y MapConductor lo traducirá a las llamadas adecuadas de Google Maps, Mapbox, ArcGIS, HERE o MapLibre en Android.

## Arquitectura principal

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

Desde el punto de vista de la persona desarrolladora:

- Escribes tu código de mapas contra la **Unified Map API**.
- La capa **Core** se encarga del comportamiento común, como figuras, eventos y estado.
- Los **Drivers** traducen esas operaciones comunes a las llamadas concretas de cada SDK de proveedor.

## Alcance de la abstracción

MapConductor no intenta envolver todas las capacidades de cada SDK de mapas. Se enfoca en operaciones comunes como mostrar el mapa, marcadores y figuras básicas, pero sigue permitiendo el acceso a las instancias nativas del mapa cuando se necesitan funciones específicas de un proveedor. De este modo, la API compartida se mantiene simple y portable sin sacrificar lo que hace único a cada proveedor.
