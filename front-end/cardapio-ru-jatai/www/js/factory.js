angular.module('cardapio')
.factory('cardapioFactory', function cardapioFactory($http){
	return {
		getCardapio: _getCardapio
	}

	function	_getCardapio($id){
		return $http.get('https://cardapiorujatai.herokuapp.com/api/cardapio/'+$id,{ cache: true});			
	}
})

.factory('enqueteFactory', function enqueteFactory($http){
	return {
		postEnquete: _postEnquete
	}

	function	_postEnquete(data){
		return $http.post('https://cardapiorujatai.herokuapp.com/api/enquete', {resposta:data.resposta,enqueteId:1});
	}

})
;
