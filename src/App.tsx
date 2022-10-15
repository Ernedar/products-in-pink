import React, { useState, useEffect } from 'react';

import TestPage from './components/TestPage/TestPage';
import SearchResultWithCarousel from './components/SearchResultWithCarousel';

function App() {

	const [testContentOn, setTestContentOn] = useState<boolean>(false);
  const [changeColorScheme, setChangeColorScheme] = useState<boolean>(false);

  useEffect(() => {
    const htmlElementAddress = document.documentElement;

    if(changeColorScheme) {
      htmlElementAddress.classList.add('normal');
    } else {
      htmlElementAddress.classList.remove('normal');
    }
  },[changeColorScheme]);

  return (
    <div className="App">
      <SearchResultWithCarousel />
      <footer className='footer'>
        <button className='btn btn-md btn-wide btn-secondary mr-5' onClick={() => setChangeColorScheme(!changeColorScheme)}>Switch Color Scheme</button>
        <button className='btn btn-md btn-wide btn-secondary' onClick={() => setTestContentOn(!testContentOn)}> Switch Test Content {testContentOn === true ? "on" : "off"} </button>
      </footer>
      {testContentOn && <TestPage />}
    </div>
  );
}

export default App;
