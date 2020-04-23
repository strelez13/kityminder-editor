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
            'history': 'history',
            'template': 'template',
            'theme': 'skin',
            'layout': 'layout',
            'style': 'style',
            'font': 'text',
            'color': 'color',
            'background': 'background',
            'insert': 'insert',
            'arrange': 'adjust',
            'nodeop': 'current',
            'priority': 'priority',
            'progress': 'progress',
            'resource': 'resource',
            'note': 'note',
            'attachment': 'attachment',
            'word': 'text'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Insert sibling node',
                'appendparentnode': 'Insert parent node',
                'appendchildnode': 'Insert child node',
                'removenode': 'Delete',
                'editnode': 'Edit',
                'arrangeup': 'Up',
                'arrangedown': 'Down',
                'resetlayout': 'Reset layout',
                'expandtoleaf': 'Expand all nodes',
                'expandtolevel1': 'Expand to level 1',
                'expandtolevel2': 'Expand to level 2',
                'expandtolevel3': 'Expand to level 3',
                'expandtolevel4': 'Expand to level 4',
                'expandtolevel5': 'Expand to level 5',
                'expandtolevel6': 'Expand to level 6',
                'fullscreen': 'full screen',
                'outline': 'outline'
            },
            'search': 'Search',
            'expandtoleaf': 'Expand',
            'back': 'return',
            'undo': 'Undo (Ctrl + Z)',
            'redo': 'Redo (Ctrl + Y)',
            'tabs': {
                'idea': 'Idea',
                'appearence': 'Appearance',
                'view': 'View'
            },
            'bold': 'Bold',
            'italic': 'Italic',
            'forecolor': 'Font color',
            'fontfamily': 'Font',
            'fontsize': 'Size',
            'layoutstyle': 'Theme',
            'node': 'Node operation',
            'hand': 'Allow dragging',
            'camera': 'Locate the root node',
            'zoom-in': 'Zoom in (Ctrl+)',
            'zoom-out': 'Zoom out (Ctrl-)',
            'markers': 'tag',
            'help': 'Help',
            'preference': 'Preferences',
            'expandnode': 'Expand to leaf',
            'collapsenode': 'receive a level one node',
            'template': 'template',
            'theme': 'skin',
            'clearstyle': 'Clear style',
            'copystyle': 'Copy style',
            'pastestyle': 'Paste style',
            'appendsiblingnode': 'same theme',
            'appendchildnode': 'subordinate theme',
            'arrangeup': 'pre-tune',
            'arrangedown': 'post-tune',
            'editnode': 'Edit',
            'removenode': 'remove',
            'priority': 'Priority',
            'progress': {
                'p1': 'not started',
                'p2': 'Complete 1/8',
                'p3': 'Complete 1/4',
                'p4': 'Complete 3/8',
                'p5': 'Complete half',
                'p6': 'Complete 5/8',
                'p7': 'Complete 3/4',
                'p8': 'Complete 7/8',
                'p9': 'Completed',
                'p0': 'Clear progress'
            },
            'resource': {
                'add': 'Add'
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
