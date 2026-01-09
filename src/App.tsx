import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { AppLayout } from "@/components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/app/DashboardPage";
import LeadsPage from "./pages/app/LeadsPage";
import TicketsPage from "./pages/app/TicketsPage";
import WorkflowsPage from "./pages/app/WorkflowsPage";
import WhatsAppBotPage from "./pages/app/WhatsAppBotPage";
import NotFound from "./pages/NotFound";
import UseCasesPage from "./pages/UseCasesPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsConditionsPage from "./pages/terms-conditions";
import SecurityPage from "./pages/security";
import GDPRPage from "./pages/gdpr";
import ScheduleDemo from "./pages/ScheduleDemo";
import Blobpage from "./pages/blog";
import Documentation from "./pages/Documentation";
import APIDocs from "./pages/ApiReference";
import HelpCenter from "./pages/HelpCenter";
import StatusPage from "./pages/Status";
import { useEffect } from "react";

function AboutRedirect() {
  useEffect(() => {
    window.location.href = "https://proeffico.com/about/";
  }, []);

  return null;
}
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/about" element={<AboutRedirect />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsConditionsPage />} />
            <Route path="/security" element={<SecurityPage />} />
            {/* <Route path="/gdpr" element={<GDPRPage />} /> */}
            <Route path="/demo" element={<ScheduleDemo />} />
            <Route path="/blog" element={<Blobpage />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/api" element={<APIDocs />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/status" element={<StatusPage />} />
          </Route>

          {/* Auth Routes (no layout) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* CRM Application Routes */}
          <Route path="/app" element={<AppLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="leads" element={<LeadsPage />} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="accounts" element={<DashboardPage />} />
            <Route path="workflows" element={<WorkflowsPage />} />
            <Route path="whatsapp-bot" element={<WhatsAppBotPage />} />
            <Route path="products" element={<DashboardPage />} />
            <Route path="users" element={<DashboardPage />} />
            <Route path="settings" element={<DashboardPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
