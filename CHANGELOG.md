# Changelog

Releases before v1.17 are not documented here.

## v1.19

### Added

- **SidenavItem**: add nested subitems with `node` and `open` properties,
  including arrow clicks, double-clicks and expand/collapse animations like TreeItem.
- **SidenavItem**: add component documentation with active, disabled and nested examples.
- **Sidenav**: add inline and overlay examples with multiple levels of subitems.

### Changed

- **Sidenav**: close the overlay when an item or subitem is selected and emit
  `dismiss`. Arrow clicks and disabled items keep it open.

### Fixed

- **IconButton**: remove debug logging of the loading state during rendering.

## v1.18

### Added

- **Textfield**: add a `required` property with a red asterisk next to the label,
  dimmed when disabled. The native input receives the `required` attribute.
- **Textfield**: localize the required indicator tooltip as "Required" in English
  and "Pflichtfeld" in German, including updates when the language changes.
- **Textfield**: document the `required` property and add required and disabled
  required examples.

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
