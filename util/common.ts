const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const extractDate = (dt: Date) => {
  const dateString = `${monthNames[dt.getMonth()]}-${dt.getFullYear()}`;
  return dateString;
};

export const DateDiff = {
  inDays: function (d1: Date = new Date(), d2: Date = new Date()) {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    return Math.floor((t2 - t1) / (24 * 3600 * 1000));
  },

  inWeeks: function (d1: Date = new Date(), d2: Date = new Date()) {
    const t2: any = d2.getTime();
    const t1: any = d1.getTime();
    const xFactor: any = 24 * 3600 * 1000 * 7;

    return parseInt(String((t2 - t1) / xFactor));
  },

  inMonths: function (d1: Date = new Date(), d2: Date = new Date()) {
    const d1Y = d1.getFullYear();
    const d2Y = d2.getFullYear();
    const d1M = d1.getMonth();
    const d2M = d2.getMonth();

    return d2M + 12 * d2Y - (d1M + 12 * d1Y);
  },

  inYears: function (d1: Date = new Date(), d2: Date = new Date()) {
    return d2.getFullYear() - d1.getFullYear();
  },
  get: function (d1: Date = new Date(), d2: Date = new Date()) {
    const years = this.inYears(d1, d2);
    if (years < 1) {
      const months = this.inMonths(d1, d2);
      if (months < 1) {
        const weeks = this.inWeeks(d1, d2);
        return `${weeks} week${weeks > 1 ? "s" : ""}`;
      }
      return `${months} month${months > 1 ? "s" : ""}`;
    }
    return `${years} year${years > 1 ? "s" : ""}`;
  },
};

export const updateObject = (oldObject: any, updatedProperties: any) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
