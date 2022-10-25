import {useRouter} from 'next/router'

export default function bucar(){
  const router = useRouter()
  const id =  router.query.id
  const nome =  router.query.nome
  
  return (
    <div>
      <h1>Rotas Buscar pelo Id: {+id}, nome: {nome}</h1>
    </div>
  )
}