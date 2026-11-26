# Changelog

Releases before v1.17 are not documented here.

## v1.22

### Added

- **RadioGroup**: add `horizontal` to arrange options side by side and wrap
  them in narrow containers.
- **TabBar**: add `scrollable` to scroll horizontally when the tabs exceed
  the available width.
- **Dialog**: add `contentHeight` (`content-height` in HTML) to keep the
  content area at a set height and scroll it independently. Place tabs or
  other header content above the scroll area with the `header` slot.

## v1.21

### Added

- **Sidenav**: add `position` (`"left"`, `"right"`) to open the "over" mode
  from either side.
- **Checkbox**: add `indeterminate` to show a dash, e.g. when only some items
  of a group are chosen; a click clears it and toggles `checked`.

### Fixed

- **Checkbox**: set `aria-checked` and `aria-disabled` to `"true"`/`"false"`
  (and `"mixed"` while indeterminate) instead of an empty attribute.
- **Card**: include the border in the width, so a card with `width: 100%` no
  longer overflows its parent by 2px.
- **Textfield**, **Textarea**: show a value set right after an input even when
  it equals the value rendered before, e.g. when a value below the minimum is
  reset.
- **IconButton**, **ContextMenuItem**: `focus()` focuses the inner button.
- **Dialog**: open in the top layer with the native `<dialog>`, so transformed
  or clipping ancestors no longer cut it off and it no longer has to be moved to
  `document.body`. Focus stays in the open dialog and returns on close; Escape
  only dismisses the topmost open dialog.
- **Dropdown**: open the list in the top layer, so a card, dialog or other
  `overflow` no longer clips it.
- **FilterGroup**: pick up filter buttons that are added or removed after the
  group was connected, e.g. when a framework renders the buttons after their
  group; a selected button stays selected.

## v1.20

### Added

- **Dropdown**: add `fullWidth` to fill the width of the parent instead of a
  fixed `width` in pixels.
- **Dropdown**, **SearchTextfield**: add `maxListHeight` to limit the height of
  the opened list in pixels; it scrolls beyond that.

### Fixed

- **Dropdown**: only animate the colors of the button, so a changed width no
  longer grows visibly.

## v1.19.1

### Fixed

- **Button**: allow long labels to wrap on narrow widths by using `min-height`
  instead of a fixed height, with centered text.
- **SidenavItem**: allow long labels to wrap by using `min-height` instead of a fixed height.
- **Sidenav**: limit the width to its container with `max-width: 100%`.

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
