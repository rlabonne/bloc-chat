(function() {
  function CookieCtrl($uibModalInstance, $cookies) {

    //function that will store username when ran in cookies.html
    this.setUserName = function() {
        $cookies.put('blocChatCurrentUser', this.username)
        $uibModalInstance.close();
        console.log(this.username);
      }
    };

  angular
    .module('blocChat')
    .controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]);
})();
