import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Shell } from './layouts/Shell';
import { Login } from './pages/Login';
import { Overview } from './pages/Overview';
import { Sites } from './pages/Sites';
import { Leads } from './pages/Leads';
import { Uptime } from './pages/Uptime';
import { SEO } from './pages/SEO';
import { Revenue } from './pages/Revenue';
import { Settings } from './pages/Settings';
import { Admin } from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Shell />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/sites" element={<Sites />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/uptime" element={<Uptime />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
