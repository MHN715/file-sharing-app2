import "./LinksToCopy.css";

export default function LinksToCopy({ fileLink }) {
  return (
    <div className="links-to-copy">
      <div className="link-wrapper">
        <p className="link">https://google.com</p>
        <button className="copy-btn">Copy</button>
      </div>
      <div className="lin½-wrapper">
        <p className="link">https://google.com</p>
        <button className="copy-btn">Copy</button>
      </div>
      <div className="link-wrapper">
        <p className="link">https://google.com</p>
        <button className="copy-btn">Copy</button>
      </div>
    </div>
  );
}
