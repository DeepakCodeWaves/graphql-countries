import React from 'react';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name} Details</h2>
      <p>Capital: {country.capital}</p>
      <p>Code: {country.code}</p>
      <p>Currency: {country.currency}</p>
      <p>Native Name: {country.native}</p>
      <p>Phone Code: {country.phone}</p>
      <p>Languages:</p>
      <ul>
        {country.languages.map(language => (
          <li key={language.code}>
            {language.name} ({language.code})
          </li>
        ))}
      </ul>
      <p>Subdivisions:</p>
      <ul>
        {country.subdivisions.map(subdivision => (
          <li key={subdivision.code}>
            {subdivision.name} - {subdivision.emoji}
          </li>
        ))}
      </ul>
      <p>States:</p>
      <ul>
        {country.states.map(state => (
          <li key={state.code}>{state.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetails;
