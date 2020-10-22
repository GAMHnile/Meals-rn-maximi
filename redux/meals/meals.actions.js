export const mealsTypes = {
    TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
    SET_FILTERS: "SET_FILTERS"
}

export const toggleFavorite = (id) =>({
    type: mealsTypes.TOGGLE_FAVORITE,
    payload: id
});

export const setFilters = filterObj =>({
    type: mealsTypes.SET_FILTERS,
    payload: filterObj
})