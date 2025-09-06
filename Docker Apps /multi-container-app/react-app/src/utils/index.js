export const getApiPath = (path) => window.location.port === 5173 ? `/api${path}` : path
