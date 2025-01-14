import react from 'react';
import styled from "styled-components";
import FilterSection from '../component/FilterSection';
import Sort from '../component/Sort';
import ProductList from '../component/ProductList';

export const Product = () => {
    return (
        <Wrapper>
            <div className='container grid grid-filter-column'>
                <div>
                    <FilterSection />
                </div>

                <div className='product-view--sort'>
                    <div className='sort-filter'>
                        <Sort />
                    </div>

                    <div className='main-product'>
                        <ProductList />
                    </div>
                </div>
            </div>
        </Wrapper>

    )
}
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;