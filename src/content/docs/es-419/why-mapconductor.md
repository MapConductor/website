---
title: Por qué importa MapConductor
description: Una explicación breve de por qué trabajar directamente con SDK de mapas se vuelve complejo y qué resuelve MapConductor.
sidebar_label: Por qué importa MapConductor
---

MapConductor es una capa común que reduce la complejidad que aparece cuando una aplicación se conecta directamente a varios SDK de mapas.

Con frameworks de UI declarativa como SwiftUI y Jetpack Compose, lo natural es reconstruir la interfaz a partir del estado. Sin embargo, muchos SDK de mapas siguen teniendo un diseño imperativo basado en actualizar objetos individuales. Esa diferencia es una fuente importante de complejidad en la implementación.

![La diferencia entre una libreria envoltorio simple y el diseno de nucleo compartido de MapConductor](~/assets/why-mapconductor/es-419/core-logic-diagram.png)

## Por qué integrar SDK directamente se vuelve difícil

- Es fácil terminar gestionando por separado el estado de marcadores, globos informativos y posición de cámara entre la UI y el SDK
- Cada SDK tiene diferencias en su API y en su modelo de eventos, incluso cuando la función parece la misma
- Conceptos y restricciones cambian entre MapKit, ArcGIS, Google Maps y otros
- Los cambios de UI y los cambios de renderizado del mapa quedan demasiado acoplados

Incluso el comportamiento de la cámara puede variar entre SDK. Cuando la aplicación intenta absorber esas diferencias por sí sola, la base de código se complica más de lo que la UI deja ver.

![Un ejemplo que muestra que el control de cámara en ArcGIS difiere del de otros SDK de mapas](~/assets/why-mapconductor/es-419/sdk-difference-camera-control_es-419.png)

## Qué hace MapConductor

MapConductor coloca una API unificada entre la aplicación y los SDK de mapas subyacentes. Las personas desarrolladoras trabajan con marcadores, figuras, cámara y eventos mediante conceptos compartidos, mientras que MapConductor absorbe las diferencias específicas de cada proveedor.

Eso permite que el código de la aplicación se concentre menos en qué SDK está activo y más en qué debe hacer la experiencia del mapa.

![Una ilustración de MapConductor como lenguaje común que apoya el intercambio de conocimiento y el desarrollo de librerías](~/assets/why-mapconductor/es-419/common-language-benefits_es-419.png)

## Por qué encaja bien con la UI declarativa

La UI declarativa funciona mejor cuando el estado está centralizado y la vista se deriva de ese estado. MapConductor encaja con ese modelo al facilitar que la visualización del mapa se trate como una UI guiada por estado.

Por ejemplo, si el marcador seleccionado o la posición de la cámara viven en el estado, el mapa puede actualizarse de manera natural cuando ese estado cambia. Eso reduce la cantidad de código específico de cada SDK que hay que escribir manualmente.

## No intenta ocultarlo todo

MapConductor no busca borrar por completo las diferencias entre SDK de mapas. Estandariza las partes que realmente conviene compartir, pero deja espacio para aprovechar fortalezas específicas de cada proveedor cuando hace falta.

En otras palabras, es una abstracción pragmática: menos complejidad sin perder flexibilidad.

## Puntos clave

- Tiende un puente entre la UI declarativa y los SDK de mapas imperativos
- Separa del código de aplicación las diferencias específicas de cada proveedor
- Facilita manejar funciones de mapas a través de un modelo de estado compartido
- Hace más fácil expandirse entre plataformas y proveedores

El valor de MapConductor no está solo en que puede mostrar mapas. Su valor está en organizar el desarrollo de aplicaciones de mapas de una forma que sea sostenible a largo plazo.
