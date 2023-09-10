import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <>
      <Header signedIn={false} onSignOut={() => {}} />
      <Outlet />
    </>
  );
};

export default Root;
