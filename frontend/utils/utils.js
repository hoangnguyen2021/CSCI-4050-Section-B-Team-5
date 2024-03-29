import moment from "moment";
import { ticketTypes, SALES_TAX_RATE } from "../utils/config";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const convertHhmmssToMinutes = (hhmmss) => {
  if (!hhmmss) return 0;

  const arr = hhmmss.split(":");
  const hours = Number.parseInt(arr[0]);
  const minutes = Number.parseInt(arr[1]);

  return hours * 60 + minutes;
};

export const convertMinutesToHhmmss = (minutes) => {
  return `${Math.floor(minutes / 60)}:${minutes % 60}:00`;
};

export const getHhmmFromHhmmss = (hhmmss) => {
  if (!hhmmss) return "";
  return hhmmss.substring(0, hhmmss.length - 3);
};

export const getTodayString = () => {
  return moment().format("MMM D YYYY");
};

export const getTodayYYYYMMDD = () => {
  return moment().format("YYYY-MM-DD");
};

export const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const calculatePrice = (tickets) => {
  const totalBeforeTax = tickets.reduce(
    (accumulator, current, i) =>
      accumulator + Number.parseFloat(current) * ticketTypes[i].price,
    0
  );
  const tax = totalBeforeTax * SALES_TAX_RATE;
  const total = totalBeforeTax + tax;

  return { totalBeforeTax, tax, total };
}