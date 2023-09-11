import { useContext } from 'react';
import { UserContextType, UserContext } from './UserContext';

const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default useUser;
