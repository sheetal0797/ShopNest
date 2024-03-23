import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <div>
        <Navigation/>
      </div>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
