import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import './App.css'; 

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = country => {
    setSelectedCountry(country);
  };

  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <h1>Country Information App</h1>
        <div className="content">
          <div className="list-container">
            <CountryList onSelectCountry={handleSelectCountry} />
          </div>
          {selectedCountry && (
            <div className="details-container">
              <CountryDetails country={selectedCountry} />
            </div>
          )}
        </div>
      </div>
    </ApolloProvider>
  );
};

export default App;
