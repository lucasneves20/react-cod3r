import DFilho from "./DiretaFilho";

export default function DPai(props) {
    return (
        <div>
            <DFilho nome="Lucas" idade={17} nerd={true}/>
            <DFilho nome="Daniel" idade={16} nerd={false}/>
        </div>
    )
}