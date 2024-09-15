import * as server from './server'

import {login} from "./bot"

import type {Config} from './types'

export function start(config:Config){
  const bot=login(config)
  server.http.start(bot, config)
  server.ws.start(bot, config)
}
export function dispose(){
  server.http.dispose()
  server.ws.dispose()
}
