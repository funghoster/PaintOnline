import toolState from "../store/toolState";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <div className="wrapper">
        <label htmlFor="line-width">Толщина линии</label>
        <input
          onChange={(e) => toolState.setLineWidth(e.target.value)}
          style={{ marginLeft: 10 }}
          id="line-width"
          type="number"
          min={1}
          max={50}
          defaultValue={1}
        />
        <label htmlFor="stroke-color">Цвет обводки</label>
        <input
          onChange={(e) => toolState.setStrokeColor(e.target.value)}
          style={{ marginLeft: 10 }}
          id="stroke-color"
          type="color"
        />
      </div>
    </div>
  );
};

export default SettingBar;
