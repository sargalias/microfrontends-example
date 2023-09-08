import { mount } from 'marketing/Marketing';
import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type OnHostNavigate = (pathname: string) => void;

const Marketing = () => {
  const ref = useRef(null);
  const location = useLocation();
  console.log('container location');
  console.log(location);
  const navigate = useNavigate();
  const [onHostNavigate, setOnHostNavigate] = useState<OnHostNavigate | null>(
    null,
  );
  const locationPathnameRef = useRef(location.pathname);
  locationPathnameRef.current = location.pathname;

  const onRemoteNavigate = (nextPathname: string) => {
    if (locationPathnameRef.current !== nextPathname) {
      navigate(nextPathname);
    }
  };

  useEffect(() => {
    if (ref.current) {
      const { onHostNavigate } = mount(ref.current, { onRemoteNavigate });
      setOnHostNavigate(() => onHostNavigate);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (onHostNavigate) {
      onHostNavigate(location.pathname);
    }
  }, [location, onHostNavigate]);

  return <div ref={ref}></div>;
};

export default Marketing;
