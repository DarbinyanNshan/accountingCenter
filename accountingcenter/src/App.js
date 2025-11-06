import './App.css';
import { Router } from './layouts';
import "./i18n";
import { useEffect, useState } from 'react';
import LoadingPage from './components/loading';


function App() {
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='App' >
<div className='App' >
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          <Router />
          {/* <BackToTopButton /> */}
        </div>
      )}
    </div>    </div>
  );
}

export default App;
