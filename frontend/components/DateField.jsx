import { classNames } from "../utils/utils";
import SelectMenu from "./SelectMenu";

const months = [
  { id: 1, name: "Jan" },
  { id: 2, name: "Feb" },
  { id: 3, name: "Mar" },
  { id: 4, name: "Apr" },
  { id: 5, name: "May" },
  { id: 6, name: "Jun" },
  { id: 7, name: "Jul" },
  { id: 8, name: "Aug" },
  { id: 9, name: "Sep" },
  { id: 10, name: "Oct" },
  { id: 11, name: "Nov" },
  { id: 12, name: "Dec" },
];

const days = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
  { id: 6, name: "6" },
  { id: 7, name: "7" },
  { id: 8, name: "8" },
  { id: 9, name: "9" },
  { id: 10, name: "10" },
  { id: 11, name: "11" },
  { id: 12, name: "12" },
  { id: 13, name: "13" },
  { id: 14, name: "14" },
  { id: 15, name: "15" },
  { id: 16, name: "16" },
  { id: 17, name: "17" },
  { id: 18, name: "18" },
  { id: 19, name: "19" },
  { id: 20, name: "20" },
  { id: 21, name: "21" },
  { id: 22, name: "22" },
  { id: 23, name: "23" },
  { id: 24, name: "24" },
  { id: 25, name: "25" },
  { id: 26, name: "26" },
  { id: 27, name: "27" },
  { id: 28, name: "28" },
  { id: 29, name: "29" },
  { id: 30, name: "30" },
  { id: 31, name: "31" },
];

const years = [
  { id: 0, name: 2000 },
  { id: 1, name: 2001 },
  { id: 2, name: 2002 },
  { id: 3, name: 2003 },
  { id: 4, name: 2004 },
  { id: 5, name: 2005 },
  { id: 6, name: 2006 },
  { id: 7, name: 2007 },
  { id: 8, name: 2008 },
  { id: 9, name: 2009 },
  { id: 10, name: 2010 },
  { id: 11, name: 2011 },
  { id: 12, name: 2012 },
  { id: 13, name: 2013 },
  { id: 14, name: 2014 },
  { id: 15, name: 2015 },
  { id: 16, name: 2016 },
  { id: 17, name: 2017 },
  { id: 18, name: 2018 },
  { id: 19, name: 2019 },
  { id: 20, name: 2020 },
  { id: 21, name: 2021 },
  { id: 22, name: 2022 },
  { id: 23, name: 2023 },
  { id: 24, name: 2024 },
  { id: 25, name: 2025 },
  { id: 26, name: 2026 },
  { id: 27, name: 2027 },
  { id: 28, name: 2028 },
  { id: 29, name: 2029 },
  { id: 30, name: 2030 },
];

const DateField = ({
  label,
  prefix = "",
  month,
  day,
  year,
  setMonth,
  setDay,
  setYear,
  monthYearOnly = false,
}) => {
  return (
    <div className="space-y-1">
      <div className="text-on-primary text-base font-medium">{label}</div>
      <div
        className={classNames(
          monthYearOnly ? "grid-cols-2" : "grid-cols-3",
          "grid gap-x-10"
        )}
      >
        <SelectMenu
          label={`${prefix} Month`}
          options={months}
          selected={month}
          setSelected={setMonth}
        />
        {!monthYearOnly && (
          <SelectMenu
            label={`${prefix} Day`}
            options={days}
            selected={day}
            setSelected={setDay}
          />
        )}
        <SelectMenu
          label={`${prefix} Year`}
          options={years}
          selected={year}
          setSelected={setYear}
        />
      </div>
    </div>
  );
};

export default DateField;
