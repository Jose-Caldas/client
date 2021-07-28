import { ReactNode } from "react";
import { createContext, useContext } from "react";

export type ContextData = {};

export const cartContextDefaultValues = {};

export const CartContext = createContext<ContextData>(cartContextDefaultValues);

export type CartProviderProps = {
    children: ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
    <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

//criação do hook

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
