import { useState } from "react"
import '../../style/components/input.css'

export default function Form() {
    const [valor, setValor] = useState('inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    
    return (
        <div className="input">
            <input value={valor} onchange={quandoMudar}/> 
            {/* dessa forma ele muda de estado e atribui valor */}
            
            <input value={valor} readOnly/> 
            {/* dessa forma ele fica apenas como leitura */}
        
            <input value={undefined}/> 
            {/* dessa forma ele não tem estado e valor*/}
        </div>
    )
} 