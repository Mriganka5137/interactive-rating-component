import thank from "./images/illustration-thank-you.svg";

function ThankYou({ rating }) {
  return (
    <div className="thank-you">
      <img src={thank} alt="thank you" />
      <p className="rate-text">You selected {rating} out of 5</p>
      <h2 className="compliment">Thank You!</h2>
      <p className="compliment-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
