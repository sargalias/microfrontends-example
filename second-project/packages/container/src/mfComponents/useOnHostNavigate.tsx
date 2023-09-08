import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type OnHostNavigate = (pathname: string) => void;

type UseOnHostNavigateReturnValue = [
  OnHostNavigate | null,
  React.Dispatch<React.SetStateAction<OnHostNavigate | null>>,
];

const useOnHostNavigate = (): UseOnHostNavigateReturnValue => {
  const location = useLocation();

  const [onHostNavigate, setOnHostNavigate] = useState<OnHostNavigate | null>(
    null,
  );

  useEffect(() => {
    if (onHostNavigate) {
      onHostNavigate(location.pathname);
    }
  }, [onHostNavigate, location]);

  return [onHostNavigate, setOnHostNavigate];
};

export default useOnHostNavigate;
