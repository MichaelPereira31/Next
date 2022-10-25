import Link from "next/link";

export default function routes(){
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
    </div>
  )
}