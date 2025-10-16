import "./ColorButton.css";

function ColorButton({bgcolor, setBGcolor}) {
  return (
    <div className="color-option" onClick={() => {
        setBGcolor(bgcolor);
    }}
      style={{ backgroundColor: bgcolor}}
    ></div>
  )
}

export default ColorButton;
