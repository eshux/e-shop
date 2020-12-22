import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product/Product';
import { RootState } from '../store';
import { translations } from '../data/translations';

const Home: FC = () => {
  const products = useSelector((state:RootState) => state.products); 
  const language = useSelector((state: RootState) => state.languages.language);

  return (
    <section className='margin-bottom--48'>
      <div className='container container-fluid'>
        <div className='row center-xs'>
          <div className='col-xs-12'>
            <h1 className='margin-bottom--48'>{translations[language].home.title}</h1>
          </div>
        </div>
        <div className='row center-xs'>
          {products.map(({ name, price, selected, img, id }) => {
            return (
              <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3' key={id}>
                <Product
                  title={name}
                  price={price}
                  selected={selected}
                  img={img}
                  id={id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
