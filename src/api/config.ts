/**
 * External service base URLs.
 * Set VITE_API_BASE and VITE_AUDIT_BASE in your .env.local for dev overrides.
 * In production, VITE_API_BASE=https://app.getalloro.com
 */

export const API_BASE: string = import.meta.env.VITE_API_BASE ?? "";
export const AUDIT_BASE: string =
  import.meta.env.VITE_AUDIT_BASE ?? "https://audit.getalloro.com";
