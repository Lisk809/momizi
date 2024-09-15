import type {Config, Bot} from '@/types'
import type {Wrapper} from '@/utils'

import test from './test'

import {Router} from 'express'

const apis=[test]
export default {
  init(bot:Bot, config:Config, wrapper:Wrapper){
    const router=Router()
    for(let api of apis){
      const {method, path, handler} = api
      router[method.toLowerCase()](path, handler(bot, config, wrapper))
    }
    return router
  }
}
