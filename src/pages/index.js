import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="MapConductor"
      description="A unified map SDK for mobile developers"
    >
      <main style={{ padding: '4rem 1.5rem', maxWidth: 960, margin: '0 auto' }}>
        <h1>MapConductor</h1>
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
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <Link className="button button--primary" to="/docs/intro">
            Get started
          </Link>
          <Link className="button button--secondary" to="/docs/developers">
            For developers
          </Link>
        </div>
      </main>
    </Layout>
  );
}
