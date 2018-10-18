angular.module('kityminderEditor')
    .filter('lang', ['config', '$injector',
        function(config, $injector) {
            return function(text, block) {
                var defaultLang = config.get('defaultLang');
                var dict = null;
                try {
                    dict = $injector.get('lang.' + defaultLang);
                } catch(e) {
                    dict = $injector.get('lang.en');
                }
                block.split('/').forEach(function(ele, idx) {
                    dict = dict[ele];
                });

                return dict[text] || null;

            };
        }]);