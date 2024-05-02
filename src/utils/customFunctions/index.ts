const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];

export function formattedDate() {
  const date = new Date();
  return `${String(date.getDate()).padStart(2, "0")} ${
    months[date.getMonth()]
  }, ${date.getFullYear()}`;
}

export function identifyDate(created_date: string) {
  const date = new Date();
  const oldDay = created_date.substring(0, 2);
  const oldYear = +created_date.substring(8);
  const oldMonth = created_date.split(",")[0].split(" ").at(-1);
  if (oldYear == date.getFullYear()) {
    if (oldMonth == months[date.getMonth()]) {
      if (oldDay == String(date.getDate()).padStart(2, "0")) {
        return "Today";
      }
      if(+oldDay == +String(date.getDate()).padStart(2, "0") - 1) {
        return "Yesterday"
      }

      for(let i = 2; i < 8; i++) {
          if(+oldDay == (+String(date.getDate()).padStart(2, "0") - i)) {
               return `${i} days ago`
          }
      }
    }
  }
  return created_date;
}
