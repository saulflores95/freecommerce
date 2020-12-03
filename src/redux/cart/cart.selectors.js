import { createSelector } from 'reselect'

// A selector is a function that gets the whole state and just returns a slice of it
const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

// Will output the total qty of all the cart items
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulateQuantity, cartItem) => 
            accumulateQuantity + cartItem.quantity, 0)

)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulateQuantity, cartItem) => 
            accumulateQuantity + cartItem.quantity * cartItem.price, 0)
)