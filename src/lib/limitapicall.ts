import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export interface RateLimitingPropsTypes {
    allowedApiReq : number,
    duration : number
}

const redis = new Redis({
    url : process.env.UPSTASH_REDIS_REST_URL,
    token : process.env.UPSTASH_REDIS_REST_TOKEN
})


export default function rateLimitWithRedis({allowedApiReq, duration} : RateLimitingPropsTypes){
    const rateLimiter = new Ratelimit({
        redis : redis,
        limiter : Ratelimit.slidingWindow(allowedApiReq, `${duration} m`),
        prefix : "ratelimit"
    })


    return async (identifier : string) => {
        const { success, remaining  } = await rateLimiter.limit(identifier)

        if(!success){
            return {
                status : 429,
                body : {
                    msg : 'rate limit exceed',
                    remaining : remaining
                }
            }
        }

        return {
            status : 200,
            body : {
                msg : "you are allowed to make api req ",
                remaining : remaining
            }
        }
    }
}