export const ToggleCart = () => ({
    type : 'Toggle_Cart_Hidden'
})

export const AddItem = (item) => ({
    type : 'Add_Items_to_cart',
    payload: item
})

export const RemoveItem = (item) => ({
    type : 'remove_item_from_cart',
    payload: item
})

export const DecreaseItemQuantity = (item) => ({
    type : 'decrease_one_quantity',
    payload: item
})
