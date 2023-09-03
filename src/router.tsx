import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Intro from './components/pages/Intro';
import Profile from './components/pages/Profile';
import ProfileCreation from './components/pages/ProfileCreation';

const Router = () => {
  const routerData = [
    {
      path: '/',
      element: <Intro />,
    },
    {
      path: '/profile/:id',
      element: <Profile />,
    },
    {
      path: '/create',
      element: <ProfileCreation />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data) => (
          <Route key={data.path} path="/" element={<Layout />}>
            {<Route path={data.path} element={data.element} />}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
