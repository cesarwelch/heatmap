export const dataTransformer = (allData, day, granularity) => {
  const dataOfDay = getDayXData(allData, day);

  let returnData;
  switch (granularity) {
    case 1:
      returnData = getGranularityXData(dataOfDay, 1);
      return {
        data: returnData.data,
        maxSlider: returnData.data.length,
        maxValue: returnData.maxValue,
      };
    case 30:
      returnData = getGranularityXData(dataOfDay, 30);
      return {
        data: returnData.data,
        maxSlider: returnData.data.length,
        maxValue: returnData.maxValue,
      };
    case 60:
      returnData = getGranularityXData(dataOfDay, 60);
      return {
        data: returnData.data,
        maxSlider: returnData.data.length,
        maxValue: returnData.maxValue,
      };
    case 180:
      returnData = getGranularityXData(dataOfDay, 180);
      return {
        data: returnData.data,
        maxSlider: returnData.data.length,
        maxValue: returnData.maxValue,
      };
    case "day":
      returnData = getGranularityXData(dataOfDay, 1440);
      return {
        data: returnData.data,
        maxSlider: returnData.data.length,
        maxValue: returnData.maxValue,
      };
    default:
    case "all":
      returnData = getGranularityXData(dataOfDay, 4320);
      return {
        data: returnData.data,
        maxSlider: returnData.data.length,
        maxValue: returnData.maxValue,
      };
  }
};

const getDayXData = (allData, day) => {
  let returnData = allData;
  if (day !== "all") {
    returnData = allData.filter((row) => {
      return day === new Date(row[0].timestamp).getDate();
    });
  }
  return returnData;
};

const getGranularityXData = (dataOfDay, granularity) => {
  const returnValue = [];
  let dataSet = [];
  let maxValue = 0;
  for (let i = 0; i < dataOfDay.length; i++) {
    for (let j = 0; j < dataOfDay[i].length; j++) {
      const founded = dataSet.find(
        (point) => point.name === dataOfDay[i][j].name
      );
      if (founded) {
        founded.value += dataOfDay[i][j].value;
      } else {
        dataSet.push(dataOfDay[i][j]);
      }
      if (dataOfDay[i][j].value > maxValue) {
        if (founded) {
          maxValue = founded.value;
        } else {
          maxValue = dataOfDay[i][j].value;
        }
      }
    }
    if (i && (i % granularity === 0 || i === dataOfDay.length - 1)) {
      returnValue.push(dataSet);
      dataSet = [];
    }
  }
  return { data: returnValue, maxValue };
};

export const getItcData = async () => {
  const r = await fetch(
    `${
      process.env.REACT_APP_HOST_URL || "https://heatmap-52cff.web.app/"
    }itcData.json`
  );
  return await r.json();
};

export const granularityFiltersOptions = (daysFilterOption) => {
  const retVal = [
    { value: 1, label: "1 Minute" },
    { value: 30, label: "30 Minutes" },
    { value: 60, label: "1 Hour" },
    { value: 180, label: "3 Hours" },
    { value: "day", label: "Day" },
  ];
  if (daysFilterOption === "all") {
    retVal.push({ value: "all", label: "All Event" });
  }
  return retVal;
};

export const daysFiltersOptions = [
  { value: 4, label: "4th December" },
  { value: 5, label: "5th December" },
  { value: 6, label: "6th December" },
  { value: "all", label: "All Event" },
];
