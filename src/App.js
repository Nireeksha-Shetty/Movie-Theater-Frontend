// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/Components/main/Main';
import Delete from '../src/Components/delete/Delete';

import Emailver from './Components/emailVerification/EmailVer';
import LogIn from './Components/logIn/LogIn';
import Reset from './Components/emailVerification/Reset';
import SignUpAdmin from '../src/Components/signUp/SignUpAdmin';
import './Components/styleslogin/entire.css';
import Settings from './Components/settingslogin/Settings';
import LandingPage from '../src/Components/landingPage/LandingPage';
import SignUpUser from './Components/signUp/SignUpUser';
import RegisteredSuccess from '../src/Components/regeistration/RegisteredSuccess';
import RegisteredFailed from '../src/Components/regeistration/RegisteredFailed';

import Adminschedule from '../src/Components/AdminSchedule/Adminschedule';
import AdminView from '../src/Components/AdminSchedule/AdminView';

import UserSide_view from '../src/Components/UserSide/UserSide_view';
import './Components/Sch_Styles/UserSide_View.css';
import UserSideMovieView from './Components/UserSide/UserSideMovieView';

// import ViewSeats from '../src/pages/ViewSeats';
// import ViewTicket from '../src/pages/ViewTicket';
// import ViewConfirmBookingDetails from '../src/pages/ViewConfirmBookingDetails';
// import AdminFilterViewAllTicket from '../src/pages/AdminFilterViewAllTicket';
// import UserMenu from '../src/Components/food-userBody/user-menu';
// import AdminMenu from '../src/Components/food-adminbody/admin-menu';
// import Provider from '../src/Components/sharedSeats/Provider';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/delete" element={<Delete />} /> 
            {/* <Route exact path="/*" element={<PageNotFound/>}  /> */}
 
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<SignUpAdmin />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/forgetpassword' element={<Emailver />} />
            <Route path='/resetpassword' element={<Reset />} />
            <Route path='/adminlandingpage' element={<LandingPage />} />
            <Route path='/registerUser' element={<SignUpUser />} />
            <Route path='/registerAdminSuccess' element={<RegisteredSuccess />} />
            <Route path='/registerAdminFailed' element={<RegisteredFailed />} />

            
          <Route exact path='/adminSchedule' element={<Adminschedule />}></Route>
          <Route exact path='/adminview' element={<AdminView />}></Route>
          <Route exact path="/UserSide_view" element={<UserSide_view/>}/>

          <Route exact path="/UserSideMovieView" element={<UserSideMovieView/>}/>


          {/* <Route exact path="/ViewSeats" element={<ViewSeats />} />
        <Route exact path="/ViewTicket" element={<ViewTicket />} />
        <Route
          exact
          path="/ViewConfirmBookingDetails"
          element={<ViewConfirmBookingDetails />}
        />
        <Route
          exact
          path="/AdminFilterViewAllTicket"
          element={<AdminFilterViewAllTicket />}
        />
        <Route path="/Usermenu" element={<UserMenu />} />
        <Route path="/admin" element={<AdminMenu />} />
        <Route path="/theater" element={<Provider user={"ADMIN"} />} /> */}
          




          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;