
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './pages/Login/login';
import SignupPage from './pages/Signup/signup';
import HomePage from './pages/Home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/">
            <LoginPage />

          </Route>
          <Route path="/signup">
            <SignupPage />

          </Route>
          <Route path="/home">
            <HomePage />

          </Route>
          
        </div>
      </Router>

    </div>
  );
}

export default App;
