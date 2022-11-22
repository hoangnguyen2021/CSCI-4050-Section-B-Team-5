export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const convertHhmmssToMinutes = (hhmmss) => {
  const arr = hhmmss.split(":");
  const hours = Number.parseInt(arr[0]);
  const minutes = Number.parseInt(arr[1]);
  return hours * 60 + minutes;
}
