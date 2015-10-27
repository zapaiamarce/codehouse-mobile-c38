angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  var currentChatID = -1;
  var nextId = -1;

  for (var i = chats.length - 1; i >= 0; i--) {
    if (chats[i].id > nextId) {
      nextId = chats[i].id;
    }
  }

  nextId = nextId + 1;

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    create: function (name, lastText, face) {

      return {
        id: -1,
        name: name,
        lastText: lastText,
        face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
      };
    },
    add: function (chat){

      chat.id = nextId; //le asigno un id válido
      nextId = nextId + 1; //incremento next id

      chats.push(chat); //Lo agrego a la lista de chats
    },

    save: function (chat, name, lastText){
      chat.name = name;
      chat.lastText = lastText;
    },
    current: function(chatId) {
      if(chatId || chatId === 0) {
        currentChatID = chatId;
      }
      return currentChatID;
    }
  };
});
