# Angular Keypress

## Description

AngularJS directive to help bind keyboard events to methods in the scope.

## Installation

```
npm install --save vi-angular-keypress
```

or

```
bower install vi-angular-keypress
```

or

```
yarn add vi-angular-keypress
```

### Require the module:

```javascript
require('vi-angular-keypress');
```

### Register the module into your main app module

```javascript
angular.module('myApp', ['vivify-ideas.angular-keypress']);
```

## Usage

In the template, use the `vi-keypress` attribute on the element to bind methods for different keypress.

```html
<input type="text" vi-keypress="{ 13: 'enterPressed(someParam)', 27: 'escapePressed()' }">
```

If the Enter key (char code 13) is pressed the method enterPressed is invoked in your scope, while if
escape key (char code 27) is pressed the escapePressed method is invoked.

## License

[MIT](http://opensource.org/licenses/mit-license.php)
