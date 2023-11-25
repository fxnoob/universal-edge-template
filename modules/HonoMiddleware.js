import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

export async function factory(container) {
  const { Hono } = container
  Hono.use('*', cors())
  Hono.use('*', logger())
  Hono.use('*', async (c, next) => {
    console.log('Hello Middleware!')
    await next()
  })
}

export const initialize = true
