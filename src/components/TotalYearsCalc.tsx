interface Props {
  startYear: number;
  startMonth: string;
}

export const TotalYearsCalc = ({ startYear, startMonth }: Props) => {
  const currentRoleYearCalc = () => {
    const currentYearRaw = new Date().getFullYear();
    let roleYears: string | number = 0;
    const startRoleYear = startYear;
    roleYears = currentYearRaw - startRoleYear - 1;
    roleYears = roleYears > 1 ? roleYears + " yrs" : roleYears + " yr";
    return roleYears;
  };

  const currentRoleMonthCalc = () => {
    const currentMonthRaw = new Date().getMonth();
    let currentRoleMonth: string | number = 0;
    switch (currentMonthRaw) {
      case 0:
        // code block
        currentRoleMonth = 1;
        break;

      case 1:
        // code block
        currentRoleMonth = 2;
        break;

      case 2:
        // code block
        currentRoleMonth = 3;
        break;

      case 3:
        // code block
        currentRoleMonth = 4;
        break;

      case 4:
        // code block
        currentRoleMonth = 5;
        break;

      case 5:
        // code block
        currentRoleMonth = 6;
        break;

      case 6:
        // code block
        currentRoleMonth = 7;
        break;

      case 7:
        // code block
        currentRoleMonth = 8;
        break;

      case 8:
        // code block
        currentRoleMonth = 9;
        break;

      case 9:
        // code block
        currentRoleMonth = 10;
        break;

      case 10:
        // code block
        currentRoleMonth = 11;
        break;

      case 11:
        // code block
        currentRoleMonth = 12;
        break;

      default:
      // code block
      // DO NOTHING
    }
    currentRoleMonth =
      currentRoleMonth > 1
        ? currentRoleMonth + " mths"
        : currentRoleMonth + " mth";
    return currentRoleMonth;
  };

  return (
    <span className="role-total-years">
      {startMonth} {startYear} - Present · <span>{currentRoleYearCalc()} </span>
      <span> {currentRoleMonthCalc()}</span>
    </span>
  );
};
