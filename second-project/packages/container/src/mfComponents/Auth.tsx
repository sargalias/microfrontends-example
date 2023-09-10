import { useEffect, useRef } from 'react';
import { mount } from 'auth/auth';

console.log(mount);

const Auth = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log('in useEffect');
    if (ref.current) {
      mount(ref.current, { onRemoteNavigate: () => {} });
    }
  }, []);

  return <div ref={ref}>AUTH from container</div>;
};

export default Auth;

// export default () => null;
