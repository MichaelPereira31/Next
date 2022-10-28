export default function questao (request, response) {
  if (request.method === 'GET') {
    const id = request.query.id
    response.status(200).json({
      id,
      enunciado: 'Qual é sua cor preferida?',
      respostas: ['Branca', 'Vermelha', 'Amarela', 'Verde']
    })
  } else {
    response.status(405).send()
  }
}
