import MainLayout from '../+layout/MainLayout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Jobs from '../jobs/Jobs';

const Root = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" replace />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </MainLayout>
  );
};

export default Root;
