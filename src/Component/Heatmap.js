import React, { useState, useEffect, useCallback } from "react";
import h337 from "heatmapjs";
import Slider from "@mui/material/Slider";
import Image from "../assets/hrt2022.jpg";
// import { x as ogData } from "../assets/heatmapdata";
import Button from "@mui/material/Button";
import { useInterval, useBoolean } from "react-use";
import {
  getItcData,
  dataTransformer,
  granularityFiltersOptions,
  daysFiltersOptions,
} from "../util/dataTransformer";
import "./styles.css";
import ToggleFilter from "./ToggleFilter";
import Tooltip from "./Tooltip";
import useStore from "./store";

export default function Heatmap() {
  const [transformedSourceData, setTransformedSourceData] = useState({
    14: { 1: [], 30: [], 60: [], 180: [], day: [] },
    15: { 1: [], 30: [], 60: [], 180: [], day: [] },
    16: { 1: [], 30: [], 60: [], 180: [], day: [] },
    all: { 1: [], 30: [], 60: [], 180: [], day: [], all: [] },
  });
  const [heatMapInstance, setHeatMapInstance] = useState();
  const [mainData, setMainData] = useState({
    data: [],
    maxSlider: 0,
    maxValue: 0,
  });
  const [pointsInfo, setPointsInfo] = useState([]);
  const [sliderCount, setSliderCount] = useState(0);
  const [delay] = useState(100);
  const [isRunning, toggleIsRunning] = useBoolean(false);
  const granularity = useStore((state) => state.granularity);
  const setGranularity = useStore((state) => state.setGranularity);

  const [date, setDate] = useState(14);

  useInterval(
    () => {
      if (mainData.maxSlider > sliderCount) {
        setSliderCount(sliderCount + 1);
        setPointsInfo(mainData.data[sliderCount]);
      } else {
        toggleIsRunning(false);
      }
    },
    isRunning ? delay : null
  );

  const getData = useCallback(async () => {
    if (transformedSourceData[date][granularity].maxSlider) {
      setMainData(transformedSourceData[date][granularity]);
    } else {
      let transformedData;
      const returnData = await getItcData();
      transformedData = dataTransformer(returnData, date, granularity);
      setTransformedSourceData((prev) => {
        const temp = { ...prev };
        temp[date][granularity] = transformedData;
        return temp;
      });
      setMainData(transformedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, granularity]);

  useEffect(() => {
    getData();
  }, [date, granularity, getData]);

  useEffect(() => {
    if (mainData?.data?.length === 0) {
      getData();
    }
    if (mainData.maxSlider === 0 && !heatMapInstance) {
      const instance = h337.create({
        container: document.querySelector(".heatmap"),
        minOpacity: ".4",
        gradient: {
          ".01": "blue",
          ".25": "cyan",
          ".5": "yellow",
          ".75": "orange",
          1: "red",
        },
      });
      setHeatMapInstance(instance);
    }

    if (mainData.maxSlider > 0 && heatMapInstance) {
      let dataSet = {
        max: mainData.maxValue,
        min: 0,
        data: mainData.data[sliderCount],
      };
      heatMapInstance && heatMapInstance.setData(dataSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heatMapInstance, getData]);

  const handleHeatmap = (e, value) => {
    if (isRunning) {
      toggleIsRunning(false);
    }

    setPointsInfo(mainData.data[value]);
    setSliderCount(value);
  };

  useEffect(() => {
    let dataSet = {
      max: mainData.maxValue,
      min: 0,
      data: pointsInfo,
    };

    heatMapInstance &&
      pointsInfo.length > 0 &&
      heatMapInstance.setData(dataSet);
  }, [heatMapInstance, mainData, pointsInfo]);

  return (
    <>
      <div
        style={{
          width: "600px",
          paddingBottom: "1rem",
          textAlign: "left",
          fontSize: "1.5rem",
        }}
      >
        <div>
          <div
            style={{
              paddingBottom: "1rem",
            }}
          >
            <div>
              <span>Granularity</span>
            </div>
            <ToggleFilter
              value={granularity}
              setValue={(newValue) => {
                setSliderCount(0);
                setGranularity(newValue);
              }}
              options={granularityFiltersOptions(date)}
            />
          </div>

          <div>
            <div>
              <span>Date</span>
            </div>
            <div>
              <ToggleFilter
                value={date}
                setValue={(newValue) => {
                  setSliderCount(0);
                  setDate(newValue);

                  if (newValue !== "all") {
                    setGranularity(1);
                  }
                }}
                options={daysFiltersOptions}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div id="mydiv" className="heatmap" style={{ display: "block" }}>
          <img height="522px" width="1068px" src={Image} alt="road" />
        </div>
        <div style={{ textAlign: "left", paddingLeft: "2rem" }}>
          <div>blue: 0 - {mainData.maxValue * 0.01}</div>
          <div>
            cyan: {mainData.maxValue * 0.01} - {mainData.maxValue * 0.25}
          </div>
          <div>
            yellow: {mainData.maxValue * 0.25} - {mainData.maxValue * 0.5}
          </div>
          <div>
            orange: {mainData.maxValue * 0.5} - {mainData.maxValue * 0.75}
          </div>
          <div>
            red: {mainData.maxValue * 0.75} - {mainData.maxValue}
          </div>
          {mainData.maxSlider > 1 && (
            <Button
              variant="outlined"
              style={{ background: "white" }}
              onClick={toggleIsRunning}
            >
              {isRunning ? "Cancel" : "Auto Play"}
            </Button>
          )}
        </div>
      </div>
      <div style={{ width: "600px" }}>
        {mainData.maxSlider > 1 && (
          <Slider
            max={mainData.maxSlider - 1 || 0}
            defaultValue={0}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleHeatmap}
            value={sliderCount}
            components={{
              ValueLabel: Tooltip,
            }}
          />
        )}
      </div>
    </>
  );
}
