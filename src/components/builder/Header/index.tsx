import { useCart } from "@/contexts";
import clsx from "clsx";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { Logo } from "../../shared";
import AccountAction from "./AccountAction";
import DesktopNavigation from "./DesktopNavigation";
import Hamberger from "./Hamburger";
import MobileNavigation from "./MobileNavigation";
import style from "./style.module.scss";

const Header = () => {
    const [active, setActive] = useState(false);
    const { toggleShowCart } = useCart();

    return (
        <header
            className={clsx(
                "tw-top-0 tw-bg-white",
                active ? "" : "tw-sticky",
                style.header
            )}
        >
            <div
                className={clsx(
                    "container",
                    "!tw-px-4 tw-p-4 tw-flex tw-justify-between tw-relative tw-items-center lg:tw-static lg:!tw-px-6 xl:tw-px-6 xl:tw-max-w-[1600px]"
                )}
            >
                <div className="tw-absolute tw-top-[50%] tw-left-[50%] tw-translate-x-[-50%] tw-translate-y-[-50%] lg:tw-static lg:tw-translate-x-0 lg:tw-translate-y-0">
                    <Logo />
                </div>

                <div className="lg:tw-hidden">
                    <Hamberger
                        active={active}
                        handleActive={(status) => setActive(status)}
                    />
                </div>

                <div className="tw-hidden lg:tw-block">
                    <DesktopNavigation />
                </div>

                <div className="tw-flex tw-items-center tw-gap-3 tw-text-2xl">
                    <AccountAction />
                    <span
                        className="hover:tw-cursor-default"
                        onClick={toggleShowCart}
                    >
                        <BsBag />
                    </span>
                </div>
            </div>

            <div
                className={clsx(
                    active ? "tw-max-h-[5000px]" : "tw-max-h-0",
                    "tw-overflow-hidden tw-transition-all tw-duration-300 tw-absolute tw-top-14 tw-left-0 tw-w-full tw-z-10 lg:tw-hidden"
                )}
            >
                <MobileNavigation />
            </div>
        </header>
    );
};

export default Header;
