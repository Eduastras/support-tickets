import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      // do banco de dados (db.json) pro database.
      .then((data) => {
        this.#database = JSON.parse(data)
      })
      .catch((error) => {
        this.#persist()
      })
  }

  // do database pro banco de dados (db.json).
  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  // data = dados.
  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()
  }

  select(table, filters) {
    let data = this.#database[table] ?? []

    if (filters) {
      // filtrando os objetos com base no status.
      data = data.filter((row) => {
        // Object.entries transforma um objeto em um array, dividindo entre propriedade e valor.
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      })
    }

    return data
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id)

    if (rowIndex != -1) {
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...data,
      }

      this.#persist()
    }
  }
}
