import { CartContext } from "@/contexts";
import React, { useState } from "react";

export default function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isShowCart, setIsShowCart] = useState<boolean>(false);

    return (
        <CartContext.Provider
            value={{
                isShowCart: isShowCart,
                toggleShowCart: () => setIsShowCart(!isShowCart),
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
