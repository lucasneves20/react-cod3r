import If, { Else } from "./If"

export default function Info(props) {
    const usuario = props.usuario ||{}
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <If test={usuario && usuario.nome}>
                Seja bem vindo {usuario.nome}!  {'<|>'}
            </If> 

            <If key ={usuario.nome} test={usuario && usuario.nome}>
                Seja bem vindo {usuario.nome}!
                <Else>
                    Talvez você seja um "amigo"
                </Else>
            </If>
{/*             
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo Amigão!
            </If> */}
        </div>
    )
}
