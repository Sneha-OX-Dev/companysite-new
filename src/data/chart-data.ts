/**
 * Static illustrative data for OX companysite charts.
 * Realistic trends that tell the story—no live API.
 */

/** Last 12 months, gentle upward trend. Reference: 1k OXIT ≈ $0.50 today, $19 @1B */
export const TOKEN_CHART_DATA = [
  { month: "Apr", price: 0.12 },
  { month: "May", price: 0.14 },
  { month: "Jun", price: 0.16 },
  { month: "Jul", price: 0.18 },
  { month: "Aug", price: 0.21 },
  { month: "Sep", price: 0.24 },
  { month: "Oct", price: 0.28 },
  { month: "Nov", price: 0.32 },
  { month: "Dec", price: 0.38 },
  { month: "Jan", price: 0.42 },
  { month: "Feb", price: 0.46 },
  { month: "Mar", price: 0.50 },
].map((d, i) => ({ ...d, index: i }));

/** Work done (mining + auto-mining) over time. Growth and scale. */
export const WORK_HOURS_CHART_DATA = [
  { month: "Apr", hours: 2.1 },
  { month: "May", hours: 2.8 },
  { month: "Jun", hours: 3.5 },
  { month: "Jul", hours: 4.2 },
  { month: "Aug", hours: 5.1 },
  { month: "Sep", hours: 6.3 },
  { month: "Oct", hours: 7.8 },
  { month: "Nov", hours: 9.2 },
  { month: "Dec", hours: 11.1 },
  { month: "Jan", hours: 13.4 },
  { month: "Feb", hours: 14.8 },
  { month: "Mar", hours: 16.0 },
].map((d, i) => ({ ...d, index: i }));

/** Registrations / active users over time. 1.5M citizens, a billion in sight. */
export const USERS_CHART_DATA = [
  { month: "Apr", users: 0.4 },
  { month: "May", users: 0.52 },
  { month: "Jun", users: 0.65 },
  { month: "Jul", users: 0.82 },
  { month: "Aug", users: 0.95 },
  { month: "Sep", users: 1.1 },
  { month: "Oct", users: 1.25 },
  { month: "Nov", users: 1.35 },
  { month: "Dec", users: 1.42 },
  { month: "Jan", users: 1.46 },
  { month: "Feb", users: 1.48 },
  { month: "Mar", users: 1.5 },
].map((d, i) => ({ ...d, index: i }));

/** Work requests (mining actions) completed over time. */
export const WORK_REQUESTS_CHART_DATA = [
  { month: "Apr", requests: 0.8 },
  { month: "May", requests: 1.2 },
  { month: "Jun", requests: 1.6 },
  { month: "Jul", requests: 2.1 },
  { month: "Aug", requests: 2.8 },
  { month: "Sep", requests: 3.5 },
  { month: "Oct", requests: 4.4 },
  { month: "Nov", requests: 5.2 },
  { month: "Dec", requests: 6.3 },
  { month: "Jan", requests: 7.5 },
  { month: "Feb", requests: 8.6 },
  { month: "Mar", requests: 9.8 },
].map((d, i) => ({ ...d, index: i }));

/** Token emissions over time. Infinite halving—declining toward zero. */
export const EMISSIONS_CHART_DATA = [
  { period: "Y1", emissions: 100 },
  { period: "Y2", emissions: 50 },
  { period: "Y3", emissions: 25 },
  { period: "Y4", emissions: 12.5 },
  { period: "Y5", emissions: 6.25 },
  { period: "Y6", emissions: 3.13 },
  { period: "Y7", emissions: 1.56 },
  { period: "Y8", emissions: 0.78 },
  { period: "Y9", emissions: 0.39 },
  { period: "Y10", emissions: 0.2 },
  { period: "Y11", emissions: 0.1 },
  { period: "Y12+", emissions: 0 },
].map((d, i) => ({ ...d, index: i }));

/** OXME allocation. Fixed supply 1.37B. */
export const ALLOCATION_CHART_DATA = [
  { name: "Mining", value: 1020, fill: "var(--accent)" },
  { name: "Founder/Investor", value: 210, fill: "rgba(129, 140, 248, 0.8)" },
  { name: "Commission", value: 140, fill: "rgba(99, 102, 241, 0.6)" },
];
