import './App.css';
import StyledGlobal from './styledGlobal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Units from './components/Units/Units'
import Search from './pages/buscar';
import signIn from './components/signIn/signIn';
import person from './pages/Home/principal';
import searchUnits from './components/searchUnits/searchUnits';

function App() {
  return (
    <Router>
      <StyledGlobal/>
      <Routes>
        {/* <Search></Search> */}
        <Route path="/" Component={Main} />
        <Route path="search" Component={Search} />
        <Route path="units" Component={Units} />
        <Route path='signIn' Component={signIn} />
        <Route path='person' Component={person} />
        <Route path='searchUnits' Component={searchUnits} />
      </Routes>
    </Router>
  );
}

export default App;
