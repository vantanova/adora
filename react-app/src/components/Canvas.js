import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Stage, Layer, Line, Text } from "react-konva";
import "./Styling/Canvas.css";
import { setFile } from "../store/post";

const Canvas = () => {
  const dispatch = useDispatch();
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([]);
  const [good, setGood] = useState();
  const [medium, setMedium] = useState("pen");
  const isDrawing = React.useRef(false);
  const stageRef = React.useRef(null);
  const layerRef = React.useRef(null);
  let fd;

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
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);

    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to a typed array
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  // if (tool === "eraser") {
  //   setMedium("eraser");
  // } else if (tool === "pen") {
  //   setMedium("pen");
  // }

  let layer = (
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
  );

  const handleExport = () => {
    const uri = stageRef.current.toImage({
      callback: function () {
        let dataURL = stageRef.current.toDataURL({ pixelRatio: 3 });
        // downloadURI(dataURL, "stage.png");
        const blob = dataURItoBlob(dataURL);
        console.log(blob);
        fd = new FormData();
        fd.append("canvasImage", blob);
        dispatch(setFile(fd));
        setGood({ border: "1px solid #d2f8d2" });
      },
    });
  };

  const deleteDrawing = () => {
    setLines([]);
    setGood({});
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

  return (
    <div className={medium}>
      <Stage
        width={590}
        height={300}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref={stageRef}
        className="drawing_area"
        style={good}
      >
        {layer}
      </Stage>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
          setMedium(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <button onClick={handleExport}>Use drawing?</button>
      <button onClick={deleteDrawing}>Click here to clear!</button>
    </div>
  );
};

export default Canvas;
