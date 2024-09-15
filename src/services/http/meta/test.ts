import type {Config} from '@/types'
export default {
  method:"GET",
  path:"/test",
  handler(bot, config, wrapper){
    return (req, res)=>{
      res.send("Hello!"+config.appID)
    }
  }
}
