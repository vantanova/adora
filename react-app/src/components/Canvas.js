import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Stage, Layer, Line } from "react-konva";
import "./Styling/Canvas.css";
import { setFile } from "../store/post";
import { Button, Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

const Canvas = () => {
  const dispatch = useDispatch();
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([]);
  const [good, setGood] = useState({
    border: "1px solid rgb(240, 240, 240)",
  });
  const [medium, setMedium] = useState("pen");
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef(null);
  const layerRef = React.useRef(null);

  // function downloadURI(uri, name) {
  //   console.log(uri);
  //   let link = document.createElement("a");
  //   link.download = name;
  //   link.href = uri;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  function dataURItoBlob(dataURI) {
    let byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);

    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  const handleExport = () => {
    stageRef.current.toImage({
      callback: function () {
        let dataURL = stageRef.current.toDataURL({ pixelRatio: 20 });
        // downloadURI(dataURL, "stage.png");
        const blob = dataURItoBlob(dataURL);
        dispatch(setFile(blob));
        setGood({ border: "1px solid #d2f8d2" });
      },
    });
  };

  const deleteDrawing = () => {
    setLines([]);
    setGood({ border: "1px solid rgb(240, 240, 240)" });
    dispatch(setFile(null));
  };

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  function handleChange(value) {
    console.log(value);

    setTool(value.value);
    setMedium(value.value);
  }

  return (
    <div>
      <Stage
        width={590}
        height={300}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref={stageRef}
        className={medium}
        style={good}
      >
        <Layer ref={layerRef}>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="black"
              strokeWidth={10}
              lineJoin="round"
              tension={0.5}
              lineCap="round"
              perfectDrawEnabled={false}
              globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
              }
            />
          ))}
        </Layer>
      </Stage>

      <Select
        labelInValue
        defaultValue={{ value: "pen" }}
        onChange={handleChange}
      >
        <Option value="pen">Pen</Option>
        <Option value="eraser">Eraser</Option>
      </Select>
      <Button
        type="primary"
        style={{
          float: "right",
          background: "#806854",
          borderColor: "#8d725c",
          width: "13vh",
        }}
        onClick={handleExport}
      >
        Use drawing?
      </Button>
      <Button style={{ float: "right" }} onClick={deleteDrawing}>
        Click here to clear!
      </Button>
    </div>
  );
};

export default Canvas;
