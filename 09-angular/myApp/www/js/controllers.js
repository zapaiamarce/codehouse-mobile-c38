angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $ionicModal, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $ionicModal.fromTemplateUrl('templates/edit-chat-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.edit = function(chat) {
    $scope.chat = chat;
    $scope.modal.show();
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AddChat', function($scope, Chats) {
  $scope.add = function() {
    var chat = Chats.create($scope.name, $scope.lastMessage);
    Chats.add(chat);

    $scope.name = '';
    $scope.lastMessage = '';
  };
})

.controller('EditChat', function($scope, Chats) {
  $scope.save = function() {
    
    Chats.save(chat);
    $scope.name = '';
    $scope.lastMessage = '';
  };
})

.directive('chatInput', function() {
  return {
    templateUrl: 'templates/chat-input.html',
    scope: {
      chat: "&?"
    }
  };
});
