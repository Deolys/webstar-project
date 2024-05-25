import React from 'react';
import { Routes, Route } from'react-router-dom';

import { URLs } from './__data__/urls';
import Main from './pages/main/main';
import AdminPanel from './pages/admin-panel/admin';
import Card from './pages/worker-card/worker-card';
import Authentication from './pages/auth/auth';
import { ErrorBoundary } from './components/error-boundary';

export const PageRoutes = () => (
  <ErrorBoundary>
    <Routes>
      <Route path={URLs.baseUrl} element={<Main />} />
      <Route path={URLs.ui.admin} element={<AdminPanel />} />
      <Route path={URLs.ui.login} element={< Authentication/>} />
      <Route path={URLs.ui.recover} element={< Authentication/>} />
      <Route path={URLs.ui.register} element={< Authentication/>} />
      <Route path={URLs.ui.cardDetail.url} element={<Card />} />
      <Route path={URLs.ui.cardDetailEdit.url} element={<Card />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </ErrorBoundary>
)
