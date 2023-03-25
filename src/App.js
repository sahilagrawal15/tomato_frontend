import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeleteUserPage from './pages/DeleteUserPage';
import FindUserByEmailPage from './pages/FindUserByEmailPage';
import RegistrationPage from './pages/RegistrationPage';
import UpdateUserPage from './pages/UpdateUserPage';
import UsersListPage from './pages/UsersListPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/delete" element={<DeleteUserPage />} />
          <Route path="/find" element={<FindUserByEmailPage />} />
          <Route path="/update" element={<UpdateUserPage />} />
          <Route path="/list" element={<UsersListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
