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
  const TotalYearsAndMonthsCalc = () => {
    // Assumes Date From (df) and Date To (dt) are valid etc...
    var df = new Date(startDate);
    var dt = new Date();
    //var allMonths= dt.getMonth() - df.getMonth() + (12 * (dt.getFullYear() - df.getFullYear()));
    var allYears = dt.getFullYear() - df.getFullYear();
    var partialMonths = dt.getMonth() - df.getMonth();
    if (partialMonths < 0) {
      allYears--;
      partialMonths = partialMonths + 12;
    }
    var total =
      allYears +
      `${allYears > 1 ? " yrs " : " yr "}` +
      partialMonths +
      `${partialMonths > 1 ? " mths " : " mth "}`;
    //console.log(total);
    return total;
  };

  return (
    <span className="role-total-years">
      {startMonth} {startYear} - Present ·{" "}
      <span>{TotalYearsAndMonthsCalc()}</span>
    </span>
  );
};
