import type {Config} from "@/types"

import uuid from "uuid"

const {version} = require("../../package.json")

function isFlat(value) {
	  return !value || typeof value !== "object" || Object.keys(value).length === 0 || Array.isArray(value) || value instanceof Date || value instanceof RegExp;
}

function flatten(source:any, prefix = "", ignore = isFlat) {
  const result = {};
  for (const key in source) {
    const value = source[key];
    if (ignore(value)) {
      result[`${prefix}${key}`] = value;
    } else {
      Object.assign(result, flatten(value, `${prefix}${key}.`, ignore));
    }
  }
  return result;
}

export class Wrapper{
  message:any
  config:any
  constructor(config:Config){
    this.config=flatten(config)
  }
  update(obj:any, value?:any){
    if(typeof obj==="string") {
      this.message[obj]=value
      return this
    } else if(obj){
    Object.assign(this.message, obj)
    return this
    } else{
      throw new TypeError("the set field or object is unavailable.")
    }
  }
  dataof(field){
    return this.config.bot[field]
  }
  self(){
    this.update({
      platform:"qq",
      user_id:this.dataof("bot.user_id")
    })
    return this
  }
  version(){
    this.update({
      "impl": "momizi",
      "version": version,
      "onebot_version": "12"
    })
    return this
  }
  id(){
    this.update("id", uuid.v1())
    return this
  }
  time(stamp?:number|string){
    if(stamp) this.update("time", stamp)
    this.update("time", Date.now())
    return this
  }
  json(){
    return JSON.stringify(this.message)
  } 
}
