import React from 'react'
import styled from "styled-components";
import { useFilterContext } from '../context/FilterContext';
import { FaCheck } from "react-icons/fa";
import { FormatPrice } from '../Helpers/FormatPrice';
import { Button } from '../styles/Button';

const FilterSection = () => {
  const {
    filters: { text, category, colors, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  //To GET THEN UNIQUE DATA OF EACH FIELDS
  const getUniquesData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    })

    if (attr === "colors") {
      newVal = newVal.flat();
    }
    
    return (newVal = ["all", ...new Set(newVal)])
  }

  // Function to clear all filters
  const clearFilters = () => {
    updateFilterValue({ target: { name: 'text', value: '' } });
    updateFilterValue({ target: { name: 'category', value: 'all' } });
    updateFilterValue({ target: { name: 'colors', value: 'all' } });
    updateFilterValue({ target: { name: 'price', value: 0 } });
  };

  //we need unique data
  const categoryData = getUniquesData(all_products, "category")
  const colorData = getUniquesData(all_products, "colors")
  const priceData = getUniquesData(all_products, "price")

  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type='text' name='text' value={text} onChange={updateFilterValue} placeholder='Search' />
        </form>
      </div>
      <div className='filter-category'>
        <h3>Category</h3>
        <div>{categoryData.map((curElem, index) => {
          return <button key={index} type='button' value={curElem} name="category" onClick={updateFilterValue}>{curElem}</button>
        })}
        </div>
      </div>
      <div className='filters-colors colors'>
        <h3>Colors</h3>
        <div className='filter-color-style'>{colorData.map((curColor, index) => {
          if (curColor === "all") {
            return (
              <button key={index} type='button' value={curColor} name="colors" className='color-all--style' onClick={updateFilterValue}>
                all
              </button>
            );
          }
          return (
            <button key={index} type="button" value={curColor} name="colors" style={{ backgroundColor: curColor }} className={colors === curColor ? "btnStyle active" : "btnStyle"} onClick={updateFilterValue}>
              {colors === curColor && <FaCheck className="checkStyle" />}
            </button>
          );
        })}
        </div>
      </div>

      <div className='filter_price'>
        <h3>Price</h3>
        <p className='product-price'>
          <FormatPrice price={price}></FormatPrice>
        </p>

        <div>
          <input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={updateFilterValue} />
          {/* <label for="volume">Volume</label> */}
        </div>
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    display: flex;
      flex-direction: column;
      align-items: flex-start;
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  
    button {
      border: none;
      background-color: ${({ theme }) => theme.colors.white};
      text-transform: capitalize;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.btn};
      }
    }

    .active {
      border-bottom: 1px solid #000;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .filter-color-style {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .btnStyle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
  }
  
  .active {
    opacity: 1;
  }
  
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
    
  .filter_price {
    input {
      margin: 0.5rem 0 9rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
      
    }
  }
  .product-price{
      display: flex;
      flex-direction: column;
      align-items: flex-start;

  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    position: relative;
    top: -86px;
    left: -8px;
    display: flex;
      flex-direction: column;
      align-items: flex-start;
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;
