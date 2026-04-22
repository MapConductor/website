---
id: developers
title: 開発者向け
head:
  - tag: meta
    attrs:
      name: description
      content: MapConductorのAndroid・iOS対応状況、対応地図プロバイダ、統一APIで利用できる機能、基本的な使い方を紹介します。
sidebar_label: 開発者向け
---

MapConductor は、Android・iOS 向け地図開発を行うすべての開発者が扱いやすいように設計されています。ベンダーごとに新しい API を覚え直すのではなく、1つのAPIを学べば、複数のプロバイダやプラットフォームで再利用できることを目指しています。

## 現在のステータス

### Android

- **対応している地図 SDK**: Google Maps、Mapbox、ArcGIS Maps SDK、HERE SDK、MapLibre
- **UI フレームワーク**: Jetpack Compose
- **統一 API 経由で利用できる機能**:
  - 地図の表示
  - マーカーの追加（自由にカスタマイズ可能）
  - InfoBubble（Jetpack Compose で記述可能）
  - ポリライン・ポリゴンの描画
  - メートル単位で半径を指定できる Circle
  - グラウンドイメージの追加
  - ヒートマップ
  - マーカークラスタリング
  - ラスタレイヤー

### iOS

- **対応している地図 SDK**: Google Maps、Mapbox、MapKit、ArcGIS Maps SDK、MapLibre
- **UI フレームワーク**: SwiftUI
- **統一 API 経由で利用できる機能**:
  - 地図の表示
  - マーカーの追加（自由にカスタマイズ可能）
  - InfoBubble（SwiftUI で記述可能）
  - ポリライン・ポリゴンの描画
  - メートル単位で半径を指定できる Circle
  - グラウンドイメージの追加
  - ヒートマップ
  - マーカークラスタリング
  - ラスタレイヤー

## Android 使い方の概要

以下は、Android 向け MapConductor の簡単なサンプルコードです。実際の API やインストール手順については、MapConductor Android SDK ドキュメントサイトを参照してください。

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
// Google Maps → GoogleMapView
// Mapbox → MapboxMapView
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

## iOS 使い方の概要

以下は、iOS 向け MapConductor の簡単なサンプルコードです。実際の API やインストール手順については、MapConductor iOS SDK ドキュメントサイトを参照してください。

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

![MapConductorの例](/img/example.gif)
