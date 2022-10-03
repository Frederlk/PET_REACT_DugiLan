const useSetPrices = (price: number, discount?: number) => {
    const tax = 0.1;
    const priceTax = price + price * tax;
    const priceDiscount = discount ? priceTax - priceTax * (discount / 100) : priceTax;

    return {
        priceTax: priceTax,
        priceDiscount: priceDiscount,
    };
};

export default useSetPrices;
