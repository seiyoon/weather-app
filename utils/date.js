export const formatDate = (dateString) => {
  const options = { month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export const formatTime = (timeString) => {
  const options = { hour: "numeric", minute: "numeric", hour12: false };
  const time = new Date(timeString);
  const formattedTime = time
    .toLocaleTimeString("en-US", options)
    .toLowerCase()
    .replace(/\s/g, "");

  const period = time.getHours() < 12 ? "am" : "pm";

  return formattedTime + period;
};
