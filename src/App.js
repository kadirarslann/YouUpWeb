import LeftMenu  from './components/LeftMenu'
import MainMenu from './components/MainMenu';
import { ContextProvider } from './context/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfilePage from './components/profilePage';
import Readings from './components/readings';
import Statistics from './components/statistics';
import Listenings from './components/listenings';

function App() {
  return (
    <ContextProvider>
      <Router>
      <div className="App">
        <LeftMenu></LeftMenu>

        <>
        
        </>
        <div className="main">
        
            <Routes>
              <Route path="/"  element={<MainMenu></MainMenu>}  />
              <Route path="/profile"  element={<ProfilePage></ProfilePage>}  />
              <Route path="/readings"  element={<Readings></Readings>}  />
              <Route path="/statistics"  element={<Statistics></Statistics>}  />
              <Route path="/listenings"  element={<Listenings></Listenings>}  />
            </Routes>
          
        
        </div>
       
      </div>
      </Router>
      
   
     
    </ContextProvider>
  
  );
}

export default App;
