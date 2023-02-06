import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App';
import AcademicLogin from './auth/academicLogin';
import ForgetPassword from './auth/forgetPassword';
import HECLogin from './auth/hecLogin';
import IndustrialLogin from './auth/industrialLogin';
import OrganizationInformation from './auth/organizationInformation';

import SignUp from './auth/signUp';
import UserInformation from './auth/userInformation';
import PageNotFound from './components/common/pageNotFound';
import NewUser from './dashboard/dashboardPages/adduser';
import AccessUserList from './dashboard/dashboardPages/adminuseraccess';
import MyPosts from './dashboard/dashboardPages/myPosts/myPosts';
import UserProfile from './dashboard/dashboardPages/profile';
import ViewOwnProfile from './dashboard/dashboardPages/profileView/viewOwnProfile';
import ViewUserOwnProfile from './dashboard/dashboardPages/profileView/viewUserOwnProfile';
import RecoverPassword from './dashboard/dashboardPages/security';
import UploadOpportunities from './dashboard/dashboardPages/uploadOpportunities/opportunies';
import UploadIdeas from './dashboard/dashboardPages/uploadProject.jsx/idea';
import Dashboard from './dashboard/index';
import Index from './layout';
import ActivationEmail from './pages/ActivateEmail/ActivationEmail';
const Routing = () => {
  return (
    
   
  <BrowserRouter>
   <Routes>
   <Route path="/" element={<App />}>
      <Route index element={<Index />} />
      <Route path="/" element={<Index />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/account/accountverified" element={<ActivationEmail />} />

      <Route path="/login/hec" element={<HECLogin />} />
      <Route path="/login/academic" element={<AcademicLogin />} />
      <Route path="/login/industrial" element={<IndustrialLogin />} />
      {/* <Route path="/dashboard" element={<IndustrialLogin />} /> */}
      <Route path="/forget_password" element={<ForgetPassword />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/account/organizationinformation" element={<OrganizationInformation />} />
      <Route path="/account/userinformation" element={<UserInformation />} />

      <Route path="/dashboard" element={<Dashboard />}>
      
          {/* <Route index element={<Dashboard />} /> */}
          <Route path="recover_password" element={<RecoverPassword />} />
          <Route path="academicprofileview" element={< ViewOwnProfile/>} />
          <Route path="userprofileview" element={< ViewUserOwnProfile/>} />
          <Route path="opportunities/post" element={< UploadOpportunities/>} />
          <Route path="projectidea/post" element={< UploadIdeas/>} />
          <Route path="myposts" element={< MyPosts/>} />

          <Route path="user/add" element={<NewUser />} />
          <Route path="profile/view" element={<UserProfile />} />
          <Route path="userlist" element={<AccessUserList />} />

                 
          <Route path="*" element={<PageNotFound />} />
      </Route>
      </Route>
    </Routes>
   
    </BrowserRouter>
 
  );
}

export default Routing;