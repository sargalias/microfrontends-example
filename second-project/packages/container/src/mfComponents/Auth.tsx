import { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthApp';

const Auth = () => {
  const ref = useRef(null);

  console.log(mount);

  // useEffect(() => {
  // mount(ref.current);
  // }, []);

  return <div ref={ref}>AUTH</div>;
};

export default Auth;
