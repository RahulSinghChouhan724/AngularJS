

var FourmApp= angular.module('MyApp',[]);
 //Upload File Directive

FourmApp.controller('FourmController',function($scope){
//    variable
   $scope.City=[
        {name:"Bangalore"},
        {name:"Mumbai"},
        {name:"delhi"}
    ];
    
    // Image Fetcher
    $scope.updateImage=function(Room){
        $scope.master =angular.copy(Room);
        return  $scope.master;
    }
    //feild Fetcher
    $scope.submite= function(Room){
        var item = {};
        $scope.Data = [];


        item.name = $scope.Room.name;
        item.cmnt =$scope.Room.Comment;
        item.City =$scope.Room.City;
        item.HT = $scope.Room.radio;
        item.RI=$scope.master;
        
        this.Data.push(item);

        
        if($scope.form.$valid){
            alert('Data Succesfully Submit!!')
        }
        return item;
    }
});


    
 




