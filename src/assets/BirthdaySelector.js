import { useEffect, useMemo, useState } from "react";

export const BirthdaySelector = ({ year, month }) => {
  const [days, setDays] = useState([]);

  // 연도 옵션 생성
  const yearOptions = useMemo(() => {
    const startYear = 1900;
    const currentYear = new Date().getFullYear();
    return Array.from(
      { length: currentYear - startYear + 1 },
      (v, k) => startYear + k
    ).map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  }, []);

  // 월 옵션 생성
  const monthOptions = useMemo(() => {
    return Array.from({ length: 12 }, (v, k) =>
      (k + 1).toString().padStart(2, "0")
    ).map((month) => (
      <option key={month} value={month}>
        {month}
      </option>
    ));
  }, []);

  // 일 옵션 계산 및 설정
  useEffect(() => {
    if (year && month) {
      const daysInMonth = new Date(year, month, 0).getDate();
      setDays(
        Array.from({ length: daysInMonth }, (v, k) =>
          (k + 1).toString().padStart(2, "0")
        )
      );
    } else {
      setDays([]);
    }
  }, [year, month]);

  return {
    yearOptions,
    monthOptions,
    days,
  };
};
