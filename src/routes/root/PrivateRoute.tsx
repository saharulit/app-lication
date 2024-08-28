import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/services/store';

interface PrivateRouteProps {
  component: React.ComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: Record<string, any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  props,
}) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return user ? <Component {...props} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
