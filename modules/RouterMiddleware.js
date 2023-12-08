import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

export async function factory(container) {
  const { Router } = container
  Router.use('*', cors())
  Router.use('*', logger())
  Router.use('*', async (c, next) => {
    console.log('Hello Middleware!')
    await next()
  })
}

export const initialize = true
