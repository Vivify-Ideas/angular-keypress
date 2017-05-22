(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory(require('angular'));
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.angular);
    }
}(this, function (angular) {
    var moduleName = 'vivify-ideas.angular-keypress';
    var mod = angular.module(moduleName, []);
    mod.directive('viKeypress', [function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attr) {
              var keyMappings = scope.$eval(attr.viKeypress);
              elem.bind('keydown', function(event) {
                if (keyMappings[event.which]) {
                  scope.$apply(function() {
                    scope.$eval(keyMappings[event.which]);
                  });
                  event.preventDefault();
                }
              });
        		}
        }
    }]);

    return moduleName;
}));
