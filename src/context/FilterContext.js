import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view:true,
  filters: {
    text: "",
    category: "all",
    colors: "all",
    maxPrice:0,
    price: 0,
    minPrice:0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  

  const [state, dispatch] = useReducer(reducer, initialState);

  
  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // to set the List view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

 

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    //In name and value variable we can access the name and value proprties of event object
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  // to sort the product
  useEffect(()=>{
    dispatch({type:"FILTERS_PRODUCTS"})
  },[products,state.filters])

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
  }, [products]);
  

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
