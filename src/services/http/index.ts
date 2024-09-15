import type {Bot, Config} from "@/types"
import {Wrapper} from "@/utils"
import meta from "./meta"
import {Router} from "express"

export function createServices(bot:Bot, config:Config){
  const router=Router()
  const wrapper=new Wrapper(config)
  router.use("meta", meta.init(bot, config, wrapper))
  return router
}
