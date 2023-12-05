import React from "react";
import CartContext from "./CartContext";

export { CartContext };

export const useCart = () => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a UseCartProvider");
    }
    return context;
};
