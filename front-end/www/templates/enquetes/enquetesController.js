angular.module('cardapio')
.controller('enquetesController', function($scope, $state,$ionicLoading,enqueteFactory,$ionicPopup,localStorageService){
  
  $scope.respondeu = localStorage.getItem("enquete");

  $scope.enquete1 = [
    { text: "Péssima", value: 1 },
    { text: "Ruim", value: 2 },
    { text: "Nem boa, nem ruim", value: 3},
    { text: "Boa", value: 4},
    { text: "Ótima", value: 5 },
  ];

   $scope.data = {}; //Initialize model here

   $scope.enviar = function() {

    if(localStorage.getItem("enquete") == 1){
      var alertPopup = $ionicPopup.alert({
       title: 'Erro',
       content: 'Você já respondeu a enquete, Obrigado!'
     });
      $state.go('tab.enqueteRespondida');
    }
    else {

    $ionicLoading.show({
      content: 'Respondendo...',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });  

    enqueteFactory.postEnquete($scope.data).then(_sucessGet).catch(_errorGet);
    function _sucessGet(data,status){
      localStorage.setItem('enquete', 1);
      $ionicLoading.hide();
      $state.go('tab.enqueteRespondida');
    }
    function _errorGet(data,status){
      $ionicLoading.hide();
      if(status=='0'){
        var alertPopup = $ionicPopup.alert({
         title: 'Erro ao enviar avaliação',
         content: 'Sem conexão a internet!'
       });
      }
      else {
          $ionicLoading.hide();
        var alertPopup = $ionicPopup.alert({
         title: 'Erro ao enviar avaliação',
         content: 'Ocorreu algum erro inesperado, tente novamente!'
       });
      }
     }
    }

    }  
});