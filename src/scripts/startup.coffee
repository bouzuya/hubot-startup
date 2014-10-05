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
  robot.messageRoom ROOM, MESSAGE
