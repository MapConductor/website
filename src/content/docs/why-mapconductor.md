---
title: Why MapConductor Matters
description: A concise explanation of why working directly with map SDKs gets complex and what MapConductor solves.
sidebar_label: Why MapConductor Matters
---

MapConductor is a shared layer that reduces the complexity that appears when an app is tied directly to multiple map SDKs.

With declarative UI frameworks like SwiftUI and Jetpack Compose, the natural approach is to rebuild the UI from state. Many map SDKs, however, are still designed around imperative object updates. That gap is where application code starts to become hard to maintain.

![The difference between a simple wrapper library and MapConductor's shared core design](~/assets/why-mapconductor/en/core-logic-diagram.png)

## Why direct SDK integration gets hard

- State such as markers, callouts, and camera position can easily be split between the UI layer and the SDK layer
- APIs and event models differ across SDKs, even when the feature looks the same
- Concepts and constraints vary between MapKit, ArcGIS, Google Maps, and others
- UI changes and map rendering changes become tightly coupled

Even camera behavior can differ across SDKs. Once an application starts absorbing these differences directly, the codebase becomes more complex than the UI suggests.

![An example showing that ArcGIS camera control differs from other map SDKs](~/assets/why-mapconductor/en/sdk-difference-camera-control_en.png)

## What MapConductor does

MapConductor places a unified API between the app and the underlying map SDKs. Developers work with markers, shapes, camera state, and events through shared concepts, while MapConductor absorbs provider-specific differences.

That lets application code focus less on which SDK is active and more on what the map experience should do.

![An illustration of MapConductor as a common language that supports knowledge sharing and library development](~/assets/why-mapconductor/en/common-language-benefits_en.png)

## Why it works well with declarative UI

Declarative UI works best when state is centralized and the view is derived from that state. MapConductor fits that model by making map rendering easier to treat as state-driven UI.

For example, if the selected marker or camera position is held in state, the map can update naturally as the state changes. That reduces the amount of SDK-specific update code developers need to write by hand.

## It is not trying to hide everything

MapConductor is not meant to erase every difference between map SDKs. It standardizes the parts that are practical to share while still leaving room to use provider-specific strengths when needed.

In other words, it is a pragmatic abstraction: lower complexity without removing flexibility.

## Key points

- It bridges the gap between declarative UI and imperative map SDKs
- It separates provider-specific differences from application code
- It makes map features easier to manage through a shared state model
- It makes it easier to expand across platforms and providers

The value of MapConductor is not just that it can display maps. Its value is that it organizes map application development into a shape that is easier to sustain over time.
