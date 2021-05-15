import React, { useEffect } from 'react';
import { GMap } from '../lib';
import styleArray from './styleArray';

const getApiKey = () => `${import.meta.env.VITE_API_KEY}`;
const EIFFEL_TOWER = { lat: 48.8619, lng: 2.2945 };
const BIG_BEN = { lat: 51.5021, lng: -0.1242 };
const COLISEUM = { lat: 41.8961, lng: 12.4879 };

const App = () => {
  useEffect(() => {
    console.log('App Is Running...');
  }, []);

  return (
    <div className="container">
      <GMap
        apiKey={getApiKey()}
        defaultCenter={EIFFEL_TOWER}
        defaultZoom={5}
        markers={[
          { ...EIFFEL_TOWER, onClick: () => console.log('Eiffel Tower') },
          { ...BIG_BEN, onClick: () => console.log('Big Ben') },
          { ...COLISEUM, onClick: () => console.log('Coliseum') }
        ]}
        styledMap={styleArray}
        enableUI
      />
    </div>
  );
};

export default App;
