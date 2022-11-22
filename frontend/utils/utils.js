export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const convertHhmmssToMinutes = (hhmmss) => {
  const arr = hhmmss.split(":");
  const hours = Number.parseInt(arr[0]);
  const minutes = Number.parseInt(arr[1]);
  return hours * 60 + minutes;
}

export const convertMinutesToHhmmss = (minutes) => {
  return `${Math.floor(minutes / 60)}:${minutes % 60}:00`;
}

export const getHhmmFromHhmmss = (hhmmss) => {
  return hhmmss.substring(0, hhmmss.length - 3);
}

export const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
