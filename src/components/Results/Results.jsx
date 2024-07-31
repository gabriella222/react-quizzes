import React from 'react'
import './Results.style.css'

function Results({totalQuizzes,correctAnswser, setCorrectAnswser, wrongAnswser,setWrongAnswer,setCurrentQ,setShowFinal}) {

 
  const handleReset = () =>{
    setShowFinal(0)
    setCurrentQ(0)
    setCorrectAnswser(0)
    setWrongAnswer(0)
  }
  return (
    <div className='container-result'>
       <h2 className='title-quiz-finish'>Quiz finalizado!</h2>
       <h3 className='graph-result'>{correctAnswser}/{totalQuizzes}</h3>
       <p>Total de acertos: {correctAnswser}</p>
       <button onClick={handleReset} className='button-reset'>Recomeçar</button>
    </div>
  )
}

export default Results
