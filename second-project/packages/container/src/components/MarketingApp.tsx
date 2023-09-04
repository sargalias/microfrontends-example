import { mount } from 'marketingApp/MarketingApp';
import { useRef, useEffect } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  });

  return <div ref={ref}></div>;
};

export default MarketingApp;
