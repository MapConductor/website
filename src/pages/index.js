import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { i18n } = useDocusaurusContext();
  const isJa = i18n.currentLocale === 'ja';

  return (
    <Layout
      title="MapConductor"
      description={
        isJa
          ? 'モバイル開発者のための統一された地図SDK'
          : 'A unified map SDK for mobile developers'
      }
    >
      <main className='top'>
        <div className='welcome'>
          <div className='caption'>
            <h1>MapConductor</h1>
            <h2>{
              isJa
                ? 'モバイル開発者のための統一された地図SDK'
                : 'A unified map SDK for mobile developers'
            }</h2>
          </div>
          <div className='mapcat'>
            <img src="/img/welcome.png" id="mapcat_image" />
            <div id="mapcat_message">
              <span>
                {isJa ? (
                  <>
                    地図アプリを<br />
                    もっと簡単に<br />
                    作れるようにしよう<br />
                  </>
                ) : (
                  <>
                    Let's make your<br />
                    map apps easier!
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
        {isJa ? (
          <>
            <p>
              MapConductor は、複数の Android 向け地図 SDK を単一のわかりやすい API
              でまとめて扱えるオープンソース SDK です。地図プロバイダを切り替えるたびに
              アプリを作り直すのではなく、アプリ本体の体験に集中できるようにすることを目指しています。
            </p>
            <p>
              一般的な位置情報アプリケーションを対象としており、Android や iOS の地図開発に
              不慣れな開発者でも、基本的な地図操作から取り組みやすくなることを意図しています。
            </p>
          </>
        ) : (
          <>
            <p>
              MapConductor is an open-source SDK that lets you control multiple Android
              map SDKs through a single, easy-to-learn API. Instead of rewriting your app
              whenever you change map providers, you focus on your app — not on each
              vendor&apos;s quirks.
            </p>
            <p>
              The project is aimed at general-purpose location-based applications and is
              built to be approachable even for developers who are new to Android or iOS.
            </p>
          </>
        )}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Link className="button button--primary" to="/docs/intro">
            {isJa ? '概要を見る' : 'Get started'}
          </Link>
          <Link className="button button--secondary" to="/docs/developers">
            {isJa ? '開発者向け情報' : 'For developers'}
          </Link>
        </div>
      </main>
    </Layout>
  );
}
