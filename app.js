(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ( $scope) {
  $scope.outputMess = "";
  $scope.myInput = "";

  function countInputItems( aString) {
    var arrayOfStrings = [];
    var noOfItems = 0;
    if( aString.trim() =="")
    {
      return noOfItems;
    }

    arrayOfStrings = aString.split(',');
    for( var i = 0; i < arrayOfStrings.length; ++i)
    {
      if( arrayOfStrings[i].trim().length >= 1)
      {
        ++noOfItems;
      }
    }
    return noOfItems;
  };

  function getOutputMessage( aNos) {
    var outMessage   = "";
    $scope.msgColour = "black";
    $scope.bordColour  = "green";
    if( aNos < 1)
    {
      outMessage = "Please enter data first.";
      $scope.msgColour = "red";
      $scope.bordColour  = "red";
    }
    else if (aNos <= 3)
    {
      outMessage = "Enjoy!";
      $scope.msgColour = "green";
      $scope.bordColour  = "green";
    }
    else// aNos > 3
    {
      outMessage = "Too much!";
      $scope.msgColour = "green";
      $scope.bordColour  = "green";
    }
    return outMessage;
  }

  $scope.checkTooMuch = function() {
    var nos = countInputItems( $scope.myInput);
    $scope.outputMess = getOutputMessage( nos);
  };
}

})();
