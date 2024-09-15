import { createOpenAPI, createWebsocket } from 'qq-guild-bot';

import type {Config} from "@/types"

export function login(config: Config){
  const client=createOpenAPI(config.bot)
  const ws=createWebsocket(config.bot)
  const events=[]
  config.bot.intents.forEach((e, i)=>{
    ws.on(e, (data)=>{
      events.push(data)
    })
  })
  return {client, ws, events}
}
