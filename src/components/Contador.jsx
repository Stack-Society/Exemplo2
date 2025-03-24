import {useState} from 'react'

const Contador = () => {
  
    // HOOK-useState-Manipula o estado da variável
    const[contador,setContador]=useState(0);

return (
    <>
    <h1>Meu contador</h1>

    <p>Você clicou: {contador}</p>
    <button onClick={()=>setContador(contador + 1)}>Aumentar</button>
    <button onClick={()=>setContador(contador - 1)}>Diminuir</button>


    </>
  )
}

export default Contador