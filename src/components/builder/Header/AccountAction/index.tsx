import React, { ReactNode } from "react";
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { BsPersonGear } from "react-icons/bs";
import { Link } from "react-router-dom";

const CustomToggleAccount = React.forwardRef(
    (
        {
            children,
            onClick,
        }: {
            children: ReactNode;
            onClick: (e: any) => void;
        },
        ref
    ) => (
        <span
            //@ts-ignore
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            className="tw-flex tw-items-center"
        >
            {children}
        </span>
    )
);

const AccountAction = () => {
    return (
        <span className="tw-hidden tw-items-center lg:tw-flex hover:tw-cursor-pointer">
            <Dropdown>
                <Dropdown.Toggle
                    variant="success"
                    as={CustomToggleAccount}
                    id="dropdown-basic"
                >
                    <OverlayTrigger
                        placement={"bottom"}
                        overlay={
                            <Tooltip
                                id={`tooltip-end}`}
                                className="tw-whitespace-break-spaces"
                            >
                                {"Tài\n khoản"}
                            </Tooltip>
                        }
                    >
                        <span className="tw-inline-block">
                            <BsPersonGear />
                        </span>
                    </OverlayTrigger>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className="tw-px-4">
                        <p className="tw-font-bold">Tài khoản</p>

                        <Link to={"/login"} className="btn btn-dark tw-w-full">
                            Đăng nhập
                        </Link>
                        <Link
                            to={"/register"}
                            className="btn btn-dark tw-w-full tw-inline-block tw-mt-3"
                        >
                            Tạo tài khoản
                        </Link>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </span>
    );
};

export default AccountAction;
