import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {  selectorCounterInfo } from '../store/countries/countries-selector';
import { useEffect } from 'react';
import { loadCountries } from '../store/countries/countries-action';
import { selectAllControl } from '../store/controls/controls-selector';
import { selectorVisible } from './../store/countries/countries-selector';


export const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
 const {gty, status, error} = useSelector(selectorCounterInfo)
 const {search, region} = useSelector(selectAllControl)
 const countries = useSelector(state => selectorVisible(state, {search, region}))




useEffect(() => {
if(!gty) {
  dispatch(loadCountries())
}
}, [gty, dispatch])




  return (
    <>
      <Controls />

      {status === 'loading' && <h2>Loading...</h2>}

      {status === 'rejected' && <h2>not fetch countries</h2>}

      {status === 'received' && (
  <List>
  {countries.map((c) => {
    const countryInfo = {
      img: c.flags.png,
      name: c.name,
      info: [
        {
          title: 'Population',
          description: c.population.toLocaleString(),
        },
        {
          title: 'Region',
          description: c.region,
        },
        {
          title: 'Capital',
          description: c.capital,
        },
      ],
    };

    return (
      <Card
        key={c.name}
        onClick={() => navigate(`/country/${c.name}`)}
        {...countryInfo}
      />
    );
  })}
</List>
)}

        

      
    </>
  );
};
