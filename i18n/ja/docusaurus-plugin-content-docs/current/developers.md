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

## 使い方の概要（ハイレベルな例）

以下は、MapConductor を使ったときの雰囲気を示す概念的なサンプルコードです。実際の API やインストール手順については、別途用意する MapConductor SDK ドキュメントサイトを参照してください。

```kotlin
// 1. 利用する地図プロバイダを設定
val config = MapConductorConfig(
    provider = MapProvider.GoogleMaps // or Mapbox, ArcGIS, HERE, MapLibre
)

// 2. MapConductor 経由で地図を生成して表示
val map = MapConductorMapView(context, config)

// 3. 統一 API を使って地図上に要素を追加
map.addMarker(latitude = 35.0, longitude = 139.0, title = "Hello Map")
map.addPolyline(points = listOf(/* ... */))
map.addCircle(center = /* ... */, radiusMeters = 200.0)
```

各 SDK を個別に直接呼び出す代わりに、MapConductor の API に対して地図ロジックを書きます。将来プロバイダを切り替えたい場合も、設定を変更するだけで済み、コードベース全体を書き換える必要はありません。

## 詳細ドキュメントの所在

インストール手順、完全な API リファレンス、より実践的なサンプルコードは、別途公開予定の MapConductor SDK ドキュメントサイトで提供します。このページでは、個々のメソッドの詳細よりも、プロジェクトのコンセプトと方向性に焦点を当てています。

