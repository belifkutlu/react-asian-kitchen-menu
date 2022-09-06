import "./category.css";

function Category({ item, onClick, isSelected }) {
  return (
    <button className={`${isSelected ? "selected" : ""}`} onClick={onClick}>
      {item}
    </button>
  );
}

export default Category;
