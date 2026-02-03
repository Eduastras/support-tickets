import { randomUUID } from "node:crypto"

// Função do controller.
export function create({ request, response }) {
  const { equipment, description, user_name } = request.body

  // dados do ticket.
  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    // criado em.
    created_at: new Date(),
    // atualizado em.
    updated_at: new Date(),
  }

  return response.end(JSON.stringify(ticket))
}
