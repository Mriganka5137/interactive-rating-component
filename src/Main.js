import Description from "./Description";
import star from "./images/icon-star.svg";

const rating = [1, 2, 3, 4, 5];

function Main({ setRating, setSubmit, rated }) {
  function handleRating(item) {
    setRating(item);
  }

  return (
    <>
      <img src={star} className="icon" alt="star icon" />
      <Description />
      <div className="list">
        {rating.map((rate, i) => (
          <button
            // style={{ backgroundColor: rate === rated ? "#fb7413" : "#252d37" }}
            className={rate !== rated ? "list-item" : "list-item-selected"}
            value={rate}
            key={i}
            onClick={() => {
              handleRating(rate);
            }}
          >
            <span className="list-item-span">{rate}</span>
          </button>
        ))}
      </div>

      <button className="btn" onClick={setSubmit}>
        SUBMIT
      </button>
    </>
  );
}

export default Main;
