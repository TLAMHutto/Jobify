import Landing from './pages/Landing';
import Error from './pages/Error';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/> }/>
        <Route path="/*" element={<Error/> }/>
        <Route path="/register" element={<Register/> }/>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
