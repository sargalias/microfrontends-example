import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useOnRemoteNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const locationPathnameRef = useRef(location.pathname);
  locationPathnameRef.current = location.pathname;

  const [onRemoteNavigate] = useState(() => (nextPathname: string) => {
    if (locationPathnameRef.current !== nextPathname) {
      navigate(nextPathname);
    }
  });

  return onRemoteNavigate;
};

export default useOnRemoteNavigate;
