import s from "./style.module.css"
import { useState } from "react";

export function MenuListItem(props) {
    const [isHovered, setHover] = useState(false);


    const activate = () => {
        setHover(true)

    }
    const deActivate = () => {
        setHover(false)
    }
    const getBackgroundColor = () => {
        if (isHovered) {
            return "#a5e9ff";
        } else {
            if (props.isSelected) {
                return "#26baea";
            } else {
                return "#eff0ef";
            }
        }
    };

    const onItemClick = () => {
        props.onClick(props.difficulty)
    }
    return (
        <div className={s.items}
            onMouseEnter={activate}
            onMouseLeave={deActivate}
            style={{ backgroundColor: getBackgroundColor() }}
            onClick={onItemClick}
        >
            {props.difficulty}
        </div>
    )
}