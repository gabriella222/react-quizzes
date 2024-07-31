import React from 'react'
import './HeaderResults.style.css'

function HearderResults({dados, quizAtual, setQuizAtual}) {
   
  return (
    <>
     
     <div className='container-geral'>
         <div className="containerResults">
            <h1 className='title-header'>Treine seus conhecimentos</h1>
            <p className='subtitle'>PROGRAMAÇÃO</p>
          </div>

      <div className='soma'>
            <h2 className='quiz-atual'></h2>
      </div>
     </div>
        
    </>
  )
}

export default HearderResults
