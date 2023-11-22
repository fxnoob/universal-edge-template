import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

export const name = 'HonoMiddleware'

export const deps = ['Hono', 'Functions']

export async function factoryService(Hono, Functions) {
  Hono.use('*', cors())
  Hono.use('*', logger())
  Hono.use('*', async (c: any, next: any) => {
    console.log('Hello Middleware!')
    await next()
  })
}

export async function init(app: any) {
  return app.container[name]
}
