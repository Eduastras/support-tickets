import { create } from "../controllers/tickets/create.js"

export const tickets = [
  {
    method: "POST",
    // Caminho.
    path: "/tickets",
    // Função que executa quando a rota for chamada.
    controller: create,
  },
]
