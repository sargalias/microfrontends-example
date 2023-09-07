import { mount } from 'marketing/Marketing';
import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Marketing = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const onNavigate = (nextPathname: string) => {
    if (location.pathname !== nextPathname) {
      navigate(nextPathname);
    }
  };

  useEffect(() => {
    if (ref.current) {
      mount(ref.current, { onNavigate });
    }
  });

  return <div ref={ref}></div>;
};

export default Marketing;
