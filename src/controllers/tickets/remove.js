export function remove({ request, response, database }) {
  const { id } = request.params

  const res = database.delete("tickets", id)

  return response.end(res)
}
