import type {Bot, Config, Wrapper} from "@/types"
import type {Server} from "ws"

import connection from "./conn"
import heartbeat from "./heartbeat"

export default {
  mount(bot:Bot, config:Config, server:Server, wrapper:Wrapper){
     heartbeat(bot, config, server, wrapper)
  }
}
