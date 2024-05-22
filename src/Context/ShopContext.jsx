import React, { createContext, useState, useContext } from "react";
import { Snackbar } from "@mui/material";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [showSnackbar, setShowSnackbar] = useState(false);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        setShowSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setShowSnackbar(false);
    };

    const contextValue = { all_product, cartItems, addToCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="Item added to cart!"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                
            />
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
