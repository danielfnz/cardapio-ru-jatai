angular.module('cardapio')
.controller('SextaController', function($scope,cardapioFactory,$ionicLoading,$ionicPopup) {
  $scope.almoco;
    $scope.janta;
  $ionicLoading.show({
    content: 'Carregando...',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  cardapioFactory.getCardapio(5).then(_sucessGet).catch(_errorGet);
  cardapioFactory.getCardapio(10).then(_sucessGet2);
  function _sucessGet(data,status){
    $scope.almoco = data.data;
    $ionicLoading.hide();
  }
  function _sucessGet2(data,status){
    $scope.janta = data.data;
    $ionicLoading.hide();
  }
  function _errorGet(data,status){
    $ionicLoading.hide();
    if(data.status=='-1'){
      var alertPopup = $ionicPopup.alert({
              title: 'Erro ao atualizar o cardápio',
         content: 'Sem conexão a internet!'
     });
    }
  }

})
;