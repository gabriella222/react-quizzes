import React, { useState, useEffect } from 'react'
import Questionario from './components/Questionario/Questionario'
import './App.style.css'
import HearderResults from './components/HeaderResults/HeaderResults'


function App() {

  const [dados,setDados] = React.useState();
  const [quizAtual, setQuizAtual] = React.useState();
  const [currentQ, setCurrentQ] = React.useState(0);
  const [showFinal, setShowFinal] = React.useState(false);

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
      <HearderResults dados={dados} quizAtual={quizAtual} setQuizAtual={setQuizAtual} currentQ={currentQ} showFinal={showFinal}/>
      <Questionario  dados={dados} setQuizAtual={setQuizAtual} currentQ={currentQ} setCurrentQ={setCurrentQ} showFinal={showFinal} setShowFinal={setShowFinal}/> 

    </>
  )
}

export default App
