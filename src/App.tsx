import './index.css'
import ExternalLayout from './layouts/external-layout';
import externalRoute from './routes/external'

import dashboardRoute from './routes/dashboard';
import DashboardLayout from './layouts/dashboard-layout';
import { Routes, Route} from 'react-router-dom';
import "aos/dist/aos.css"
import Aos from "aos"
import Login from './pages/external/authForm/login';
import LoginLayout from './layouts/login-layout';
import Register from './pages/external/authForm/register';

import AuthRoute from './pages/external/authForm/ProtectedRoute';

function App() {
  Aos.init({
    duration: 3000,
    offset: 100,
  })

  

  return (
    <>

      <Routes>

        {externalRoute?.map((i, idx) => (
          <Route key={`${idx}${i?.path}`} element={<ExternalLayout />}>
            <Route path={`/${i.path}`} element={i.element} />
          </Route>
        ))}


    
          {dashboardRoute?.map((i, idx) => (
            <Route key={`${idx}${i?.path}`} element={<DashboardLayout />}>
              <Route path={`/${i.path}`} element=
              {
                <AuthRoute>
                     {i.element}
                </AuthRoute>
                } />
            </Route>
          ))}

   
        <Route element={<LoginLayout />}>
          <Route path={`/login`} element={<Login />} />
          <Route path={`/register`} element={<Register />} />

        </Route>
        {/* <ProtectedRoute path="/home" component={Home } /> */}
      </Routes>

    </>
  )
}

export default App
