export const tickets = [
  {
    method: "POST",
    // Caminho
    path: "/tickets",
    controller: (request, response) => {
      response.end("Criado com sucesso!")
    },
  },
]
