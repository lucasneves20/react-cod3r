import React, {cloneElement} from "react";

export default function Membro(props) {
    return (
        <div>
            {React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })}
        </div>
    )
}