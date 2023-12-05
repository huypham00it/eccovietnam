import React from "react";

const CartContext = React.createContext<
    | {
          isShowCart: boolean;
          toggleShowCart: () => void;
      }
    | undefined
>(undefined);

export default CartContext;
