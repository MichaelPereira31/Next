export default function params (request, response) {
  response.status(200).json(request.query)
}
