---
id: intro
title: MapConductor – Descripción general
sidebar_label: Descripción general
---

MapConductor es un SDK de código abierto que permite controlar varios SDK de mapas para Android a través de una única API sencilla. En lugar de reescribir tu app cada vez que cambias de proveedor de mapas, puedes centrarte en la experiencia de tu aplicación, no en las particularidades de cada proveedor.

## ¿Qué es MapConductor?

A primera vista, crear una app móvil basada en mapas parece sencillo: mostrar un mapa, añadir algunos marcadores y quizá dibujar una ruta. En la práctica, los desarrolladores se encuentran rápidamente con una gran complejidad. Cada SDK de mapas tiene su propia API, sus casos límite y sus diferencias entre plataformas. Cuando tu app tiene que funcionar en Android e iOS, o cuando quieres cambiar de un proveedor a otro, terminas reescribiendo la misma lógica una y otra vez.

MapConductor nace para reducir esa fricción. Desde el punto de vista de la persona desarrolladora, obtienes una API coherente para las funciones de mapas más habituales. Por debajo, MapConductor se encarga de hablar con los SDK de Android de cada proveedor. Puedes comenzar con un proveedor de mapas y mantener abierta la opción de cambiar más adelante sin descartar tu código.

El proyecto está pensado para aplicaciones de geolocalización de propósito general. Tanto si estás construyendo una app de entregas, una herramienta para trabajo de campo o una aplicación de visualización especializada, queremos que las operaciones básicas del mapa resulten accesibles incluso para quienes se inician en el desarrollo para Android o iOS.

## Capacidades actuales

Por ahora, MapConductor se centra en la plataforma Android.

- **Plataforma**: Android (iOS y otras plataformas están previstas, pero aún no están disponibles).
- **SDK de mapas para Android compatibles**:
  - Google Maps
  - Mapbox
  - ArcGIS Maps SDK
  - HERE SDK
  - MapLibre
- **Funciones disponibles a través de la API unificada**:
  - Mostrar un mapa
  - Añadir marcadores
  - Dibujar polilíneas y polígonos
  - Dibujar círculos
  - Añadir imágenes de fondo (actualmente solo en Google Maps)

## Por qué existe este proyecto

MapConductor surge de la experiencia real de construir y mantener apps de mapas en distintos SDK y plataformas. Sus objetivos son:

- Facilitar el inicio en el desarrollo de mapas en Android.
- Reducir el coste de cambiar entre proveedores de mapas.
- Impulsar un ecosistema de SDK de mapas más abierto y saludable.

Este trabajo cuenta con el apoyo del programa Mitou Advanced (未踏アドバンスト) en Japón, una iniciativa respaldada por el gobierno y gestionada por la Information-technology Promotion Agency (IPA). En el futuro, planeamos solicitar el apoyo del programa Mobifree de NLnet, porque compartimos el mismo objetivo: hacer que los ecosistemas móviles sean más abiertos, interoperables y menos dependientes de un único proveedor.

## Software libre y licencia

El SDK de Android de MapConductor se desarrolla como software libre y de código abierto bajo la licencia Apache 2.0. El código fuente se mantiene en [github.com/MapConductor/android-sdk](https://github.com/MapConductor/android-sdk) y actualmente se está preparando para su publicación.

## Reducir el bloqueo de proveedor y compartir conocimiento

Al estandarizar un conjunto común de APIs básicas de mapas entre distintos SDK, y al mismo tiempo mantener el acceso a las instancias nativas del mapa cuando se necesitan funciones específicas de cada proveedor, MapConductor reduce el bloqueo de proveedor sin ocultar las capacidades propias de cada plataforma.

Esperamos un efecto similar al de SQL en el mundo de las bases de datos: así como SQL permite a las personas desarrolladoras moverse entre MySQL, PostgreSQL o SQLite y compartir librerías entre motores, una API de mapas compartida puede ayudar a que las comunidades de Google Maps, Mapbox, ArcGIS, HERE y MapLibre aprendan unas de otras y reutilicen herramientas en lugar de permanecer aisladas.

