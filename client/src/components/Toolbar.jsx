import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import "../styles/toolbar.scss";
import Brush from "../tools/brush";
import Circle from "../tools/circle";
import Eraser from "../tools/eraser";
import Line from "../tools/line";
import Rect from "../tools/rect";
const Toolbar = () => {
  const changeColor = (e) => {
    const color = e.target.value;
    toolState.setFillColor(color);
    toolState.setStrokeColor(color);
  };

  return (
    <div className="toolbar">
      <div className="wrapper">
        <button
          className="toolbar-button brush"
          onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
        ></button>
        <button
          className="toolbar-button rect"
          onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
        ></button>
        <button
          className="toolbar-button circle"
          onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
        ></button>
        <button
          className="toolbar-button eraser"
          onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
        ></button>
        <button
          className="toolbar-button line"
          onClick={() => toolState.setTool(new Line(canvasState.canvas))}
        ></button>
        <input type="color" onChange={changeColor} />
      </div>
      <div className="wrapper">
        <button
          className="toolbar-button undo"
          onClick={() => canvasState.undo()}
        ></button>
        <button
          className="toolbar-button redo"
          onClick={() => canvasState.redo()}
        ></button>
        <button className="toolbar-button save"></button>
      </div>
    </div>
  );
};

export default Toolbar;
