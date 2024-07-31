import React, { useState, useEffect } from 'react'
import Questionario from './components/Questionario/Questionario'
import './App.style.css'
import HearderResults from './components/HeaderResults/HeaderResults'


function App() {

  const [dados,setDados] = React.useState();
  const [quizAtual, setQuizAtual] = React.useState();

  useEffect(()=>{

    try{
      async function apiQuiz(){
        const req = await fetch('http://localhost:3000/quizzes/')
        const json = await req.json();
        setDados(json)
      }
      apiQuiz()
    }
    catch(e){
      console.log(e)
    }
   
      
  }, [])

  return (
    <>
      <HearderResults dados={dados} quizAtual={quizAtual} setQuizAtual={setQuizAtual}/>
      <Questionario  dados={dados} setQuizAtual={setQuizAtual}/> 

    </>
  )
}

export default App
