import clsx from "clsx";
import { Link } from "react-router-dom";
import { menu } from "../../_data";
import style from "./style.module.scss";
import { BasicProductCart } from "@/components/shared";

const DesktopNavigation = () => {
    return (
        <>
            <nav className="tw-flex">
                {menu.map((item, index) => (
                    <div
                        key={index}
                        className={clsx(
                            style.nav_item,
                            "tw-px-4 tw-py-3 hover:tw-cursor-pointer"
                        )}
                    >
                        <Link
                            to={`/category${item.path}`}
                            className={clsx(
                                style.nav_item_link,
                                "tw-uppercase tw-text-lg tw-text-black tw-font-bold tw-inline-block tw-no-underline"
                            )}
                        >
                            {item.title}
                        </Link>

                        <div
                            key={index}
                            className={clsx(
                                "tw-absolute tw-top-full tw-left-0 tw-right-0 tw-bg-white tw-max-h-0 tw-overflow-hidden tw-transition-all tw-duration-300 tw-shadow-md",
                                style.special_product
                            )}
                        >
                            <div
                                className={clsx(
                                    "container",
                                    "lg:!tw-px-6 xl:tw-px-6 xl:tw-max-w-[1600px] tw-grid tw-grid-cols-6 tw-gap-2"
                                )}
                            >
                                {item.products.map((it, idx) => (
                                    <BasicProductCart
                                        image={it.image}
                                        key={idx}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </nav>
        </>
    );
};

export default DesktopNavigation;
