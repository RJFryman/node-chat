/* global io:true */

(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    initializeSocketIO();
    $('#sendMessage').click(sendMessage);
  }

  var socket;

  function initializeSocketIO(){
    socket = io.connect('/app');
    socket.on('online', function(data){console.log(data);});
    socket.on('message', addMessage);
  }

  function addMessage(data){
    var $message = $('<div>');
    $message.text(data.text);
    $('#messages').prepend($message);
  }

  function sendMessage(){
    var data = {};
    data.text = $('textarea').val();
    socket.emit('newMessage', data);
  }

})();
