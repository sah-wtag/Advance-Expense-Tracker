import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";

export default function Transaction() {
  return (
    <>
      <li className="transaction income">
        <p>Earned this month</p>
        <div className="right">
          <p>৳ 100</p>
          <button className="link">
            <img alt="Eidt" className="icon" src={editImage} />
          </button>
          <button className="link">
            <img alt="Delete" className="icon" src={deleteImage} />
          </button>
        </div>
      </li>
    </>
  );
}
