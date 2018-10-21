define(function(require, exports, module) {
    var langList = {
        'en': require('../l10n/en'),
        'de': require('../l10n/de'),
        'zh_CN': require('../l10n/zh_CN')
    };
    function lang(lang, text, block) {
        var dict = langList[lang];
        if (dict === undefined) {
            dict = langList['en'];
        }
        block.split('/').forEach(function(ele, idx) {
            dict = dict[ele];
        });

        return dict[text] || null;

    }

    return module.exports = lang;
});