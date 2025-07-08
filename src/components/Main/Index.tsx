import React, { useState } from 'react';

import { Container } from './style';

type todo = {
 id: string;
 text: string
}

const Main: React.FC = () => {
    const [todo, setTodo] = useState<todo[]>([])
    const [newTodo, setNewTodo] = useState<string>('')
    const [validateEdit, setValidateEdit] = useState(true)
    
    const edirFirstStep = (newText:string, id:string)=> {
        if(validateEdit){
            setValidateEdit(!validateEdit)
            editTodo(newText, id)
        }
    }

    const adicionaTodo = (newTodo: string) => {
        if(newTodo.trim() !== ''){
            setTodo([...todo, {id: Date.now().toString(), text: newTodo}])
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
                item.id == id ? {...item, text: newText} : item
            )
        )
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
                        {validateEdit == true ? 
                            <span>{item.text}</span>  
                        :  
                            <input
                            className='input'
                             type='text' 
                             onChange={e => 
                             setNewTodo(e.target.value)}
                             onKeyDown={e => { if (e.key === 'Enter') adicionaTodo(newTodo);}} 
                             value={newTodo}
                            />}
                       
                        <button className='editables' onClick={()=>{ removeTodo(item.id) }}>remove</button>
                        <button className='editables' onClick={()=> { edirFirstStep(item.text, item.id) }}>edita</button>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </Container>
  )
}

export default Main;