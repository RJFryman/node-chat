'use strict';

exports.connection = function(socket){
  socket.emit('online', {date:new Date()});
  socket.on('newMessage', messageRecieved);
};

function messageRecieved(data){
  var socket = this;
  socket.broadcast.emit('message', data);
  socket.emit('message', data);
}
