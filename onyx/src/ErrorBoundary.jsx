import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // #region agent log
    fetch("http://127.0.0.1:7877/ingest/e57a92b3-a59f-4bfc-aa61-c17f7566fe39", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "e2a24c" },
      body: JSON.stringify({
        sessionId: "e2a24c",
        runId: "post-fix",
        hypothesisId: "H2",
        location: "ErrorBoundary.jsx:componentDidCatch",
        message: "React render error caught",
        data: {
          name: error?.name,
          message: error?.message,
          componentStack: info?.componentStack?.slice?.(0, 2000) ?? String(info?.componentStack),
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            padding: 24,
            background: "#0a0a0a",
            color: "#fff",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            whiteSpace: "pre-wrap",
          }}
        >
          <div style={{ letterSpacing: "0.18em", fontSize: 12, color: "#a3a3a3" }}>CONSTRUCTED SILENCE</div>
          <h1 style={{ marginTop: 16, fontSize: 22 }}>Runtime error (not a blank screen)</h1>
          <p style={{ marginTop: 12, color: "#d4d4d4" }}>{String(this.state.error?.message || this.state.error)}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
