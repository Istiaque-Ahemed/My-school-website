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
import PostNotices from './Component/PostNotices/PostNotices';
import Notices from './Component/Notices/Notices';
import Firstpage from './Component/FirstPage/Firstpage';
import StudentSite from './Component/StudentsSite/StudentSite';
import AdmisionInfo from './Component/admisionInfo/AdmisionInfo';


function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Navber></Navber> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Header />, <Navber />, <Slider />, <Notices />, <Firstpage />, <StudentSite />, <AdmisionInfo />]}></Route>
          <Route path="/studentSite" element={[<Header />, <Navber />, <StudentSite />]}></Route>
          <Route path="/admisonInfo" element={[<Header />, <Navber />, <AdmisionInfo />]}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
