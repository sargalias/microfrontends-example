import { mount } from 'marketingApp/index';
import { useRef, useEffect } from 'react';
import useOnRemoteNavigate from './useOnRemoteNavigate';
import useOnHostNavigate from './useOnHostNavigate';
import { useLocation } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef(null);
  const location = useLocation();

  const [, setOnHostNavigate] = useOnHostNavigate();
  const onRemoteNavigate = useOnRemoteNavigate();

  useEffect(() => {
    if (ref.current) {
      const { onHostNavigate } = mount(ref.current!, {
        onRemoteNavigate,
        initialPath: location.pathname,
      });
      setOnHostNavigate(() => onHostNavigate);
    }
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
