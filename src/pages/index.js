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
        MapConductor is an open-source SDK that lets you work with multiple map SDKs through
        a unified API. Instead of relearning each provider&apos;s API, you can focus on what
        matters: displaying your data on the map.
      </>,
      <>
        The project is aimed at general-purpose location-based applications and is built
        to be approachable even for developers who are new to Android or iOS.
      </>,
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
        MapConductor は、複数の地図 SDK を統一された API で扱えるオープンソース SDK です。
        地図プロバイダごとに API の使い方を学び直す必要がなく、地図上のデータ表示という
        本来やりたいことに集中できます。
      </>,
      <>
        一般的な位置情報アプリケーション向けに設計されており、Android や iOS に不慣れな開発者でも、
        地図機能に取り組みやすくすることを目標としています。
      </>,
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
        MapConductor es un SDK de código abierto que permite trabajar con varios SDK de mapas
        mediante una API unificada. En lugar de reaprender la API de cada proveedor, puedes
        concentrarte en lo que importa: mostrar tus datos en el mapa.
      </>,
      <>
        El proyecto está pensado para aplicaciones de geolocalización de propósito general y
        busca ser accesible incluso para quienes se inician en el desarrollo para Android o iOS.
      </>,
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
        <section className='contents'>
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
        </section>
      </main>
    </Layout>
  );
}
