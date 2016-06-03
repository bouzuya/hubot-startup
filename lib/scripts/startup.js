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
  var MESSAGE, ROOM, isPerson, isRoom, ref, ref1, roomOrPerson;
  ROOM = (ref = process.env.HUBOT_STARTUP_ROOM) != null ? ref : 'Shell';
  MESSAGE = (ref1 = process.env.HUBOT_STARTUP_MESSAGE) != null ? ref1 : 'Hello, cruel world!';
  roomOrPerson = {
    "room": /^#(.*)/,
    "person": /^@(.*)/
  };
  isRoom = ROOM.match(roomOrPerson.room);
  isPerson = ROOM.match(roomOrPerson.person);
  if (isRoom) {
    return robot.messageRoom(isRoom[1], MESSAGE);
  }
  if (isPerson) {
    return robot.send({
      "room": isPerson[1]
    }, MESSAGE);
  }
  return robot.messageRoom(ROOM, MESSAGE);
};
