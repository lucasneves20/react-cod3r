export default function IFilho(props) {
    const min = 30
    const max = 50
    const gerarIdade = () => parseInt(Math.floor(Math.random() * (min - max) + max ))
    const gerarNerd = () => parseInt(Math.random() * (2))

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e) {
                    props.Clicker('Juarez', gerarIdade() , gerarNerd())
                }
            }>Fornecer informações</button>
        </div>
    )
}