import './index.css'
import ExternalLayout from './layouts/external-layout';
import externalRoute from './routes/external'
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
 
     <Routes>
        {externalRoute?.map((i, idx) => (
          <Route key={`${idx}${i?.path}`} element={<ExternalLayout/>}>
            <Route path={`/${i.path}`} element={i.element}/>
          </Route>
        ))}
     </Routes>
     
    </>
  )
}

export default App
