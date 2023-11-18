# Universal Edge Template

Single repo to support deployment on all edge environments. eg. Deno deploy, Cloudflare Workers etc.


### Initial Setup

```sh
yarn
```

### Available Commands

```sh
yarn dev:cf #=> Cloudflare Worker API Server On Localhost
yarn dev:deno #=> Deno API Server on Localhost

yarn deploy:cf #=> Deploy to Cloudflare workers
yarn deploy:deno #=> Deploy to `Deno Deploy` servers
```

