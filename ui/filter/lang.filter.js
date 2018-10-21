angular.module('kityminderEditor')
    .filter('lang', ['config', function(config) {
        return function(text, block) {
            var defaultLang = config.get('defaultLang');
            return window.editor.lang(defaultLang, text, block);
        };
    }]);