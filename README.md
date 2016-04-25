**Looking for SASS-based `vui-alerts`?** It's [over here](https://github.com/Brightspace/valence-ui-alerts/tree/master).

# vui-alerts
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A Valence UI, [Polymer](https://www.polymer-project.org/1.0/)-based web component alert element.

![screenshot of alert component](/screenshots/screenshot.png?raw=true)

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-alerts` can be installed from [Bower][bower-url]:
```shell
bower install vui-alerts
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `alert.html`:

### Alert

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../vui-alerts/alert.html">
</head>
```

Now you can add `<vui-alert>` elements like so:

```html
<vui-alert>Oops! This is embarassing...</vui-alert>
```

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-alerts
[bower-image]: https://img.shields.io/bower/v/vui-alerts.svg
[npm-url]: https://www.npmjs.org/package/vui-alerts
[npm-image]: https://img.shields.io/npm/v/vui-alerts.svg
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-alerts
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-alerts.svg?branch=master
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-alerts
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-alerts.svg
