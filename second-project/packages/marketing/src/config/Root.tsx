import { Outlet } from 'react-router-dom';
import MFRoutingSubject, { MFRoutingProps } from './MFRoutingSubject';

export type RootProps = MFRoutingProps;

const Root = ({
  onRemoteNavigate,
  hostNavigateObserverSubscribe,
}: RootProps) => {
  return (
    <>
      <MFRoutingSubject
        onRemoteNavigate={onRemoteNavigate}
        hostNavigateObserverSubscribe={hostNavigateObserverSubscribe}
      />
      <Outlet />
    </>
  );
};

export default Root;
