import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../graphql/queries';
import Button from './Button';

const CountryList = ({ onSelectCountry }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {data.countries.map(country => (
          <li key={country.name}>
            {country.name} 
            <Button onClick={() => onSelectCountry(country)}>Details</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;