---
id: intro
title: MapConductor – Overview
sidebar_label: Overview
---

MapConductor is an open‑source SDK that lets you control multiple Android map SDKs through a single, easy‑to‑learn API. Instead of rewriting your app whenever you change map providers, you focus on your app — not on each vendor’s quirks.

## What is MapConductor?

Building a map‑based mobile app sounds simple at first: show a map, add a few pins, maybe draw a route. In reality, developers quickly run into a wall of complexity. Every map SDK has its own API, its own edge cases, and its own platform‑specific differences. When your app needs to run on Android and iOS, or when you want to switch from one provider to another, you often end up rewriting the same logic again and again.

MapConductor was created to reduce this friction. From the perspective of a developer, you get a single, consistent API for common map features. Under the hood, MapConductor takes care of talking to each vendor’s Android SDK. You can start with one map provider and keep the option to switch later, without throwing away your code.

The project is aimed at general‑purpose location‑based applications. Whether you are building a delivery app, a field‑worker tool, or a niche visualization app, we want basic map operations to feel approachable, even for developers who are new to Android or iOS.

## Current capabilities

At the moment, MapConductor focuses on the Android platform.

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

## Why this project exists

MapConductor comes from real‑world frustration with building and maintaining map apps across different SDKs and platforms. The goal is to:

- Make it easier to get started with map development on Android.
- Reduce the cost of switching between map providers.
- Encourage a healthier, more open ecosystem for map SDKs.

This work is supported by the Mitou Advanced (未踏アドバンスト) program in Japan, a government‑backed initiative run by the Information‑technology Promotion Agency (IPA), a Japanese governmental organization. In the future, we plan to apply to NLnet’s Mobifree programme, because we share the same goal: making mobile ecosystems more open, more interoperable, and less dependent on single vendors.

## Open source & license

MapConductor’s Android SDK is developed as free and open‑source software under the Apache License 2.0. The source code is maintained at [github.com/MapConductor/android-sdk](https://github.com/MapConductor/android-sdk) and is currently being prepared for public release.

## Reducing lock‑in and growing shared knowledge

By standardizing a common set of basic map APIs across different SDKs while still exposing the underlying native map instances, MapConductor reduces vendor lock‑in without hiding provider‑specific capabilities. We expect a similar effect to SQL in the database world: just as SQL allows developers to move between MySQL, PostgreSQL, or SQLite and share libraries across engines, a shared map API can help communities around Google Maps, Mapbox, ArcGIS, HERE, and MapLibre learn from each other and reuse tools instead of being isolated.
