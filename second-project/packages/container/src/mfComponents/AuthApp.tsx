import { useEffect, useRef } from 'react';
import { mount } from 'authApp/index';
import useOnHostNavigate from './useOnHostNavigate';
import useOnRemoteNavigate from './useOnRemoteNavigate';
import { useLocation } from 'react-router-dom';

const AuthApp = () => {
  const ref = useRef(null);
  const location = useLocation();

  const [, setOnHostNavigate] = useOnHostNavigate();
  const onRemoteNavigate = useOnRemoteNavigate();

  useEffect(() => {
    if (ref.current) {
      const { onHostNavigate } = mount(ref.current, {
        onRemoteNavigate,
        initialPath: location.pathname,
      });
      setOnHostNavigate(() => onHostNavigate);
    }
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
