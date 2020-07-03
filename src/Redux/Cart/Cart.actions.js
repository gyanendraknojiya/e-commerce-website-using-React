export const ToggleCart = () => ({
    type : 'Toggle_Cart_Hidden'
})

export const AddItem = (item) => ({
    type : 'Add_Items_to_cart',
    payload: item
})

