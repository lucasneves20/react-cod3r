export default function Pass(props) {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput"
            type="number"
            value={props.passo}
            onChange={e => props.setPasso(parseInt(e.target.value))}/>
        </div>
    )
}
