import { useEffect, useState } from "react"

export default function questao(){
  const [questao, setQuestao] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123')
    .then(response => response.json())
    .then(setQuestao)
  }, [])
 function renderizarRespostas(){
  if(questao){
    return questao.respostas.map((res, i) => {
      return <li key={i}>{res}</li>
    })
  }
  return false
 }
  return (
    <div>
      <h1>{questao?.id} - Questão</h1>
      <div>
        <span>
          {questao?.enunciado}
        </span>
        <ul>
          {renderizarRespostas()}
        </ul>
      </div>
    </div>
  )
}