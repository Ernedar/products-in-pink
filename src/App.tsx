import React, {useState} from 'react';

import TestPage from './components/TestPage/TestPage';
import SearchResultWithCarousel from './components/SearchResultWithCarousel';

function App() {

	const [testContentOn, setTestContentOn] = useState(false);

  return (
    <div className="App">
      <SearchResultWithCarousel />
      <footer className='footer'>
        <button className='btn btn-md btn-wide btn-secondary' onClick={() => setTestContentOn(!testContentOn)}> Switch Test Content {testContentOn === true ? "on" : "off"} </button>
      </footer>
      {testContentOn && <TestPage />}
    </div>
  );
}

export default App;
