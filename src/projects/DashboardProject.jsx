import React, { useState } from "react";
import Icon from "../components/Icon.jsx";

const initialTransactions = [
  { id: "TX-9021", client: "Sarah Jenkins (Floral Atelier)", plan: "Business Website", amount: "₹30,000", status: "Completed", date: "Today, 14:20" },
  { id: "TX-9020", client: "Dr. Ananya Roy (Dental Clinic)", plan: "Booking System", amount: "₹45,000", status: "Completed", date: "Today, 11:05" },
  { id: "TX-9019", client: "Vikram Malhotra (Gourmet Bistro)", plan: "E-Commerce App", amount: "₹60,000", status: "Pending", date: "Yesterday, 19:40" },
  { id: "TX-9018", client: "Eleanor Vance (Art Studio)", plan: "Custom Portfolio", amount: "₹25,000", status: "Completed", date: "22 Sep 2026" },
  { id: "TX-9017", client: "FitPulse Gym & Wellness", plan: "Mobile App Starter", amount: "₹40,000", status: "Completed", date: "21 Sep 2026" },
  { id: "TX-9016", client: "Nexus Cloud Software", plan: "API Integration", amount: "₹18,500", status: "Processing", date: "20 Sep 2026" },
];

export default function DashboardProject() {
  const [period, setPeriod] = useState("30D");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [newInvoiceSuccess, setNewInvoiceSuccess] = useState(false);
  const [invoiceForm, setInvoiceForm] = useState({ client: "", amount: "", plan: "Starter Package" });

  const metricsData = {
    "Today": { revenue: "₹42,500", revTrend: "+8.4%", users: "328", userTrend: "+15%", conv: "5.1%", convTrend: "+0.4%" },
    "7D": { revenue: "₹285,000", revTrend: "+14.2%", users: "2,140", userTrend: "+22%", conv: "4.9%", convTrend: "+0.8%" },
    "30D": { revenue: "₹840,000", revTrend: "+18.2%", users: "8,940", userTrend: "+24.5%", conv: "4.85%", convTrend: "+0.6%" },
    "Year": { revenue: "₹4,250,000", revTrend: "+36.8%", users: "42,800", userTrend: "+45%", conv: "4.7%", convTrend: "+1.2%" },
  };

  const curr = metricsData[period] || metricsData["30D"];

  const filteredTx = initialTransactions.filter((tx) => {
    const matchesSearch =
      tx.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tx.plan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || tx.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateInvoice = (e) => {
    e.preventDefault();
    setNewInvoiceSuccess(true);
    setTimeout(() => {
      setNewInvoiceSuccess(false);
      setInvoiceModal(false);
      setInvoiceForm({ client: "", amount: "", plan: "Starter Package" });
    }, 2000);
  };

  return (
    <div className="sample-dashboard-app">
      {/* Dashboard Top Header */}
      <header className="dash-topbar">
        <div className="dash-brand">
          <div className="dash-logo-icon">📊</div>
          <div>
            <h3>VINEA ANALYTICS</h3>
            <span className="dash-sub">ENTERPRISE CRM & REVENUE MONITOR</span>
          </div>
        </div>

        <div className="dash-top-actions">
          <div className="dash-search-box">
            <input
              type="text"
              placeholder="Search clients, invoices or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="dash-period-toggle">
            {["Today", "7D", "30D", "Year"].map((p) => (
              <button
                key={p}
                type="button"
                className={`period-btn ${period === p ? "active" : ""}`}
                onClick={() => setPeriod(p)}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-primary btn-sm btn-new-invoice"
            onClick={() => setInvoiceModal(true)}
          >
            + Create Invoice
          </button>
        </div>
      </header>

      {/* Main Dashboard Layout */}
      <div className="dash-content-wrap">
        {/* Metric Cards Row */}
        <div className="dash-metrics-grid">
          <div className="dash-stat-card">
            <div className="stat-card-head">
              <span className="stat-card-title">Total Revenue ({period})</span>
              <span className="stat-card-icon">💰</span>
            </div>
            <div className="stat-card-body">
              <h2>{curr.revenue}</h2>
              <span className="stat-badge-trend up">{curr.revTrend} vs prev period</span>
            </div>
          </div>

          <div className="dash-stat-card">
            <div className="stat-card-head">
              <span className="stat-card-title">Active Clients & Users</span>
              <span className="stat-card-icon">👥</span>
            </div>
            <div className="stat-card-body">
              <h2>{curr.users}</h2>
              <span className="stat-badge-trend up">{curr.userTrend} growth</span>
            </div>
          </div>

          <div className="dash-stat-card">
            <div className="stat-card-head">
              <span className="stat-card-title">Conversion Rate</span>
              <span className="stat-card-icon">⚡</span>
            </div>
            <div className="stat-card-body">
              <h2>{curr.conv}</h2>
              <span className="stat-badge-trend up">{curr.convTrend} high intent</span>
            </div>
          </div>

          <div className="dash-stat-card">
            <div className="stat-card-head">
              <span className="stat-card-title">System Health</span>
              <span className="stat-card-icon">🛡️</span>
            </div>
            <div className="stat-card-body">
              <h2>99.98%</h2>
              <span className="stat-badge-trend optimal">All Systems Operational</span>
            </div>
          </div>
        </div>

        {/* Chart Card */}
        <div className="dash-card dash-chart-card">
          <div className="chart-card-header">
            <div>
              <h4>Revenue Trajectory & Pipeline Performance</h4>
              <p>Monthly recurring revenue breakdown with forecasting algorithm</p>
            </div>
            <span className="live-status-pill">
              <span className="live-pulse" /> Live Telemetry
            </span>
          </div>

          {/* Interactive SVG Chart */}
          <div className="dash-chart-svg-wrap">
            <svg width="100%" height="220" viewBox="0 0 800 220" preserveAspectRatio="none" fill="none">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5B5DF8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#5B5DF8" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="40" x2="800" y2="40" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="0" y1="90" x2="800" y2="90" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="0" y1="140" x2="800" y2="140" stroke="#F1F5F9" strokeWidth="1" />
              <line x1="0" y1="190" x2="800" y2="190" stroke="#E2E8F0" strokeWidth="1" />

              <path
                d="M0 160 C 120 140, 200 110, 320 120 C 440 130, 520 60, 640 45 C 720 35, 760 70, 800 30 L 800 190 L 0 190 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0 160 C 120 140, 200 110, 320 120 C 440 130, 520 60, 640 45 C 720 35, 760 70, 800 30"
                stroke="#5B5DF8"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="640" cy="45" r="6" fill="#5B5DF8" stroke="#FFFFFF" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="chart-legend-row">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
            <span>Current Month Peak (₹840,000)</span>
          </div>
        </div>

        {/* Transactions & Client Activity Table */}
        <div className="dash-card dash-table-card">
          <div className="table-card-header">
            <div>
              <h4>Recent Client Invoices & Deployments</h4>
              <p>Real-time log of projects, packages, and automated payment receipts</p>
            </div>
            <div className="table-status-filters">
              {["All", "Completed", "Pending", "Processing"].map((st) => (
                <button
                  key={st}
                  type="button"
                  className={`filter-chip ${statusFilter === st ? "active" : ""}`}
                  onClick={() => setStatusFilter(st)}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          <div className="dash-table-container">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Invoice ID</th>
                  <th>Client / Business Name</th>
                  <th>Package Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Timestamp</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTx.map((tx) => (
                  <tr key={tx.id}>
                    <td>
                      <span className="tx-id-badge">{tx.id}</span>
                    </td>
                    <td>
                      <strong>{tx.client}</strong>
                    </td>
                    <td>{tx.plan}</td>
                    <td>
                      <strong>{tx.amount}</strong>
                    </td>
                    <td>
                      <span className={`status-pill ${tx.status.toLowerCase()}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td>{tx.date}</td>
                    <td>
                      <button
                        type="button"
                        className="btn-table-action"
                        onClick={() => alert(`Viewing details for ${tx.id} - ${tx.client}`)}
                      >
                        Receipt ↗
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Invoice Modal */}
      {invoiceModal && (
        <div className="cart-backdrop" onClick={() => setInvoiceModal(false)}>
          <div className="invoice-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="btn-close-drawer"
              onClick={() => setInvoiceModal(false)}
            >
              ✕
            </button>
            <h3>Generate Custom Client Invoice</h3>
            <p className="inv-sub">Send automated quote and GST payment link to client.</p>

            {newInvoiceSuccess ? (
              <div className="invoice-success">
                <div className="receipt-check-circle">✓</div>
                <h4>Invoice Generated & Dispatched!</h4>
                <p>Client link has been activated with secure payment gateway.</p>
              </div>
            ) : (
              <form onSubmit={handleCreateInvoice} className="inv-form">
                <div className="input-group">
                  <label>Client Name / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sterling Architecture Ltd."
                    value={invoiceForm.client}
                    onChange={(e) => setInvoiceForm({ ...invoiceForm, client: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Service Package</label>
                  <select
                    value={invoiceForm.plan}
                    onChange={(e) => setInvoiceForm({ ...invoiceForm, plan: e.target.value })}
                  >
                    <option>Starter Package (₹15,000)</option>
                    <option>Business Package (₹30,000)</option>
                    <option>Custom SaaS & Web App (₹60,000+)</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Invoice Amount (₹)</label>
                  <input
                    type="text"
                    required
                    placeholder="₹30,000"
                    value={invoiceForm.amount}
                    onChange={(e) => setInvoiceForm({ ...invoiceForm, amount: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Generate & Send Invoice →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
