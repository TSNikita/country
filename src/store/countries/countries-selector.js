export const selectorCounterInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    gty: state.countries.list.length
})

export const selectorAllCounter = (state) => state.countries.list;

export const selectorVisible = (state, {search = '', region = ''}) => {
    return state.countries.list.filter(
        country => (
            country.name.toLowerCase().includes(search.toLocaleLowerCase()) && country.region.includes(region)
        )
    )
}