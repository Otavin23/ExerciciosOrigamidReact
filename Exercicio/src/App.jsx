import React from "react"
import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction:column ;
.buttons{
  display: flex;
  flex-wrap: wrap;
}
  button{
    border: none;
    margin: 1rem;
    //width: 20%;
    height: 40px;
    font-size: 20px;
    background-color: #8fc6fa;
    flex: 1;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
      transition: all 0.05s ease;
    }
  }
  #imgL{
    width: 100%;
    height: 100%;
  }
`
const Result = styled.div`
  color: Red
`
const App = ()=>{
  const [data, setData] = useState([])

  const {
    nome,
    preco,
    fotos,
  } = data 

    async function showRes({target}){
      const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.value}`)
      const json = await res.json()
      setData(json)
    }
  return (
    <>
    <main>
      <Container>
        <div className="buttons">
        <button value="notebook" onClick={showRes}>notebook</button>
        <button value="smartphone" onClick={showRes}>smartphone</button>
        <button value="tablet" onClick={showRes}>tablet</button>
      </div>
      {data === 0 ? (
        <>
        <h2>Carregando...</h2>
        </>
      ) : (
        <>
      <div>
        <h1>{nome}</h1>
        <p>{data <= 0 ? "" : (
          <p>R$ {preco}</p>
          )}</p>
        <img id="imgL"src={data <= 0 ? "" : fotos[0].src}/>
      </div>
        </>
      )}
      
      </Container>

    </main>
    </>
  )
}
export default App 