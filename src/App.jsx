// import './App.css'
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watchpage from "./Components/Watchpage";
import SideSearchPage from "./Components/SideSearchPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "SideSearchPage",
        element:<SideSearchPage/>
      }
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={Store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;

/* UI Design (Low-Level Design) 
-Head
  Hamburger Button
  logo
  Search bar & Button
  User Icon
-Body
  Sidebar
    Menu Items
  MainContainer
    Buttons List
    VideoContainer
      VideoCard


*/
