export const formatDate = (dateString) => {
  const options = { month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export const formatTime = (timeString) => {
  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const time = new Date(timeString);
  return time
    .toLocaleTimeString("en-US", options)
    .toLowerCase()
    .replace(/\s/g, "");
};
