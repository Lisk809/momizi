import type {createOpenAPI, createWebsocket, GetWsParam} from "qq-guild-bot"


interface Http {
    type:"http"
    host:string
    port:number
    event_enabled:boolean
    event_buffer_size:number
    access_token?:string
  }

interface HttpWebhook {
    type:"http_webhook"
    url:string
    access_token?:string
    timeout:number
}
interface WS {
  type:"ws"
  host:string
  port:number
  access_token?:string
}
interface WSReverse {
  type:"ws_reverse"
  url:string
  access_token?:string
  reconnect_interval:number
}
export interface Config {
  bot:GetWsParam
  server:{
    http:Http[]
    http_webhook:HttpWebhook[]
    ws:WS[]
    ws_reverse:WSReverse[]
  }
}
export interface Bot{
  client:ReturnType<typeof createOpenAPI>
  ws:ReturnType<typeof createWebsocket>
}
export {WebSocket} from "ws"
export {Wrapper} from "./utils"
