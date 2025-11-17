import React, { useEffect } from 'react';
import Root from '@theme-original/Root';
import { useLocation } from '@docusaurus/router';

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
      const diagrams = document.querySelectorAll('.mermaid');
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

  return <Root {...props} />;
}
