import { useState } from "react";
import IFilho from "./IndiretaFilho";

export default function IPai() {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInfo (nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            Pai: <span>{nome} </span>
            <span> tem {idade} anos </span>
            <div>Verdade que é nerd? {nerd ? 'Verdadeiro' : 'Falso'}</div>
            <br/>
            <IFilho Clicker={fornecerInfo}/>
        </div>
    )
}