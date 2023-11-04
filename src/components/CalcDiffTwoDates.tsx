interface Props {
  startDate: string;
  startMonth: string;
  startYear: number;
}

export const CalcDiffTwoDates = ({
  startDate,
  startMonth,
  startYear,
}: Props) => {
  const totalYearsAndMonthsCalc = () => {
    // Assumes Date From (dateFrom) and Date To (currentDate) are valid etc...
    var dateFrom = new Date(startDate);
    var currentDate = new Date();
    //var allMonths= currentDate.getMonth() - dateFrom.getMonth() + (12 * (currentDate.getFullYear() - dateFrom.getFullYear()));
    var allYears = currentDate.getFullYear() - dateFrom.getFullYear();
    var partialMonths = currentDate.getMonth() - dateFrom.getMonth();
    //console.log(partialMonths);
    if (partialMonths < 0) {
      allYears--;
      partialMonths = partialMonths + 12;
    }
    var total =
      allYears +
      `${allYears > 1 ? " yrs " : " yr "}` +
      `${
        partialMonths === 0
          ? ``
          : `${
              partialMonths > 1
                ? `${partialMonths} mths `
                : `${partialMonths} mth `
            }`
      }`;
    //console.log(total);
    return total;
  };

  return (
    <span className="role-total-years">
      {startMonth} {startYear} - Present ·{" "}
      <span>{totalYearsAndMonthsCalc()}</span>
    </span>
  );
};
