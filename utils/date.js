export const formatDate = (dateString) => {
  const options = { month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

export const formatTime = (timeString) => {
  const options = { hour: "numeric", minute: "numeric", hour12: false };
  const time = new Date(timeString);

  const formattedHour = (time.getHours() % 24).toString().padStart(2, "0");
  const formattedTime =
    formattedHour + ":" + time.getMinutes().toString().padStart(2, "0");

  const period = time.getHours() < 12 ? "am" : "pm";

  return formattedTime + period;
};
