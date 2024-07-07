import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../core/contexts/authContext';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const { user } = useAuth();

  return user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
