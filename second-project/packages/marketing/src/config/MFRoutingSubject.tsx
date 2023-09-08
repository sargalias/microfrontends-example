import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type OnRemoteNavigate = (pathname: string) => void;
export type HostNavigateObserverSubscribe = (pathname: string) => void;

export type MFRoutingProps = {
  onRemoteNavigate: OnRemoteNavigate;
  hostNavigateObserverSubscribe: HostNavigateObserverSubscribe;
};

const skipFirst = (fn: any) => {
  let isFirst = true;
  const execute = (...args) => {
    if (isFirst) {
      isFirst = false;
      return;
    }
    return fn(...args);
  };
  return execute;
};

const MFRoutingSubject = ({
  onRemoteNavigate,
  hostNavigateObserverSubscribe,
}: MFRoutingProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationPathnameRef = useRef(location.pathname);
  locationPathnameRef.current = location.pathname;
  const [skipFirstOnRemoteNavigate] = useState(() =>
    skipFirst(onRemoteNavigate),
  );
  // const navigate = useNavigate();

  useEffect(() => {
    skipFirstOnRemoteNavigate(location.pathname);
  }, [location, skipFirstOnRemoteNavigate]);

  const customNavigate = (nextPathname: string) => {
    console.log(`customNavigate to ${nextPathname}`);
    if (locationPathnameRef.current !== nextPathname) {
      navigate(nextPathname);
    }
  };

  useEffect(() => {
    console.log('subscribing');
    hostNavigateObserverSubscribe(customNavigate);
  }, []);

  // const handleHostNavigate = (nextPathname: string) => {
  //   if (nextPathname !== location.pathname) {
  //     navigate(nextPathname);
  //   }
  // };

  // useEffect(() => {
  //   // I need to register a function with onHostNavigate
  // }, []);

  return null;
};

export default MFRoutingSubject;
