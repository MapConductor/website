---
id: developers
title: 開発者向け
sidebar_label: 開発者向け
---

MapConductor は、Android 向け地図開発に不慣れな開発者にも扱いやすいことを重視して設計されています。ベンダーごとに新しい API を覚え直すのではなく、1つのAPIを学べば、複数のプロバイダで再利用できることを目指しています。

## 現在のステータス

- **プラットフォーム**: Android（iOS など他プラットフォームは計画中で、まだ利用できません）
- **対応している Android 向け地図 SDK**:
  - Google Maps
  - Mapbox
  - ArcGIS Maps SDK
  - HERE SDK
  - MapLibre
- **統一 API 経由で利用できる機能**:
  - 地図の表示
  - マーカーの追加
  - ポリライン・ポリゴンの描画
  - サークルの描画
  - グラウンドイメージの追加（現在は Google Maps のみ対応）

## 使い方の概要

以下は、MapConductor（マップコンダクター）の簡単なサンプルコードです。実際の API やインストール手順については、別途用意する MapConductor SDK ドキュメントサイトを参照してください。

```kotlin
// 使用する地図SDKのstate
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
// マーカー
val markerState =
    remember {
        MarkerState(
            position = GeoPointImpl.fromLatLong(21.324513, -157.925074),
            draggable = true,
        )
    }

// 円
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

// 地図の表示
// Google Maps → GoogleMapViewState
// Mapbox → MapBoxViewState
MapLibreMapView(
    modifier = modifier,
    state = state,
    onMarkerDrag = { draggedState ->
        // マーカーがドラッグされたら、円の中心を移動
        circleState.center = draggedState.position
    },
) {
    Marker(markerState)
    Circle(circleState)
}
```

![MapConductorの例](/img/example.gif)
