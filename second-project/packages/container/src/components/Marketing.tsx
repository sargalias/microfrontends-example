import { mount } from 'marketing/Marketing';
import { useRef, useEffect } from 'react';

const Marketing = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  });

  return <div ref={ref}></div>;
};

export default Marketing;
