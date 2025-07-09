import React, { useState } from 'react';

import { Container } from './style';

type todo = {
 id: string;
 text: string;
 aparece: boolean
}

const Main: React.FC = () => {
    const [todo, setTodo] = useState<todo[]>([])
    const [newTodo, setNewTodo] = useState<string>('')
    const [textEdict, setTextEdit] = useState<string>('')

    const initialEdition = (id:string) =>{
        setTodo(prevItem =>
            prevItem.map(item => item.id == id ? { ...item,aparece: false } : item)
        )
    }

    const adicionaTodo = (newTodo: string) => {
        if(newTodo.trim() != ''){
            setTodo([...todo, {id: Date.now().toString(), text: newTodo, aparece: true}])
            setNewTodo("")
        }
    }

    const removeTodo = (id: string)=>{
        const removeItem = todo.filter((item) => item.id != id)
        setTodo(removeItem)
    }

    const editTodo = (newText:string, id:string)=>{
        setTodo(prevItems =>
            prevItems.map(item =>
                item.id == id ? {...item, text: newText, aparece: true} : item
            )
        )
        setTextEdit("")
    }

  return (
    <Container>
        <div className="container">
            <div className="app">
                <div className="initial">
                    <input   
                        className='input'
                        type="text"
                        value={newTodo}
                        onChange={e => setNewTodo(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') adicionaTodo(newTodo);}}
                    />
                    <button 
                        onClick={()=>{adicionaTodo('adiciona')}}
                        className='button'
                    >
                        cadastrar
                    </button>

                </div>
                <ul className='list'>
                    {todo.map(item => (
                    <li key={item.id}>
                        {item.aparece == true ? (<>
                                <span>{item.text}</span>  
                                <button className='editables' onClick={()=>{ removeTodo(item.id) }}>remove</button>
                                <button className='editables' onClick={()=>{initialEdition(item.id)}}>edita</button>
                            </>)
                        :  
                            <>
                                <input
                                className='input'
                                type='text' 
                                onChange={e => 
                                setTextEdit(e.target.value)}
                                onKeyDown={e => { if (e.key === 'Enter') adicionaTodo(newTodo);}} 
                                value={textEdict}
                                />
                                <button className='editables' onClick={()=>{editTodo(textEdict, item.id)}}>confirmar</button>
                             </>
                            }
                       
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Main;