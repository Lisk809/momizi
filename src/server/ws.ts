import {Server} from "ws"
import type {Config, Bot} from '@/types'
import {getLogger} from "log4js"
import {applyServices} from '@/services/ws'
import conn from "@/services/ws/meta/conn"

const logger = getLogger("server")
logger.level="all"

let record={
  value:null
}

export function start(bot:Bot, config:Config){
  const server=new Server({port:config.server.ws[0].port})
  logger.info("ws server started!")
  record.value=server
  conn(bot, config, (ws)=>{
    applyServices(bot, config, ws)
  })
}
export function dispose(){
  record.value.close(()=>{
    logger.info("ws server disposed")
  })
  record.value=null
}
