import React, { createContext, useState, useContext } from "react";
import { Snackbar } from "@mui/material";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [actionMessage, setActionMessage] = useState("");

    const addToCart = (itemId) => {
        const itemName = all_product.find(product => product.id === itemId).name;
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setActionMessage(`${itemName} has been added to cart!`);
        setShowSnackbar(true);
    };

    const removeFromCart = (itemId) => {
        const itemName = all_product.find(product => product.id === itemId).name;
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
        setActionMessage(`${itemName} has been removed from cart!`);
        setShowSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };

    const removeAll = (itemId) => {
        const itemName = all_product.find(product => product.id === itemId).name;
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
        setActionMessage(`All ${itemName}s have been removed from cart!`);
        setShowSnackbar(true);
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, removeAll };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={actionMessage}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
