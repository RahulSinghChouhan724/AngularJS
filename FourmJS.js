

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
            var num;
            
            $scope.roomData = [];
            var item = {};
            var itemObj ;
            //feild Fetcher
            $scope.submite= function(Room){
                var num = (Math.ceil(Math.random() * 9));
              
                item.id= num;
                item.name = $scope.Room.name;
                item.cmnt =$scope.Room.Comment;
                item.City =$scope.Room.City;
                item.HT = $scope.Room.radio;
                item.RI = $scope.Room.inputFile;
               
                 itemObj = angular.copy(item);
                $scope.roomData.push(itemObj); 
                
            }
            //$scope.Room.name="";

            $scope.updateForm = function(Room) {
             
            	  item.name = $scope.Room.name;
                  item.cmnt =$scope.Room.Comment;
                  item.City =$scope.Room.City;
                  item.HT = $scope.Room.radio;
                  item.RI = $scope.Room.inputFile;
                  
                  
            	
            };
        }     
 
]);