---
title: なぜMapConductorが必要なのか
head:
  - tag: meta
    attrs:
      name: description
      content: 地図SDKを直接扱うと複雑になりやすい理由と、MapConductorが共通APIと状態管理でその複雑さを減らす仕組みを説明します。
sidebar_label: MapConductorの必要性
---

MapConductor は、複数の地図 SDK をそのままアプリに結びつけたときに発生する複雑さを減らすための共通レイヤーです。

SwiftUI や Jetpack Compose のような宣言的 UI では、状態の変化に応じて UI 全体を組み立て直す考え方が基本になります。一方、多くの地図 SDK は個別のオブジェクトを直接更新する命令的な設計を持っており、この差が実装を複雑にします。

![一般的なラッパーライブラリとMapConductorの構造の違い](~/assets/why-mapconductor/ja/core-logic-diagram.png)

## 直接 SDK を扱うと難しい理由

- マーカー、吹き出し、カメラ位置などの状態を UI 側と SDK 側で別々に管理しやすい
- SDK ごとに API やイベントの扱い方が異なり、同じ機能でも実装が変わる
- MapKit、ArcGIS、Google Maps などで概念や制約が少しずつ違う
- UI の変更と地図描画の変更が密結合になり、保守しにくくなる

たとえばカメラ制御ひとつ取っても、SDK ごとに前提が揃っているとは限りません。こうした差異をアプリ側で毎回吸収しようとすると、見た目以上にコードが複雑になります。

![ArcGISだけカメラ制御の前提が異なることを示す図](~/assets/why-mapconductor/ja/sdk-difference-camera-control.png)

## MapConductor がしていること

MapConductor は、アプリと地図 SDK の間に統一された API を置きます。開発者はマーカーや図形、カメラ、イベントを共通の考え方で扱い、実際の SDK 差異は MapConductor 側が吸収します。

これにより、アプリ側では「どの SDK を使っているか」よりも「地図上で何をしたいか」に集中できます。

![MapConductorが共通言語として知識共有とライブラリ開発を支えるイメージ](~/assets/why-mapconductor/ja/common-language-benefits.png)

## 宣言的 UI と相性が良い理由

宣言的 UI では、状態を 1 か所に集めて、その状態から画面を組み立てる設計が重要です。MapConductor もこの考え方に合わせて、地図表示を状態ベースで扱いやすくしています。

たとえば、選択中のマーカーやカメラ位置を状態として持てば、その状態の変更に応じて地図表現を自然に更新できます。SDK 固有の更新手順を毎回書かなくてよくなるため、UI コードが読みやすくなります。

## すべてを隠すための仕組みではない

MapConductor は、地図 SDK の違いを完全に消すことを目的にはしていません。共通化しやすい部分をまとめつつ、必要な場面では各 SDK の特性や拡張性も活かせるように設計されています。

つまり MapConductor は、自由度を失わずに複雑さだけを下げるための実用的な抽象化です。

## 要点

- 宣言的 UI と命令的な地図 SDK のずれを埋める
- SDK ごとの差分をアプリコードから切り離す
- 地図機能を共通の状態モデルで扱いやすくする
- 複数プラットフォームや複数プロバイダへの展開をしやすくする

MapConductor の価値は、地図を表示できること自体ではなく、地図アプリ開発を継続しやすい形に整理できることにあります。
