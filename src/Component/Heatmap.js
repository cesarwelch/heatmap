import React, { useState, useEffect } from "react";
import h337 from "heatmapjs";
import Slider from "@mui/material/Slider";
import Image from "../assets/itcPlan.png";
import { data as ogData } from "../assets/heatmapdata";
import { data } from "../assets/formattedheatmapdata";
import "./styles.css";

export default function Heatmap() {
  const [heatMapInstance, setHeatMapInstance] = useState();
  // const [pointsInfo, setPointsInfo] = useState(data[0]);
  const [pointsInfo, setPointsInfo] = useState([data[0]]);

  const test = ogData.map((i) =>
    i.map((j) => {
      return { x: j.x / 4, y: j.y / 4, value: (j.value / 100) * 4 };
    })
  );
  console.log(
    "🚀 ~ file: Heatmap.js ~ line 18 ~ Heatmap ~ test",
    JSON.stringify(test)
  );

  useEffect(() => {
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
    let dataSet = {
      max: 100,
      min: 0,
      data: data[5],
    };
    instance.setData(dataSet);
    setHeatMapInstance(instance);
  }, []);
  // 566  383
  const handleHeatmap = (e, value) => {
    setPointsInfo(data[value]);
  };

  useEffect(() => {
    let dataSet = {
      max: 100,
      min: 0,
      data: pointsInfo,
    };
    heatMapInstance && heatMapInstance.setData(dataSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heatMapInstance, pointsInfo]);

  return (
    <>
      <div style={{ width: "400px" }}>
        <Slider
          max={541}
          defaultValue={0}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleHeatmap}
        />
      </div>

      <div style={{ display: "flex" }}>
        <div id="mydiv" className="heatmap" style={{ display: "block" }}>
          <img height="703px" width="810px" src={Image} alt="road" />
        </div>
        <div style={{ textAlign: "left", paddingLeft: "2rem" }}>
          <div>blue: 0 - 200</div>
          <div>cyan: 200 - 500</div>
          <div>yellow: 500 - 1000</div>
          <div>orange: 1000 - 1500</div>
          <div>red: 1500 - 2000</div>
        </div>
      </div>
    </>
  );
}
