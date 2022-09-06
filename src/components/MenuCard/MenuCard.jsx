import "./menuCard.css";

function MenuCard({ item }) {
  return (
    <div className="card">
      <div className="picture">
        <img src={item.img} alt="/" />
      </div>
      <div className="content">
        <div className="title-price">
          <h4>{item.title}</h4>
          <span>{item.price}</span>
        </div>
        <hr />
        <p>{item.desc}</p>
      </div>
    </div>
  );
}
export default MenuCard;
