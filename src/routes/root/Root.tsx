import React from 'react';
import MainLayout from '../+layout/MainLayout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Jobs from '../jobs/Jobs';
import LoginPage from '../login/LoginPage';
import { useAuth } from '../../core/contexts/authContext';
import PrivateRoute from './PrivateRoute';

const Root: React.FC = () => {
  const { user } = useAuth();

  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={user ? '/jobs' : '/login'} replace />}
        />
        <Route
          path="/jobs/new"
          element={
            <PrivateRoute component={Jobs} props={{ openEditModal: true }} />
          }
        />
        <Route path="/jobs" element={<PrivateRoute component={Jobs} />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/jobs" /> : <LoginPage />}
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/jobs" /> : <LoginPage />}
        />
      </Routes>
    </MainLayout>
  );
};

export default Root;
