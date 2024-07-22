import React, { useEffect } from 'react'
import  { Circle, CircleCheck } from 'lucide-react'
import './Questionario.style.css';
import IconSwitcher from '../IconSwitcher/IconSwitcher'


function Questionario({dados}) {

  const [icon, setIcon] = React.useState(false);
  const [resultado, setResultado] = React.useState([]);
  const [currentQ, setCurrentQ] = React.useState(0);


  const nextQ = () =>{
    console.log('cliq')
    setCurrentQ((currentQ) => currentQ + 1)
  }

  // const handleClick = (op, e) =>{    
  //   setIcon(icon => !icon)
  //   const result = dados.some((dd)=> op === dd.resposta)
  //   console.log(result)
   
  //   setResultado([...resultado,result])
  //   console.log(`Total de resultado das respostas: ${resultado}`)
    
  // }

  // if(dados === 0) return;
  // let quizzes = dados[currentQ]
  // console.log(quizzes)

  return (
      <>
       <div className='container-p'>
      {/* <p>{quizOne.pergunta}</p>
      {quizOne.opcoes((e)=> <p>{e}</p>)} */}

      {/* {quizOne.map((dd)=>(
       
       <div className='container'>
          
            { console.log(dados[currentQ]) }
            <h2 className='titleQuestion' key={dd.id}>{dd.pergunta}</h2>

            {dd.opcoes.map((q , i)=>
               <p className='responses' key={i}  onClick={()=>handleClick(dd.op1)}>  { icon ? <CircleCheck size={18}/> : <Circle size={18}/>} {q}</p> 
            )}
        </div>

     
      ))} */}
  
      <button onClick={nextQ} className='button-next'>Próxima</button>
      </div>
     </>
  )
}

export default Questionario
