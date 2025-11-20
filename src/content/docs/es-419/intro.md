---
id: intro
title: MapConductor Descripción general
sidebar_label: Descripción general
---


## ¿Qué es MapConductor?

En el mundo existen muchos SDK de mapas, como Google Maps, ArcGIS, Mapbox, MapLibre y HERE.
Cuando te asignan un SDK diferente al que estás acostumbrado, tienes que reaprender todos los nombres de las API y los ciclos de vida.
Aunque solo estés haciendo tareas simples como "colocar marcadores" o "dibujar rutas", tienes que reescribir el código porque la sintaxis y las filosofías de diseño son diferentes.
Además, el comportamiento y los ejemplos difieren ligeramente entre Android e iOS, y puedes pasar un día entero solo investigando las causas. ¿Has experimentado esto alguna vez?

Con MapConductor, puedes manejar múltiples SDK de mapas a través de una API común unificada.
No necesitas conocer el uso detallado de la API de cada SDK de mapas.
Puedes concentrarte en lo que realmente quieres hacer: cómo expresar tus datos en el mapa.

![Operar los SDK de mapas reales a través de una API abstraída que unifica múltiples SDK de mapas](/img/concept.png)

## Estado actual

Actualmente, estamos desarrollando para Jetpack Compose para aplicaciones Android. Otras plataformas como iOS y Flutter están planificadas pero aún no están disponibles.

- **SDK de mapas para Android compatibles**:
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

- **Funciones disponibles a través de la API unificada**:
  - Mostrar mapas
  - Añadir marcadores
  - Dibujar polilíneas y polígonos
  - Dibujar círculos
  - Añadir imágenes de fondo (actualmente solo compatible con Google Maps)

## Lo que MapConductor busca lograr

El objetivo de MapConductor es "hacer posible cambiar de SDK de mapas tan fácilmente como cambiar de ropa".
En otras palabras, permitir que los desarrolladores y las empresas elijan libremente los SDK de mapas según sus propósitos.

Anteriormente, una vez que incorporabas un SDK de mapas en tu aplicación, reemplazarlo más tarde significaba empezar desde cero.
Al estandarizar la forma en que se manejan los SDK de mapas, se hace posible reemplazarlos con modificaciones mínimas de código.

- "Siento que estoy luchando más con las diferencias de SDK que con el mapa en sí"
- "Renuncié porque no soportaba Jetpack Compose"
- "Ese SDK cuesta menos de la mitad, pero no tenemos ingenieros que puedan desarrollar con él"

Al estandarizar el manejo de SDK de mapas, puedes despedirte de estas dificultades.

![Queremos hacer posible elegir libremente los SDK de mapas](/img/change-map-sdks.jpg)

## Reducir el bloqueo de proveedor y promover el intercambio de conocimientos

MapConductor reduce el bloqueo de proveedor mientras aún te permite aprovechar las funciones específicas del proveedor mediante la estandarización de las API de mapas básicas comunes a cada SDK, al tiempo que proporciona acceso directo a instancias de mapas nativas cuando sea necesario.

Este concepto es similar a SQL en el mundo de las bases de datos. Incluso con diferentes implementaciones de bases de datos como MySQL, PostgreSQL y SQLite, el lenguaje común de SQL permite a los desarrolladores abordar cada motor con relativa facilidad y compartir bibliotecas. De manera similar, nuestro objetivo es permitir que las comunidades alrededor de Google Maps, Mapbox, ArcGIS, HERE, MapLibre y otros aprendan unos de otros y compartan herramientas y conocimientos a través de una API de mapas común.

## Programas de apoyo

Este proyecto cuenta con el apoyo del programa de apoyo gubernamental "Mitou Advanced" operado por la Agencia de Promoción de Tecnologías de la Información (IPA), una institución administrativa independiente de Japón. En el futuro, planeamos solicitar el programa Mobifree de NLnet, que comparte el objetivo común de hacer que los ecosistemas móviles sean más abiertos e interoperables mientras se reduce la dependencia de proveedores únicos, y al programa de Incubación de la Fundación OSGeo, que apoya software y plataformas GIS.

## Código abierto y licencia

El SDK de Android de MapConductor se desarrolla como software libre y de código abierto bajo la licencia Apache 2.0. El código fuente se mantiene en [github.com/MapConductor/android-sdk](https://github.com/MapConductor/android-sdk) y actualmente se está preparando para su lanzamiento público.
