import './App.css';
import './assets/css/main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import AssetDetailPage from './pages/assest';
import TransactionPage from './pages/transaction';
import "apexcharts/dist/apexcharts.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        {/* <Route path='/' element={<Layout />}> */}
        <Route path='/' element={<Dashboard/>} />
        <Route path='/assest' element={<AssetDetailPage/>} />
        <Route path='/transaction' element={<TransactionPage/>} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
