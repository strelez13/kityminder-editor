define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mind map',
            'tianpan': '"Карта неба"',
            'structure': 'Структура организации',
            'filetree': 'Справочник организационной структуры',
            'right': 'Логическая диаграмма',
            'fish-bone': '"Рыбья кость"'
        },
        'theme': {
            'classic': 'Классическая',
            'classic-compact': 'Компактная классическая',
            'snow': 'Нежно-холодный свет',
            'snow-compact': 'Компактный холодный свет',
            'fish': 'Карта рыбьих костей',
            'wire': 'Каркас',
            'fresh-red': 'Свежая красная',
            'fresh-soil': 'Грязно-желтый',
            'fresh-green': 'Художественный зеленый',
            'fresh-blue': 'Лазурный',
            'fresh-purple': 'Романтический фиолетовый',
            'fresh-pink': 'Порошок разума',
            'fresh-red-compat': 'Компактный красный',
            'fresh-soil-compat': 'Компактный желтый',
            'fresh-green-compat': 'Компактный зеленый',
            'fresh-blue-compat': 'Компактный синий',
            'fresh-purple-compat': 'Компактный фиолетовый',
            'fresh-pink-compat': 'Компактный порошок',
            'tianpan': 'Классический циферблат',
            'tianpan-compact': 'Компактный день'
        },
        'maintopic': 'Center theme',
        'topic': 'branch topic',
        'panels': {
            'history': 'история',
            'template': 'шаблон',
            'theme': 'обложка',
            'layout': 'расположение',
            'style': 'стиль',
            'font': 'текст',
            'color': 'цвет',
            'background': 'фон',
            'insert': 'вставить',
            'arrange': 'adjust',
            'nodeop': 'текущий',
            'priority': 'приоритет',
            'progress': 'прогресс',
            'resource': 'ресурс',
            'note': 'заметка',
            'attachment': 'приложение',
            'word': 'текст'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Insert sibling node',
                'appendparentnode': 'Insert parent node',
                'appendchildnode': 'Insert child node',
                'removenode': 'Удалить',
                'editnode': 'Редактировать',
                'arrangeup': 'Вверх',
                'arrangedown': 'Вниз',
                'resetlayout': 'Сбросить расположение',
                'expandtoleaf': 'Развернуть все узлы',
                'expandtolevel1': 'Развернуть до 1 уровня',
                'expandtolevel2': 'Развернуть до 2 уровня',
                'expandtolevel3': 'Развернуть до 3 уровня',
                'expandtolevel4': 'Развернуть до 4 уровня',
                'expandtolevel5': 'Развернуть до 5 уровня',
                'expandtolevel6': 'Развернуть до 6 уровня',
                'fullscreen': 'Во весь экран',
                'outline': 'контур'
            },
            'search': 'Поиск',
            'expandtoleaf': 'Раскрыть',
            'back': 'Назад',
            'undo': 'Назад (Ctrl + Z)',
            'redo': 'Вперед (Ctrl + Y)',
            'tabs': {
                'idea': 'Идея',
                'appearence': 'Внешний вид',
                'view': 'Вид'
            },
            'bold': 'Bold',
            'italic': 'Italic',
            'forecolor': 'Цвет текста',
            'fontfamily': 'Шрифт',
            'fontsize': 'Размер',
            'layoutstyle': 'Тема',
            'node': 'Node operation',
            'hand': 'Разрешить перетаскивание',
            'camera': 'Расположение корневого узела',
            'zoom-in': 'Увеличить (Ctrl+)',
            'zoom-out': 'Уменьшить (Ctrl-)',
            'markers': 'tag',
            'help': 'Помощь',
            'preference': 'Настройки',
            'expandnode': 'Expand to leaf',
            'collapsenode': 'Получить узел первого уровня',
            'template': 'шаблон',
            'theme': 'тема',
            'clearstyle': 'Очистить стиль',
            'copystyle': 'Скопировать стиль',
            'pastestyle': 'Вставить стиль',
            'appendsiblingnode': 'таже тема',
            'appendchildnode': 'Подчиненная тема',
            'arrangeup': 'Предварительная настройка',
            'arrangedown': 'post-tune',
            'editnode': 'Редактировать',
            'removenode': 'удалить',
            'priority': 'Приоритет',
            'progress': {
                'p1': 'Не начато',
                'p2': 'Выполнено 1/8',
                'p3': 'Выполнено 1/4',
                'p4': 'Выполнено 3/8',
                'p5': 'Выполнена половина',
                'p6': 'Выполнено 5/8',
                'p7': 'Выполнено 3/4',
                'p8': 'Выполнено 7/8',
                'p9': 'Завершено',
                'p0': 'Очистить прогресс'
            },
            'resource': {
                'add': 'Добавить'
            },
            'link': 'Link',
            'image': 'Image',
            'note': 'Note',
            'insertlink': 'Insert link',
            'insertimage': 'Insert image',
            'insertnote': 'Insert note',
            'removelink': 'Remove existing links',
            'removeimage': 'Remove existing image',
            'removenote': 'Remove existing notes',
            'resetlayout': 'Organize',
            'navigator': 'Navigator',
            'selectall': 'Select all',
            'selectrevert': 'Select revert',
            'selectsiblings': 'Select siblings',
            'selectlevel': 'Select level',
            'selectpath': 'Select path',
            'selecttree': 'Select subtree',
            'noteeditor': {
                'title': 'Note',
                'hint': 'Support GFM grammar',
                'placeholder': 'Please select a node to edit note'
            },
            'dialog': {
                'image': {
                    'title': 'Image',
                    'imagesearch': 'Image search',
                    'keyword': 'Keyword：',
                    'placeholder': 'Please input the keyword for search',
                    'baidu': 'Search',
                    'linkimage': 'Linked Image',
                    'linkurl': 'URL：',
                    'placeholder2': 'Require：start with http(s)://',
                    'imagehint': 'Hint：',
                    'placeholder3': 'Optional：The text that the mouse prompts when hovering over the image',
                    'preview': 'Image preview：',
                    'uploadimage': 'Upload Image',
                    'selectfile': 'Select file...',
                    'ok': 'OK',
                    'cancel': 'Cancel',
                    'formatinfo': 'file ext must be jpg、gif or png'
                },
                'hyperlink': {
                    'title': 'Ссылка',
                    'linkurl': 'Link url：',
                    'linkhint': 'Совет：',
                    'placeholder': 'Обязательно：начать с http (s): // или ftp: //',
                    'placeholder2': 'Необязательно: текст-подсказка при наведении на ссылку',
                    'ok': 'OK',
                    'cancel': 'Закрыть'

                },
                'exportnode': {
                    'title': 'Экспорт Узла',
                    'ok': 'OK',
                    'cancel': 'Закрыть'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Main Topic'
            },
            'node': {
                'arrangeup': 'Расположить вверх',
                'appendchildnode': 'Добавить дочерний узел',
                'appendsiblingnode': 'Добавить узел брата',
                'arrangedown': 'Расположить вниз',
                'removenode': 'Удалить',
                'appendparentnode': 'Добавить родительский узел',
                'selectall': 'Выбрать Все',
                'topic': 'Заголовок',
                'importnode': 'Импорт узла',
                'exportnode': 'Экспорт узла'
            },
            'input': {
                'edit': 'Редактировать'
            },
            'priority': {
                'main': 'Приоритет',
                'remove': 'Удалить',
                'esc': 'Esc'
            },
            'progress': {
                'main': 'Прогресс',
                'remove': 'Удалить',
                'esc': 'Esc'
            },
            'history': {
                'undo': 'Назад',
                'redo': 'Вперед'
            }
        }
    };
});
