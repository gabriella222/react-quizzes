import React, { useEffect } from 'react'
import  { Circle, CircleCheck } from 'lucide-react'
import './Questionario.style.css';
import IconSwitcher from '../IconSwitcher/IconSwitcher'
import Results from '../Results/Results';
import HearderResults from '../HeaderResults/HeaderResults';

function Questionario({dados, setQuizAtual}) {

  const [showFinal, setShowFinal] = React.useState(false)
  const [icon, setIcon] = React.useState(false);
  const [correctAnswser, setCorrectAnswser] = React.useState(0);
  const [wrongAnswser, setWrongAnswer] = React.useState(0);
  const [currentQ, setCurrentQ] = React.useState(0);
  const [answerResponse, setAnswerResponse] =  React.useState();
  const [selectResponse, setSelectResponse] = React.useState(null)

  if(dados === undefined) return;
  let quizzes;
  quizzes = dados[currentQ];
  const totalQuizzes = dados.length;


  //Comparando as respostas do usuário com as respostas corretas
  const handleAnswer = (q, i) =>{
    setSelectResponse(i)
    if(q === quizzes.resposta){
      setAnswerResponse(true)

    }else{
      setAnswerResponse(false)
    }
 }

  console.log( 'Corretas: ' + correctAnswser, 'Erradas: ' + wrongAnswser)
  // const prevQ = () =>{
  //   if(currentQ === 0) return;
  //   setCurrentQ((currentQ) => currentQ  - 1)
  // }
  const nextQ = () =>{

        setSelectResponse(null)
        answerResponse 
        ? setCorrectAnswser((correctAnswser)  => correctAnswser +  1) 
        : setWrongAnswer((wrongAnswser)  => wrongAnswser +  1)
    
        if(currentQ !== dados.length - 1) {
          setCurrentQ((currentQ) => currentQ + 1)
      }
      else{
          setShowFinal(true)
          setCurrentQ(0)
      }
    } 

  //   if(currentQ !== dados.length - 1){
  //     setTimeout(()=>{ 
  //       setCurrentQ((currentQ)=> currentQ + 1) 
  //     }, 7000)
  //   }
  //   else{
  //     setShowFinal(true)
  //     setCurrentQ(0)
  //  }

  return (

   <>
 
     { showFinal ? <Results totalQuizzes={totalQuizzes} correctAnswser={correctAnswser} setCorrectAnswser={setCorrectAnswser} wrongAnswser={wrongAnswser} setWrongAnswer={setWrongAnswer} setCurrentQ={setCurrentQ} setShowFinal={setShowFinal}/> :  
       
       <div className='container-p'>
     
       <div className='container'>
          
            <h2 className='titleQuestion' key={quizzes.pergunta}>{quizzes.pergunta}</h2>

            {quizzes.opcoes.map((q , i)=>
               <p  onClick={()=>handleAnswer(q, i)} className={selectResponse === i ? 'response-select' : 'responses'} key={i}>  { selectResponse === i ?  <CircleCheck size={18}/> : <Circle size={18}/>} {q}</p> 
            )}
        </div>
  
      <div className='link-btn'>
        {/* <a  onClick={prevQ} className='button-prev'>Voltar</a> */}
        <button onClick={nextQ} disabled={selectResponse === null} className='button-next'>Próxima</button>
      </div>
    
      </div>
     }

     </>
  )
}

export default Questionario
