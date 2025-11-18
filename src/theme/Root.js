import React, { useEffect } from 'react';
import Root from '@theme-original/Root';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function getBasePath(pathname, locales, defaultLocale) {
  if (!pathname) {
    return '/';
  }

  const nonDefaultLocales = (locales || []).filter((locale) => locale !== defaultLocale);
  let basePath = pathname;

  nonDefaultLocales.forEach((locale) => {
    const prefix = '/' + locale;

    if (basePath === prefix || basePath === prefix + '/') {
      basePath = '/';
    } else if (basePath.startsWith(prefix + '/')) {
      basePath = basePath.substring(prefix.length);
      if (!basePath) {
        basePath = '/';
      }
    }
  });

  return basePath || '/';
}

function getLocalePath(locale, basePath, defaultLocale) {
  if (!basePath) {
    basePath = '/';
  }

  if (locale === defaultLocale) {
    return basePath;
  }

  if (basePath === '/') {
    return '/' + locale + '/';
  }

  return '/' + locale + basePath;
}

function MobileLocaleGlobe() {
  const { i18n } = useDocusaurusContext();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  if (!i18n || !i18n.locales || i18n.locales.length <= 1) {
    return null;
  }

  const { locales, defaultLocale, currentLocale, localeConfigs } = i18n;
  const basePath = getBasePath(location.pathname, locales, defaultLocale);

  const localeLabels =
    localeConfigs &&
    Object.fromEntries(
      Object.entries(localeConfigs).map(([locale, config]) => [locale, config.label || locale])
    );

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="locale-globe">
      <button
        type="button"
        className="locale-globe__button"
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">🌐</span>
      </button>
      {open && (
        <div className="locale-globe__dropdown" role="listbox">
          {locales.map((locale) => {
            const href = getLocalePath(locale, basePath, defaultLocale);
            const isActive = locale === currentLocale;
            const label =
              (localeLabels && localeLabels[locale]) ||
              locale.toUpperCase();

            return (
              <a
                key={locale}
                href={href}
                className={
                  'locale-globe__item' + (isActive ? ' locale-globe__item--active' : '')
                }
                role="option"
                aria-selected={isActive}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function RootWrapper(props) {
  const location = useLocation();

  useEffect(() => {
    const overlayId = 'mermaid-zoom-overlay';

    const ensureOverlay = () => {
      let overlay = document.getElementById(overlayId);
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = overlayId;
        overlay.className = 'mermaid-zoom-overlay';
        overlay.addEventListener('click', () => {
          overlay.classList.remove('mermaid-zoom-overlay--visible');
        });
        document.body.appendChild(overlay);
      }
      return overlay;
    };

    const showOverlay = (svg) => {
      const overlay = ensureOverlay();

      // Clone the SVG to avoid modifying the original
      const clonedSvg = svg.cloneNode(true);

      // Get original dimensions
      let viewBox = svg.getAttribute('viewBox');
      if (!viewBox) {
        try {
          const bbox = svg.getBBox();
          viewBox = `0 0 ${bbox.width} ${bbox.height}`;
        } catch (e) {
          const width = svg.getAttribute('width') || 800;
          const height = svg.getAttribute('height') || 600;
          viewBox = `0 0 ${width} ${height}`;
        }
      }

      // Set viewBox for proper scaling
      clonedSvg.setAttribute('viewBox', viewBox);
      clonedSvg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

      // Remove fixed dimensions
      clonedSvg.removeAttribute('width');
      clonedSvg.removeAttribute('height');

      // Calculate scale
      const originalWidth = svg.getBoundingClientRect().width;
      const minWidth = window.innerWidth * 0.6;
      const scale = Math.max(2, minWidth / originalWidth);

      // Set scaled width
      const newWidth = Math.min(originalWidth * scale, window.innerWidth * 0.9);
      clonedSvg.style.width = newWidth + 'px';
      clonedSvg.style.height = 'auto';

      const inner = document.createElement('div');
      inner.className = 'mermaid-zoom-overlay__inner';
      inner.appendChild(clonedSvg);

      overlay.innerHTML = '';
      overlay.appendChild(inner);
      overlay.classList.add('mermaid-zoom-overlay--visible');

      console.log('Mermaid zoom:', {
        viewBox,
        originalWidth,
        scale,
        newWidth
      });
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        const overlay = document.getElementById(overlayId);
        if (overlay) {
          overlay.classList.remove('mermaid-zoom-overlay--visible');
        }
      }
    };

    const handleClick = (event) => {
      const target = event.currentTarget;
      const svg = target.querySelector('svg');
      if (svg) {
        showOverlay(svg);
      }
    };

    const enhanceDiagrams = () => {
      // Support both .mermaid and .docusaurus-mermaid-container
      const diagrams = document.querySelectorAll('.mermaid, .docusaurus-mermaid-container');
      diagrams.forEach((diagram) => {
        if (diagram.dataset.zoomable === 'true') {
          return;
        }
        diagram.dataset.zoomable = 'true';
        diagram.classList.add('mermaid--zoomable');
        diagram.setAttribute('role', 'button');
        diagram.setAttribute('tabindex', '0');
        diagram.addEventListener('click', handleClick);
        diagram.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick(event);
          }
        });
      });
    };

    // Run once on route change, after a short delay to let Mermaid render
    const timeoutId = window.setTimeout(enhanceDiagrams, 300);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [location.pathname]);

  return (
    <>
      <MobileLocaleGlobe />
      <Root {...props} />
    </>
  );
}
