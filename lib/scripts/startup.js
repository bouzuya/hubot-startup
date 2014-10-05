// Description
//   A Hubot script that greets us when this script loaded.
//
// Configuration:
//   HUBOT_STARTUP_ROOM
//   HUBOT_STARTUP_MESSAGE
//
// Commands:
//   None
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var MESSAGE, ROOM, _ref, _ref1;
  ROOM = (_ref = process.env.HUBOT_STARTUP_ROOM) != null ? _ref : 'Shell';
  MESSAGE = (_ref1 = process.env.HUBOT_STARTUP_MESSAGE) != null ? _ref1 : 'Hello, cruel world!';
  return robot.messageRoom(ROOM, MESSAGE);
};
