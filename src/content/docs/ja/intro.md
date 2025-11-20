---
id: intro
title: MapConductor 概要
sidebar_label: 概要
---


## MapConductorとは？

Google Maps, ArcGIS, Mapbox, MapLibre, Here, など世の中には数多くの地図SDKがあります。
普段使い慣れた地図SDKとは別のSDKを指定されて、API名もライフサイクルも全部覚え直し。
やっていることは「ピンを置く」「ルートを引く」だけなのに、文法も設計思想も違ってコードを書き換え。
さらにAndroidとiOSで挙動もサンプルも微妙に違い、原因調査だけで一日が溶けていく——そんな経験、ありませんか？

![](/img/ja/all-sdks-are-different.png)

MapCondutor（マップコンダクター）なら、複数の地図SDKを統一された共通のAPIで扱えます。
各地図SDKの細かいAPIの使い方を知る必要はありません。
地図の上にどうやってデータを表現したいのか、本来やりたいことに集中することができます。

![](/img/concept.png)

## 現在の対応状況

現時点では、MapConductor は Android プラットフォームにフォーカスしています。

- **プラットフォーム**: Android（iOS など他プラットフォームは計画中で、まだ利用できません）
- **対応している Android 向け地図 SDK**:
  - Maps SDK for Android(Google Maps Platform)
  - Mapbox Maps SDK for Android
  - ArcGIS Maps SDK for Kotlin
  - HERE SDK for Android Explore
  - MapLibre Native Android
- **統一 API 経由で利用できる機能**:
  - 地図の表示
  - マーカーの追加
  - ポリライン・ポリゴンの描画
  - サークルの描画
  - グラウンドイメージの追加（現在は Google Maps のみ対応）

## このプロジェクトが目指すもの

MapConductor は、複数の SDK やプラットフォームにまたがる地図アプリの開発・保守における実体験から生まれました。目標は次のとおりです。

- Android での地図開発のハードルを下げること。
- 地図プロバイダを切り替える際のコストを減らすこと。
- 地図 SDK のエコシステムを、よりオープンで健全なものにすること。

このプロジェクトは、日本の独立行政法人情報処理推進機構（IPA）が運営する政府支援プログラム「未踏アドバンスト（Mitou Advanced）」の支援を受けています。今後は、モバイルエコシステムをよりオープンで相互運用可能にし、単一ベンダーへの依存を減らすという共通の目標を持つ NLnet の Mobifree プログラムへの応募も計画しています。

## オープンソースとライセンス

MapConductor の Android SDK は、Apache License 2.0 の下で提供される自由かつオープンソースなソフトウェアとして開発されています。ソースコードは [github.com/MapConductor/android-sdk](https://github.com/MapConductor/android-sdk) で管理されており、現在一般公開に向けた準備を進めています。

## ロックインの低減と知識共有の促進

MapConductor は、各 SDK に共通する基本的な地図 API を標準化しつつ、必要に応じてネイティブの地図インスタンスに直接アクセスできるようにすることで、ベンダーロックインを減らしつつ各プロバイダ固有の機能も活かせるようにします。

これはデータベースの世界における SQL に近い発想です。MySQL、PostgreSQL、SQLite など実装が異なるデータベースでも、SQL という共通言語があるからこそ、開発者はそれぞれのエンジンに比較的容易に取り組めたり、ライブラリを共有できたりします。同じように、共通の地図 API を通じて Google Maps、Mapbox、ArcGIS、HERE、MapLibre などのコミュニティが互いに学び合い、ツールや知識を共有できるようになることを目指しています。
