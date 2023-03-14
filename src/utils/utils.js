export const currencyFormatter = (value) => {
    const formattedValue = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: "INR",
    }).format(value)
    return formattedValue
}