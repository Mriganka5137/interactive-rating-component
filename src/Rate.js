function Rate({ item, setRating }) {
  function handleRating(item) {
    setRating(item);
  }

  return (
    <button
      className="list-item"
      // className={selected ? "list-item list-item-selected" : "list-item"}
      value={item}
      onClick={() => {
        handleRating(item);
      }}
    >
      <span className="list-item-span">{item}</span>
    </button>
  );
}

export default Rate;
