import React from "react";
import { Footer, Header } from "../../components/builder";
import { CartProvider } from "@/providers";
import { CartSide } from "@/components/shared";

type PropsType = {
    children: React.ReactNode;
};

const DefaultLayout = (props: PropsType) => {
    return (
        <CartProvider>
            <Header />
            {props.children}
            <Footer />
            <CartSide />
        </CartProvider>
    );
};

export default DefaultLayout;
