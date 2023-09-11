import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Header onSignOut={() => {}} />
      <Outlet />
    </>
  );
};

export default Root;
