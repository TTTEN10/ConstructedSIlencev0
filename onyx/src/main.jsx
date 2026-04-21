import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import ErrorBoundary from '@/ErrorBoundary.jsx'
import '@/index.css'

// #region agent log
const __agentLog = (hypothesisId, location, message, data = {}) => {
  fetch('http://127.0.0.1:7877/ingest/e57a92b3-a59f-4bfc-aa61-c17f7566fe39', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': 'e2a24c' },
    body: JSON.stringify({
      sessionId: 'e2a24c',
      runId: 'pre',
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {})
}
__agentLog('H1', 'main.jsx:1', 'main module start', { href: window.location.href })
window.addEventListener('error', (ev) => {
  __agentLog('H2', 'window:error', 'global error', {
    message: ev?.message,
    filename: ev?.filename,
    lineno: ev?.lineno,
    colno: ev?.colno,
  })
})
window.addEventListener('unhandledrejection', (ev) => {
  __agentLog('H2', 'window:unhandledrejection', 'unhandled rejection', {
    reason: ev?.reason instanceof Error ? ev.reason.message : String(ev?.reason),
  })
})
// #endregion

// #region agent log
const rootEl = document.getElementById('root')
__agentLog('H1', 'main.jsx:root', 'root element lookup', { found: Boolean(rootEl) })
// #endregion

try {
  // #region agent log
  __agentLog('H2', 'main.jsx:render', 'before createRoot.render', {})
  // #endregion
  ReactDOM.createRoot(rootEl).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
  // #region agent log
  __agentLog('H2', 'main.jsx:render', 'after createRoot.render (sync)', {})
  // #endregion
} catch (e) {
  // #region agent log
  __agentLog('H2', 'main.jsx:render', 'createRoot.render threw', {
    name: e?.name,
    message: e?.message,
  })
  // #endregion
  throw e
}
