import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

async function listener(request, response) {
  // Middleware do body da requisição.
  await jsonHandler(request, response)
  // Middleware de rotas.
  routeHandler(request, response)
}

http.createServer(listener).listen(3333)
