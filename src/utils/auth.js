export function getJwtPayload() {
  const token = localStorage.getItem("auth_token");
  if (!token) return null;

  try {
    const payloadBase64 = token.split(".")[1];
    const decoded = JSON.parse(atob(payloadBase64));
    return decoded;
  } catch {
    return null;
  }
}

export function getUserRoles() {
  const payload = getJwtPayload();
  return payload?.roles || [];
}

export function isCoach() {
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");
  return roles.includes("ROLE_COACH");
}
