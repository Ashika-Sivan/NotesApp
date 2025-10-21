import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"

import dotenv from "dotenv"
dotenv.config()
//create a ratelimiter that allows 10 request per 20 second
const ratelimit=new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(5,"10 s"),//5 req at 20 se
})




export default ratelimit