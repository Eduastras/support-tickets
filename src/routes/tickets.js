import { create } from "../controllers/tickets/create.js"
import { index } from "../controllers/tickets/index.js"

export const tickets = [
  {
    method: "POST",
    // Caminho.
    path: "/tickets",
    // Função que executa quando a rota for chamada.
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
]
