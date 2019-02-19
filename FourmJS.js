

var FourmApp= angular.module('MyApp',[]);
 //Upload File Directive
 FourmApp.directive('fileRead', [ function() {
    return {
        restrict : 'A',
        scope : {
            fileModel : '='
        },
        link : function(scope, elem, attr) {
            elem.bind('change', function(changeEvent) {
                var reader = new FileReader();
                reader.onload = function(loadEvent) {
                    scope.$apply(function() {
                        scope.fileModel = loadEvent.target.result;
                    });
                };
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
} ])

FourmApp.controller('FourmController',['$scope',
 function($scope,$user){
            
            $scope.City=[
                {key:"",value:"select city"},
                {key:"Bangalore",value:"Bangalore"},
                {key:"Mumbai",value:"Mumbai"},
                {key:"delhi",value:"delhi"}
            ];
            $scope.Data = [];
            //feild Fetcher
            $scope.submite= function(Room){
                var item = {};
                item.name = $scope.Room.name;
                item.cmnt =$scope.Room.Comment;
                item.City =$scope.Room.City;
                item.HT = $scope.Room.radio;
                item.RI = $scope.Room.inputFile;
                // item.RI=$scope.fd;
                $scope.Data.push(item); 
                // var my =JSON.stringify(item);
                
               $scope.Room.name="";
            }
        }     
 
]);