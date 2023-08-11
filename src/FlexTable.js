import "./App.css";

const FlexTable = () => {
  return (
    <div className="flex-table">
      <div className="row">
        <div className="cell">Header 1</div>
        <div className="cell">Header 2</div>
        <div className="cell">Header 3</div>
      </div>
      <div className="row">
        <div className="cell">Row 1, Cell 1</div>
        <div className="cell">Row 1, Cell 2</div>
        <div className="cell">Row 1, Cell 3</div>
      </div>
      <div className="row">
        <div className="cell">Row 2, Cell 1</div>
        <div className="cell">Row 2, Cell 2</div>
        <div className="cell">Row 2, Cell 3</div>
      </div>
    </div>
  );
};

export default FlexTable;
