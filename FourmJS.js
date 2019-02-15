

var FourmApp= angular.module('MyApp',[]);
 //Upload File Directive


FourmApp.controller('FourmController',function($scope,$http){

   $scope.City=[
        {name:"Bangalore"},
        {name:"Mumbai"},
        {name:"delhi"}
    ];
    
    // Fetcher
    $scope.update=function(Room,){
        $scope.master =angular.copy(Room);
        // $scope.temp.push($scope.master);
        var item = {};
        item.name = $scope.Room.name;
        item.cmnt =$scope.Room.Comment;
        item.City =$scope.Room.City;
        item.HT = $scope.Room.radio;

        $scope.onFileSelect = function($files) {
            Upload.upload({
              url: 'my/upload/url',
              file: $files,            
            }).progress(function(e) {
            }).then(function(data, status, headers, config) {
              // file is uploaded successfully
              console.log(data);
            }); 
        item.RI= $scope.data;
        $scope.temp.push(item);
        if($scope.form.$valid){
            alert('Data Succesfully Submit!!')
        }
    }

  
});


    
 




