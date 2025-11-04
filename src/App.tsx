import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Leads from './pages/Leads';
import Appointments from './pages/Appointments';
import Quotations from './pages/Quotations';
import Finance from './pages/Finance';
import Attendance from './pages/Attendance';
import Documents from './pages/Documents';
import Analytics from './pages/Analytics';
import SmartClientIntelligence from './pages/SmartClientIntelligence';
import PropertyLifecycle from './pages/PropertyLifecycle';
import LegalCompliance from './pages/LegalCompliance';
import ClientExperience from './pages/ClientExperience';
import SalesIntelligence from './pages/SalesIntelligence';
import PostHandover from './pages/PostHandover';
import AIAssistant from './pages/AIAssistant';
import './index.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter basename="/Real-Estate-IBMS">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/quotations" element={<Quotations />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/smart-intelligence" element={<SmartClientIntelligence />} />
            <Route path="/property-lifecycle" element={<PropertyLifecycle />} />
            <Route path="/legal-compliance" element={<LegalCompliance />} />
            <Route path="/client-portal" element={<ClientExperience />} />
            <Route path="/sales-intelligence" element={<SalesIntelligence />} />
            <Route path="/post-handover" element={<PostHandover />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
