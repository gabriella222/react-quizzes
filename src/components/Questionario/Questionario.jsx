import React, { useEffect } from 'react'
import  { Circle, CircleCheck } from 'lucide-react'
import './Questionario.style.css';
import IconSwitcher from '../IconSwitcher/IconSwitcher'


function Questionario({dados}) {

  const [icon, setIcon] = React.useState(false);
  const [resultado, setResultado] = React.useState([]);
  const [currentQ, setCurrentQ] = React.useState(0);


  const prevQ = () =>{

    if(currentQ <= dados.length - 1){
      return setCurrentQ((currentQ) => currentQ  + 1)
    }
    setCurrentQ((currentQ) => currentQ - 1)
  }

  const nextQ = () =>{
    
    if(currentQ >= dados.length - 1){
      return setCurrentQ((currentQ) => currentQ)
    }
    setCurrentQ((currentQ) => currentQ + 1)

  }

  
  // const handleClick = (op, e) =>{    
  //   setIcon(icon => !icon)
  //   const result = dados.some((dd)=> op === dd.resposta)
  //   console.log(result)
   
  //   setResultado([...resultado,result])s
  //   console.log(`Total de resultado das respostas: ${resultado}`)
    
  // }

  
  if(dados === undefined) return;

  console.log(dados.length)
  let quizzes;
  quizzes = dados[currentQ]



  return (
      <>
       <div className='container-p'>
     
       <div className='container'>
          
            <h2 className='titleQuestion' key={quizzes.pergunta}>{quizzes.pergunta}</h2>

            {quizzes.opcoes.map((q , i)=>
               <p className='responses' key={i}>  { icon ? <CircleCheck size={18}/> : <Circle size={18}/>} {q}</p> 
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
