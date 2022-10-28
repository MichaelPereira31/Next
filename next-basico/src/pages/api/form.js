const usuarios = []
export default function form (request, response) {
  if (request.method === 'POST') {
    post(request, response)
  } else if (request.method === 'GET') {
    get(request, response)
  } else {
    response.status(405).send()
  }
}

function post (request, response) {
  const usuario = JSON.parse(request.body)
  usuarios.push(usuario)
  response.status(201).send()
}

function get (request, response) {
  response.status(200).json(usuarios)
}
