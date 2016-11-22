angular.module('cardapio', ['ionic','LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$locationProvider) {
  $ionicConfigProvider.tabs.position('bottom'); 
  $ionicConfigProvider.backButton.text('Voltar');
  $ionicConfigProvider.navBar.alignTitle('center');

//Rotas do aplicativo
//View significa em qual view o conteudo vai aparecer(opção no menu).
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.inicio', {
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/inicio/inicio.html'
      }
    }
  })

  .state('tab.segunda', {
    url: '/segunda',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/segunda/segunda-cardapio.html',
        controller: 'SegundaController'
      }
    }
  })
    .state('tab.terca', {
    url: '/terca',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/terca/terca-cardapio.html',
        controller: 'TercaController'
      }
    }
  })
      .state('tab.quarta', {
    url: '/quarta',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/quarta/quarta-cardapio.html',
        controller: 'QuartaController'
      }
    }
  })

      .state('tab.quinta', {
    url: '/quinta',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/quinta/quinta-cardapio.html',
        controller: 'QuintaController'
      }
    }
  })
    .state('tab.sexta', {
    url: '/sexta',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/sexta/sexta-cardapio.html',
        controller: 'SextaController'
      }
    }
  })

  .state('tab.enquetes', {
      url: '/enquetes',
      views: {
        'tab-enquetes': {
          templateUrl: 'templates/enquetes/enquetes.html',
          controller: 'enquetesController'
        }
      }
    })

   .state('tab.enqueteRespondida', {
      url: '/enqueteRespondida',
      views: {
        'tab-enquetes': {
          templateUrl: 'templates/enquetes/enquete-respondida.html',
          controller: 'enquetesController'
        }
      }
    })
    .state('tab.informacoes', {
      url: '/informacoes',
      views: {
        'tab-informacoes': {
          templateUrl: 'templates/informacoes/informacoes.html'
        }
      }
    })
;

  // if none of the above states are matched, use this as the fallback
   $urlRouterProvider.otherwise('/tab/inicio');

});
