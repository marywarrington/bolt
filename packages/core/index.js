export { define, props, withComponent, withUpdate } from 'skatejs';

export preact, { Component, h } from 'preact';
export { hyper } from 'hyperhtml/cjs';

// Export Utilties + Helpers
export { css } from './utils/css';
export { sanitizeBoltClasses } from './utils/sanitize-classes';
export { supportsCSSVars } from './utils/supports-css-vars';
export { colorContrast } from './utils/color-contrast';
export { rgb2hex } from './utils/rgb2hex';
export { passiveSupported } from './utils/supports-passive-event-listener';
export { declarativeClickHandler } from './utils/declarative-click-handler';
export { hasNativeShadowDomSupport } from './utils/environment';
export { findParentTag } from './utils/find-parent-tag';
export { isValidSelector } from './utils/is-valid-selector';

export { withPreact } from './renderers/renderer-preact';
export { BoltComponent } from './renderers/renderer-hyperhtml';
export { spacingSizes } from './data/spacing-sizes';

// Export polyfill loader
export { polyfillLoader } from './polyfills';

//// Add hook to auto re-render the root component.
if (typeof module.hot === 'object') {
  module.hot.accept(err => {
    if (err) {
      console.error('Cannot apply HMR update.', err);
    }
  });
}
