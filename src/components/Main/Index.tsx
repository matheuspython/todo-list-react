import React, { useState } from 'react';

import { Container } from './style';

const Main: React.FC = () => {
    const [itens, setItens] = useState<string[]>([])
    const [todo, setTodo] = useState("")

    const alterarLista = (operação)=>{
        if(operação== 'adiciona'){
            addItens()
        }
        else if(operação === "remove"){
            removeItem(todo)
        }
    }
    const addItens = ()=>{
        if (todo.trim() !==""){
            setItens([...itens, todo])
            setTodo("")
        }
    }
    const removeItem = (index:string) => {
        const removeItem = itens.filter((item: string, i:string) => i != index)
        setItens(removeItem)
    }

  return (
    <Container>
        <div className="container">
            <div className="app">
                <div className="initial">
                    <input   
                        type="text"
                        value={todo}
                        onChange={e => setTodo(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') addItens();}}
                    />
                    <button onClick={()=>{alterarLista('adiciona')}}>
                        cadastrar
                    </button>

                    <button onClick={()=>{alterarLista('remove')}}>
                        remover
                    </button>
                </div>
                <ul>
                    {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Main;