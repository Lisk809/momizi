import {Wrapper} from "@/utils"
export default function connection(config, ws, cb){
  const wrapper=new Wrapper(config)
  ws.send(
    wrapper.id().time().update({
       type: "meta",
       detail_type: "connect",
       sub_type: ""
    }).version().json()
  )
}
