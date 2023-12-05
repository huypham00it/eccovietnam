import { useCart } from "@/contexts";
import clsx from "clsx";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./style.module.scss";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartSide = () => {
    const { isShowCart, toggleShowCart } = useCart();

    return (
        <Offcanvas show={isShowCart} onHide={toggleShowCart} placement="end">
            <Offcanvas.Header closeButton className={clsx(style.header)}>
                <Offcanvas.Title>Giỏ hàng của tôi</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="tw-flex tw-gap-3 tw-py-2">
                    <div>
                        <Image
                            width={125}
                            height={98}
                            src="https://product.hstatic.net/1000143422/product/spice_910731291117_tui_deo_cheo_ecco__2__9042a83c1dcc4addbfc38e2bd92e92d0_master.jpg"
                            alt="product"
                        />
                    </div>
                    <div>
                        <Link
                            to={`/detail/`}
                            className="tw-text-black tw-no-underline"
                        >
                            ECCO TAKEAWAY CROSSBODY
                        </Link>
                        <p className="tw-mb-0">Color: SPICE</p>
                        <p>Size: SPICE</p>
                    </div>
                    <div>
                        <p className="tw-text-red-700 tw-font-bold">
                            9,590,000₫
                        </p>
                    </div>
                </div>
                <div className="tw-flex tw-gap-3 tw-py-2">
                    <div>
                        <Image
                            width={125}
                            height={98}
                            src="https://file.hstatic.net/1000143422/file/61591181_tui_deo_cheo_ecco__2__b250e386044b4352ae8982fbc0e118b6_master_a2e18adae30849278f5b2f3243544ce5.jpg"
                            alt="product"
                        />
                    </div>
                    <div>
                        <Link
                            to={`/detail/`}
                            className="tw-text-black tw-no-underline"
                        >
                            ECCO TAKEAWAY CROSSBODY
                        </Link>
                        <p className="tw-mb-0">Color: SPICE</p>
                        <p>Size: SPICE</p>
                    </div>
                    <div>
                        <p className="tw-text-red-700 tw-font-bold">
                            9,590,000₫
                        </p>
                    </div>
                </div>
                <div
                    className={clsx(
                        "tw-flex tw-justify-between tw-py-4 tw-mt-4",
                        style.total
                    )}
                >
                    <span className="tw-font-bold">Tổng tiền</span>
                    <span className="tw-font-bold">9,590,000₫</span>
                </div>
                <div>
                    <Link className="btn btn-dark tw-w-full" to={"/cart"}>
                        Xem giỏ hàng
                    </Link>
                    <Button
                        variant="outline-dark"
                        className="tw-w-full tw-mt-2"
                        onClick={toggleShowCart}
                    >
                        Tiếp tục mua hàng
                    </Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartSide;
