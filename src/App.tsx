import './index.css'
import ExternalLayout from './layouts/external-layout';
import externalRoute from './routes/external'
import dashboardRoute from './routes/dashboard';
import DashboardLayout from './layouts/dashboard-layout';
import { Routes, Route } from 'react-router-dom';

function App() {

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
            <Route path={`/${i.path}`} element={i.element} />
          </Route>
        ))}

      </Routes>

    </>
  )
}

export default App
