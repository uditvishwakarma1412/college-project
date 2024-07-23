import Homepage from './components/homepage.js';
import Login from './components/login.js';
import Register from './components/register.js';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Dashboard from './dashboard.js';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/login",
      element:<Login/>
    },
  ])


  return (
    <>
      <RouterProvider router={router}/>
      {/* <Mainpage/> */}
    </>  
  );
}

export default App;
