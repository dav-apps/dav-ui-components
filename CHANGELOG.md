# Changelog

Releases before v1.17 are not documented here.

## v1.17.1

### Fixed

- **BlurhashImage**: when server rendering without a `src`, fall back to
  `fallbackSrc` instead of emitting `<img src>`. Consumers that only fetch the
  real image in the browser got an empty `src`, which is invalid and makes some
  browsers resolve it against the current document and request the page again.

## v1.17

Server rendering support. Together with `@dav-apps/ssr-angular` the components
now render their shadow DOM into the initial HTML instead of being upgraded in
the browser, so their content reaches crawlers and is visible before hydration.

### Fixed

- **BlurhashImage**: `loadImage()` constructed an `IntersectionObserver` from
  `render()`, which threw on the server and made the renderer fall back to
  shallow rendering for the element - no image reached the HTML at all. There is
  nothing to lazy load into in a static snapshot, so the real `src` is now
  emitted right away and the blurhash placeholder, which needs a canvas, is
  skipped.
- **Dialog**, **BottomSheet**, **SearchTextfield**, **Dropdown**: registered
  `document` listeners in `connectedCallback`, so the renderer skipped that
  callback and the components came out without the state it sets up, most
  visibly the theme custom properties.
- **IconButton**: `createTooltipOverlay()` reached for `document.body` in
  `connectedCallback`, with the same result.
- **Search**: read its `@query` input while rendering, which goes through
  `renderRoot.querySelector` - not something the Lit SSR element shim provides.

### Added

- **IconButton**: accessibility attributes.
