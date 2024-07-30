import React, { useEffect } from 'react'
import  { Circle, CircleCheck } from 'lucide-react'
import './Questionario.style.css';
import IconSwitcher from '../IconSwitcher/IconSwitcher'


function Questionario({dados}) {

  const [icon, setIcon] = React.useState(false);
  const [correctAnswser, setCorrectAnswser] = React.useState(0);
  const [wrongAnswser, setWrongAnswer] = React.useState(0);
  const [currentQ, setCurrentQ] = React.useState(0);
  const [answerResponse, setAnswerResponse] =  React.useState();


  if(dados === undefined) return;
  let quizzes;
  quizzes = dados[currentQ]

  //Comparando as respostas do usuário com as respostas corretas
  const handleAnswer = (q) =>{

    if(q === quizzes.resposta){
      setAnswerResponse(true)

    }else{
      setAnswerResponse(false)
    }
 }

  console.log( 'Corretas: ' + correctAnswser, 'Erradas: ' + wrongAnswser)
  const prevQ = () =>{
    setCurrentQ((currentQ) => currentQ  - 1)
  }
  const nextQ = () =>{
    
    answerResponse 
    ? setCorrectAnswser((correctAnswser)  => correctAnswser +  1) 
    : setWrongAnswer((wrongAnswser)  => wrongAnswser +  1)
 
    if(currentQ !== dados.length - 1) {
      setCurrentQ((currentQ) => currentQ + 1)
   }
   else{
      console.log('quiz finalizado')
   }
 } 
  return (
      <>
       <div className='container-p'>
     
       <div className='container'>
          
            <h2 className='titleQuestion' key={quizzes.pergunta}>{quizzes.pergunta}</h2>

            {quizzes.opcoes.map((q , i)=>
               <p  onClick={()=>handleAnswer(q)} className='responses' key={i}>  { icon ? <CircleCheck size={18}/> : <Circle size={18}/>} {q}</p> 
            )}
        </div>
      <div className='link-btn'>
        <a  onClick={prevQ} className='button-prev'>Voltar</a>
        <button onClick={nextQ} className='button-next'>Próxima</button>
      </div>
    
      </div>
     </>
  )
}

export default Questionario
