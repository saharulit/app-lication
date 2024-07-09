import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../core/contexts/authContext';

interface PrivateRouteProps {
  component: React.ComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<string, any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  props,
}) => {
  const { user } = useAuth();

  return user ? <Component {...props} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
