import './App.scss';
import SlideBar from './components/SlideBar';
import Header from './pages/User/Theme/Header/Header';
import { Outlet } from "react-router-dom";



const App = () => {

    return (
        <div className="app-container">
            <div className='header-container'>
                <Header />
            </div>
            <div className='content'>
                <div className='slidebar-container'>
                    <SlideBar />
                </div>
                <div className='main-container'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
