export default function heartbeat(bot, config, server, wrapper){
  setTimeout(()=>{
    server.send(wrapper.id().time().update({
      type: "meta",
      detail_type: "heartbeat",
      sub_type: "",
    }).update("interval", 5000))
  }, 5000)
}
