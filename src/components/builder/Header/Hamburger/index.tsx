import clsx from "clsx";

import style from "./style.module.scss";

const Hamberger = ({
    active = false,
    handleActive,
}: {
    active?: boolean;
    handleActive: (status: boolean) => void;
}) => {
    return (
        <div
            className={clsx(style.wrapper, active ? style.active : "")}
            onClick={() => handleActive(!active)}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamberger;
