import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LOCALE_CONTENT = {
  en: {
    description: 'A unified map SDK for mobile developers',
    subtitle: 'A unified map SDK for mobile developers',
    heroMessage: (
      <>
        Let&apos;s make your
        <br />
        map apps easier!
      </>
    ),
    paragraphs: [
      <>
        MapConductor is an open-source SDK that lets you control multiple Android map
        SDKs through a single, easy-to-learn API. Instead of rewriting your app whenever
        you change map providers, you focus on your app — not on each vendor&apos;s quirks.
      </>,
      <>
        The project is aimed at general-purpose location-based applications and is built
        to be approachable even for developers who are new to Android or iOS.
      </>
    ],
    buttons: {
      getStarted: 'Get started',
      developers: 'For developers'
    }
  },
  ja: {
    description: 'モバイル開発者のための統一された地図SDK',
    subtitle: 'モバイル開発者のための統一された地図SDK',
    heroMessage: (
      <>
        地図アプリを
        <br />
        もっと簡単に
        <br />
        作れるようにしよう
        <br />
      </>
    ),
    paragraphs: [
      <>
        MapConductor は、複数の Android 向け地図 SDK を単一のわかりやすい API でまとめて扱える
        オープンソース SDK です。地図プロバイダを変更するたびにアプリのコードを書き直すのではなく、
        アプリ本体に集中できるようにすることを目指しています。
      </>,
      <>
        一般的な位置情報アプリケーション向けに設計されており、Android や iOS に不慣れな開発者でも、
        地図機能に取り組みやすくすることを目標としています。
      </>
    ],
    buttons: {
      getStarted: '概要を見る',
      developers: '開発者向け情報'
    }
  },
  'es-419': {
    description: 'Un SDK de mapas unificado para desarrolladores móviles',
    subtitle: 'Un SDK de mapas unificado para desarrolladores móviles',
    heroMessage: (
      <>
        Hagamos que tus
        <br />
        apps de mapas sean
        <br />
        mucho más fáciles
        <br />
      </>
    ),
    paragraphs: [
      <>
        MapConductor es un SDK de código abierto que permite controlar varios SDK de mapas
        para Android a través de una única API sencilla. En lugar de reescribir tu app cada
        vez que cambias de proveedor de mapas, puedes centrarte en tu aplicación, no en las
        particularidades de cada proveedor.
      </>,
      <>
        El proyecto está pensado para aplicaciones de geolocalización de propósito general y
        busca ser accesible incluso para quienes se inician en el desarrollo para Android o iOS.
      </>
    ],
    buttons: {
      getStarted: 'Empezar',
      developers: 'Para desarrolladores'
    }
  }
};

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const content = LOCALE_CONTENT[locale] || LOCALE_CONTENT.en;

  return (
    <Layout title="MapConductor" description={content.description}>
      <main className="top">
        <div className="welcome">
          <div className="caption">
            <h1>MapConductor</h1>
            <h2>{content.subtitle}</h2>
          </div>
          <div className="mapcat">
            <img src="/img/welcome.png" id="mapcat_image" />
            <div id="mapcat_message">
              <span>{content.heroMessage}</span>
            </div>
          </div>
        </div>
        {content.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Link className="button button--primary" to="/docs/intro">
            {content.buttons.getStarted}
          </Link>
          <Link className="button button--secondary" to="/docs/developers">
            {content.buttons.developers}
          </Link>
        </div>
      </main>
    </Layout>
  );
}
