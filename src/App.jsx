import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import Cities from './pages/Cities'
import Details from "./pages/Details";
import StandartLayout from "./layaouts/StandartLayout";
import SingUp from "./pages/SingUp";
import SingIn from "./pages/SingIn";

const router = createBrowserRouter([
  {element: <StandartLayout></StandartLayout>,
    children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/cities', element: <Cities></Cities>},
      {path: '/details/:id', element: <Details></Details>},
      {path: '/singup', element: <SingUp></SingUp>},
      {path: '/singin', element: <SingIn></SingIn>}
    ]
  }
])
function App() {
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
