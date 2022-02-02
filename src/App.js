import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Navber from './Component/Navber/Navber';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Slider from './Component/Carousel/Slider';


function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Navber></Navber> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Header />, <Navber />, <Slider />]}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
