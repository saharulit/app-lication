import MainLayout from '../+layout/MainLayout1';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Jobs from '../jobs/Jobs';

const Root = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <MainLayout>
      <div>pathName- {pathname}</div>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" replace />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </MainLayout>
  );
};

export default Root;
