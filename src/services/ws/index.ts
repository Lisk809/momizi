import {Wrapper} from "@/utils"

import type {Bot, Config, WebSocket} from "@/types"
import type {Server} from "ws"

import meta from "./meta"
export function applyServices(bot:Bot, config:Config, server:Server){
  return meta.mount(bot, config, server, new Wrapper(config))
}
