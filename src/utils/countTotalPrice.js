export const countOrderTotalPrice = (order) => {
    const total = order.reduce((total, good) => {
        return total + (good.price * good.amount);
    }, 0);
    return total
}

export const countGoodTotalPrice = (good) => {
    const total = good.price * good.amount;
    return total
}