import Link from 'next/link'
import {useRouter} from 'next/router'

export default function bucar(){
  const router = useRouter()
  const id =  router.query.id
  
  return (
    <div>
      <h1>Rotas Buscar pelo Id: {+id}</h1>
      <Link href='/routes'>
        <button>
          Voltar
        </button>
      </Link>
    </div>
  )
}