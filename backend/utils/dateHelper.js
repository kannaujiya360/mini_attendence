
exports.getStartOfDay = (date = new Date()) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};


exports.getEndOfDay = (date = new Date()) => {
  const normalized = new Date(date);
  normalized.setHours(23, 59, 59, 999);
  return normalized;
};


exports.formatDate = (date = new Date()) => {
  return date.toISOString().split("T")[0];
};