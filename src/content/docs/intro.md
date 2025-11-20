---
id: intro
title: MapConductor Overview
sidebar_label: Overview
---


## What is MapConductor?

There are many map SDKs in the world, such as Google Maps, ArcGIS, Mapbox, MapLibre, and HERE.
When you're assigned a different SDK than the one you're used to, you have to relearn all the API names and lifecycles.
Even though you're just doing simple tasks like "placing pins" or "drawing routes," you have to rewrite code because the syntax and design philosophies are different.
Furthermore, the behavior and samples differ slightly between Android and iOS, and you can spend an entire day just investigating the causes — have you ever experienced this?

With MapConductor, you can handle multiple map SDKs through a unified common API.
You don't need to know the detailed API usage of each map SDK.
You can focus on what you really want to do: how to express your data on the map.

![Operating actual map SDKs through an abstracted API that unifies multiple map SDKs](/img/concept.png)

## Current Status

Currently, we are developing for Jetpack Compose for Android apps. Other platforms such as iOS and Flutter are planned but not yet available.

- **Supported Android map SDKs**:
  - Maps SDK for Android (Google Maps Platform)
  - Mapbox Maps SDK for Android
  - ArcGIS Maps SDK for Kotlin
  - HERE SDK for Android Explore
  - MapLibre Native Android

|                 | Google Maps | Mapbox   | Here     | ArcGIS   | MapLibre |
|-----------------|-------------|----------|----------|----------|----------|
| Map             | &#x2611;    | &#x2611; | &#x2611; | &#x2611; | &#x2611; |
| Marker          | &#x2611;    | &#x2611; | &#x2611; | &#x2611; | &#x2611; |
| Circle          | &#x2611;    | &#x2611; | &#x2611; | &#x2611; | &#x2611; |
| Polyline        | &#x2611;    | &#x2611; | &#x2611; | &#x2611; | &#x2611; |
| Polygon         | &#x2611;    | &#x2611; | &#x2611; | &#x2611; | &#x2611; |
| GroundImage     | &#x2611;    | N/A      | N/A      | N/A      | N/A      |
| RasterTileLayer | &#x2610;    | &#x2610; | &#x2610; | &#x2610; | &#x2610; |
| VectorTileLayer | &#x2610;    | &#x2610; | &#x2610; | &#x2610; | &#x2610; |

- **Features available through the unified API**:
  - Displaying maps
  - Adding markers
  - Drawing polylines and polygons
  - Drawing circles
  - Adding ground images (currently only supported on Google Maps)

## What MapConductor Aims For

The goal of MapConductor is to "make it possible to switch map SDKs as easily as changing clothes."
In other words, to allow developers and businesses to freely choose map SDKs according to their purposes.

Previously, once you incorporated a map SDK into your app, replacing it later meant starting from scratch.
By standardizing the way map SDKs are handled, it becomes possible to replace them with minimal code modifications.

- "I feel like I'm fighting with SDK differences more than the map itself"
- "I gave up because it didn't support Jetpack Compose"
- "That SDK costs less than half, but we don't have engineers who can develop with it"

By standardizing map SDK handling, you can say goodbye to these struggles.

![We want to make it possible to freely choose map SDKs](/img/change-map-sdks.jpg)

## Reducing Lock-in and Promoting Knowledge Sharing

MapConductor reduces vendor lock-in while still allowing you to leverage provider-specific features by standardizing basic map APIs common to each SDK while providing direct access to native map instances when needed.

This concept is similar to SQL in the database world. Even with different database implementations like MySQL, PostgreSQL, and SQLite, the common language of SQL allows developers to approach each engine relatively easily and share libraries. Similarly, we aim to enable communities around Google Maps, Mapbox, ArcGIS, HERE, MapLibre, and others to learn from each other and share tools and knowledge through a common map API.

## Support Programs

This project is supported by the "Mitou Advanced" government support program operated by the Information-technology Promotion Agency (IPA), an independent administrative institution in Japan. In the future, we plan to apply to NLnet's Mobifree program, which shares the common goal of making mobile ecosystems more open and interoperable while reducing dependence on single vendors, and to the OSGeo Foundation's Incubation program, which supports GIS software and platforms.

## Open Source and License

MapConductor's Android SDK is developed as free and open-source software under the Apache License 2.0. The source code is maintained at [github.com/MapConductor/android-sdk](https://github.com/MapConductor/android-sdk) and is currently being prepared for public release.
