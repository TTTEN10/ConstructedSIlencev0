import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { queryClientInstance } from "@/lib/query-client";
import PageNotFound from "@/lib/PageNotFound";
import { Toaster } from "@/components/UI/toaster";

import Home from "@/components/pages/Home";
import Collections from "@/components/pages/Collections";
import ProductDetail from "@/components/pages/ProductDetail";
import About from "@/components/pages/About";
import Cart from "@/components/pages/Cart";
import UIShowcase from "@/components/pages/UIShowcase";
import CheckoutSuccess from "@/components/pages/CheckoutSuccess";
import ReturnPolicy from "@/components/pages/ReturnPolicy";

function App() {
  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7877/ingest/e57a92b3-a59f-4bfc-aa61-c17f7566fe39', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'e2a24c' },
      body: JSON.stringify({
        sessionId: 'e2a24c',
        runId: 'pre',
        hypothesisId: 'H3',
        location: 'App.jsx:useEffect',
        message: 'App mounted',
        data: { pathname: window.location.pathname, href: window.location.href },
        timestamp: Date.now(),
      }),
    }).catch(() => {})
  }, [])
  // #endregion
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/about" element={<About />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/ui" element={<UIShowcase />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;