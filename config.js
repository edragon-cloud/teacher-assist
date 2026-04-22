// ============================================================
//  config.js — Cấu hình kết nối GAS Backend
// ============================================================
const GAS_URL = 'https://script.google.com/macros/s/AKfycbw5u-04zOXaNkqOtF_GP4tsVpcZT7jQDJDpqeSxq61aAUSHuLKFo_XRbOBsYtqLPZ835A/exec';

async function api(action, params = {}) {
  const qs = new URLSearchParams({ action, ...params }).toString();
  const res = await fetch(GAS_URL + '?' + qs);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  if (data && data.error) throw new Error(data.error);
  return data;
}
