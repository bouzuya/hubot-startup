# Description
#   A Hubot script that greets us when this script loaded.
#
# Configuration:
#   HUBOT_STARTUP_ROOM
#   HUBOT_STARTUP_MESSAGE
#
# Commands:
#   None
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  ROOM = process.env.HUBOT_STARTUP_ROOM ? 'Shell'
  MESSAGE = process.env.HUBOT_STARTUP_MESSAGE ? 'Hello, cruel world!'

  # add support for HUBOT_STARTUP_ROOM to be of format #general for channel name or @somebody for username
  roomOrPerson = { "room": /^#(.*)/, "person": /^@(.*)/ }
  isRoom =  ROOM.match roomOrPerson.room
  isPerson =  ROOM.match roomOrPerson.person
  if isRoom then return robot.messageRoom isRoom[1], MESSAGE
  if isPerson then return robot.send {"room":isPerson[1]}, MESSAGE

  robot.messageRoom ROOM, MESSAGE
