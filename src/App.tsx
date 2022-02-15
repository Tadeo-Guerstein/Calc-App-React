/* eslint no-eval: 0 */
import React, { useState, FC } from "react";
import words from 'lodash.words';
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'; //*los componentes se importan antes del CSS
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css'; //* el css importado de esta manera se utiliza de manera global a todos los componentes


// generación de la funcion flecha del componente
const App: FC = () =>{//* es buena práctica que el nombre de la funcián se llame igual que el archivo
    
    // 1er posición: valor (que inicialmente es el valor por defecto)
    // 2da posicion: funcion que me va a permitir modificar el valor por defecto
    // [xxxx], [setxxxx]
    const [stack, setStack] = useState("");

    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0";
    // Es similar a un if
    // esVerdadero ? (resultadoPorVerdadero) : (resultadoPorFalso)

    const onClickEqual = () => {
        setStack(eval(stack).toString());
    };       

    const onContentClear = () => {
        setStack("");
    };

    const onDelete = () => {
        if(stack.length > 0 ){
            const newStack = stack.substring(0, stack.length - 1)
            setStack(newStack)
        }
    };

    return(
        <main className='react-calculator'>
            <Result value = {value}/>
            <Numbers onClickNumber={number => setStack(`${stack}${number}`)}/>
            <Functions onContentClear={onContentClear} onDelete={onDelete}/>
            <MathOperations onClickOperation={operation => setStack(`${stack}${operation}`)} onClickEqual={onClickEqual}/>
        </main> //* el elemento main se utiliza para lo principal del documento
    )
}  

// exportación
export default App