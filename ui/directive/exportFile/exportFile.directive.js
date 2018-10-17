angular.module('kityminderEditor')
    .directive('exportFile', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/exportFile/exportFile.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function(scope) {
                function download(url, filename) {
                    var obj = document.createElement('a');
                    obj.href = url;
                    obj.download = filename;
                    obj.dataset.downloadurl = url;
                    document.body.appendChild(obj);
                    obj.click();
                    document.body.removeChild(obj)
                }

                scope.exportPNG = function () {
                    minder.exportData('png').then(function (data) {
                        download(data, 'export.png');
                    });
                };

                scope.exportSVG = function () {
                    minder.exportData('svg').then(function (data) {
                        var url = 'data:image/svg+xml;base64,' + Base64.encode(data);
                        download(url, 'export.svg');
                    }, function (data){
                        console.log('fail', data);
                    });
                };
            }
        }
    });