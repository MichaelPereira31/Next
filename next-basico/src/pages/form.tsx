import { useState } from "react"

export default function form(){
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [usuarios, setUsuarios] = useState([])
  
  async function salvarUsuario(){
    await fetch('/api/form', { 
      method: 'POST',
      body: JSON.stringify({nome,idade})
    })

    setNome('')
    setIdade(0)

    const respostas = await fetch('/api/form')
    const usuarios = await respostas.json()
    setUsuarios(usuarios)
  }

  function renderizarUsuarios(){
    return usuarios.map((usuario, i) => <li key={i}>{usuario.nome} tem {usuario.idade} anos.</li>)
  }

  const styleForm = {
    marginBottom: '5px'
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      
      <h1>Integrando com API #02</h1>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)}  style={styleForm}/>
      <input type="number" value={idade} onChange={e => setIdade(+e.target.value)} style={styleForm}/>
      <button onClick={salvarUsuario}>Salvar</button>

      <ul>
        { renderizarUsuarios() }
      </ul>
    </div>
  )
}