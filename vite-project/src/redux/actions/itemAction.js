import { ActionTypes } from '../contants/action-types'

export const setItems = (items) => {
    return {
        type: ActionTypes.SET_ITEMS,
        payload: items
    }
}

export const selectedItems = (item) => {
    return {
        type: ActionTypes.SELECTED_ITEM,
        payload: item
    }
}

export const removeSelectedItems = (item) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_ITEM,
    }
}

REMOVE_SELECTED_ITEM : "REMOVE_SELECTED_ITEM"