const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
        let  priceArry = action.payload.map((curElem)=>curElem.price)
           let maxPrice = Math.max(...priceArry)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice,price:maxPrice}
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            };

        case "FILTERS_PRODUCTS":
            let { all_products }= state;
            let tempFilterProduct = [...all_products];

            const { text, category, colors, price } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                  return curElem.name.toLowerCase().includes(text);
                });
              }
        
              if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                  (curElem) => curElem.category === category
                );
              }

              if (colors !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                  (curElem) => curElem.colors.includes(colors)
                );
              }

              if(price){
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price <= price
                  );

              }

        
        return {
                ...state,
                filter_products: tempFilterProduct,
            }


        default:
            return state;
    }

}

export default filterReducer;