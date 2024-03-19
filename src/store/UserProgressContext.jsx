

import { createContext, useState } from "react";



const UserProgressContext = createContext({
    progress: '', // 'cart', 'checkout'
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});


export function UserProgressContextProvider({children}){

    // below portion is alternate way of managing state, In CartContext useReducer was implemented instead
    const [userProgress, setUserProgress] = useState('');

    function showCart(){
        setUserProgress('cart');
    }

    function hideCart(){
        setUserProgress('');
    }

    function showCheckout(){
        setUserProgress('checkout');
    }

    function hideCheckout(){
        setUserProgress('');
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };

    return(
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    );
}


export default UserProgressContext;