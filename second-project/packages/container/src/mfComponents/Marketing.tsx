import { mount } from 'marketing/Marketing';
import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type OnHostNavigate = (pathname: string) => void;

const Marketing = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [onHostNavigate, setOnHostNavigate] = useState<OnHostNavigate | null>(
    null,
  );
  const [onRemoteNavigate] = useState(() => (nextPathname: string) => {
    if (locationPathnameRef.current !== nextPathname) {
      navigate(nextPathname);
    }
  });
  const locationPathnameRef = useRef(location.pathname);
  locationPathnameRef.current = location.pathname;

  useEffect(() => {
    if (ref.current) {
      const { onHostNavigate } = mount(ref.current!, { onRemoteNavigate });
      setOnHostNavigate(() => onHostNavigate);
    }
  }, []);

  useEffect(() => {
    if (onHostNavigate) {
      onHostNavigate(location.pathname);
    }
  }, [onHostNavigate, location]);

  return <div ref={ref}></div>;
};

export default Marketing;
