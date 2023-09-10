import { mount } from 'marketingApp/index';
import { useRef, useEffect } from 'react';
import useOnRemoteNavigate from './useOnRemoteNavigate';
import useOnHostNavigate from './useOnHostNavigate';

const Marketing = () => {
  const ref = useRef(null);

  const [, setOnHostNavigate] = useOnHostNavigate();
  const onRemoteNavigate = useOnRemoteNavigate();

  useEffect(() => {
    if (ref.current) {
      const { onHostNavigate } = mount(ref.current!, { onRemoteNavigate });
      setOnHostNavigate(() => onHostNavigate);
    }
  }, []);

  return <div ref={ref}></div>;
};

export default Marketing;
