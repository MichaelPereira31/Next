import Link from "next/link";
import router, {useRouter} from 'next/router'
export default function routes(){

  function name(url){
    router.push(url)
  }

  function params(){
    router.push({
      pathname: "/routes/params",
      query: {
        id: '123123',
        nome: 'Michael',
      }
    })
  }
  return (
    <div>
      <h1>Rotas</h1>
      <ul>
        <Link href='/routes/params?nome=michael&id=123123'>
          <li>Params</li>
        </Link>
        <Link href='/routes/123/Michael'>
          <li>Michael</li>
        </Link>
        <Link href='/routes/123/buscar'>
          <li>Buscar</li>
        </Link>
      </ul>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <button onClick={() => router.push('/routes/123/buscar')}>Buscar</button>
        <button onClick={() =>name('/routes/123/Michael')}>Michael</button>
        <button onClick={params}>Parms</button>
      </div>
    </div>
  )
}