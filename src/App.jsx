import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import Protected from './components/Protected';

function App() {
  
  return (
    
    <div className="bg-[#222831] w-[100vw] h-[100vh] flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected>  <Dashboard />  </Protected> } />
          <Route path="/send" element={<Protected> <SendMoney /> </Protected> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
