import { useState } from "react";
import { menu } from "../../_data";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import clsx from "clsx";
import { BasicProductCart } from "@/components/shared";

const MobileNavigation = () => {
    const [active, setActive] = useState(-1);
    return (
        <nav className={clsx("tw-bg-white tw-px-4 tw-py-5", style.wrapper)}>
            {menu.map((item, index) => (
                <div key={index} className={style.nav_item}>
                    <div className="tw-flex tw-justify-between tw-py-2">
                        <Link
                            to={`/category${item.path}`}
                            className="tw-uppercase tw-no-underline tw-text-black tw-font-bold"
                        >
                            {item.title}
                        </Link>
                        <div
                            className={clsx(
                                style.plus_icon,
                                active === index ? style.active : ""
                            )}
                            onClick={() =>
                                setActive(active === index ? -1 : index)
                            }
                        >
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div
                        className={clsx(
                            "tw-grid tw-grid-cols-2 tw-max-h-0 tw-overflow-hidden tw-transition-all",
                            style.menu,
                            active === index ? style.active : ""
                        )}
                    >
                        {item.products.map((it, idx) => (
                            <BasicProductCart image={it.image} key={idx} />
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    );
};

export default MobileNavigation;
