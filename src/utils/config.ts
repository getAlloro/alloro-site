/**
 * Centralized configuration for API endpoints and redirect URLs
 */

const isProduction =
  typeof window !== "undefined" &&
  window.location.hostname !== "localhost" &&
  window.location.hostname !== "127.0.0.1";

// API URLs
const PRODUCTION_API_URL = "https://app.getalloro.com/api";
const DEVELOPMENT_API_URL = "http://localhost:3000/api";

// Audit Tool URLs
const PRODUCTION_AUDIT_URL = "https://audit.getalloro.com";
const DEVELOPMENT_AUDIT_URL = "http://localhost:3002";

export const API_BASE_URL: string =
  import.meta.env.VITE_API_BASE_URL ||
  (isProduction ? PRODUCTION_API_URL : DEVELOPMENT_API_URL);

export const AUDIT_TOOL_URL: string =
  import.meta.env.VITE_AUDIT_TOOL_URL ||
  (isProduction ? PRODUCTION_AUDIT_URL : DEVELOPMENT_AUDIT_URL);
