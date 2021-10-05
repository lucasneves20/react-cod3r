import Membro from "./Membro";

export default function Familia(props) {
    return (
        <div>
            <Membro nome="Pedro"  sobrenome= {props.sobrenome}/>
            <Membro nome="Lucas" {...props}/* pega todos os parametros do pai *//>
            <Membro nome="Daniel" sobrenome= "O Magnífico"/>
        </div>
    )
}