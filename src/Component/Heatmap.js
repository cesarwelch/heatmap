import React, { useState, useEffect } from "react";
import h337 from "heatmapjs";
import Slider from "@mui/material/Slider";
import Image from "./lobb.png";
import "./styles.css";

export default function Heatmap() {
  const [heatMapInstance, setHeatMapInstance] = useState();
  const getX = () => Math.random() * (500 - 40) + 40;
  const getY = () => Math.random() * (280 - 40) + 40;
  const [pointsInfo, setPointsInfo] = useState([
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
    { x: getX(), y: getY(), value: 0 },
  ]);

  useEffect(() => {
    setHeatMapInstance(
      h337.create({
        container: document.querySelector(".heatmap"),
        gradient: {
          1: "blue",
          ".5": "cyan",
          ".8": "red",
          ".95": "white",
        },
      })
    );
  }, []);
  // 566  383
  const handleHeatmap = (e, value) => {
    setPointsInfo((prev) => {
      return prev.map((el) => ({ ...el, value: value }));
    });
  };

  useEffect(() => {
    let data = {
      max: 100,
      min: 0,
      data: pointsInfo,
    };
    heatMapInstance && heatMapInstance.setData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointsInfo]);

  return (
    <>
      {JSON.stringify(pointsInfo)}
      <div style={{ width: "400px" }}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleHeatmap}
        />
      </div>

      <div id="mydiv" className="heatmap" style={{ display: "block" }}>
        <img
          src={Image}
          alt="road"
          onLoad={() => {
            setHeatMapInstance(
              h337.create({
                container: document.querySelector(".heatmap"),
                gradient: {
                  1: "blue",
                  ".5": "cyan",
                  ".8": "red",
                  ".95": "white",
                },
              })
            );
          }}
        />
      </div>
    </>
  );
}
