import express from "express"
import type {Config, Bot} from '@/types'
import {getLogger} from "log4js"
import {createServices} from '@/services/http'

const server = express()
const logger = getLogger("server")
logger.level="all"

export function start(bot:Bot, config:Config){
   const services=createServices(bot, config)
   server.use("/", services)
   config.server.http.forEach((e,i)=>{
     server.listen(e.port, ()=>{
       logger.info(`server is listenning in localhost:${e.port}!`)
     })
   })
}
export function dispose(){
  server.close(()=>{
    logger.info("server is closed")
  })
}
