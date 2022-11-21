import { useState, useContext } from "react";
import "./LinksToCopy.css";
import ContextStates from "../../context/ContextStates";

export default function LinksToCopy() {
  const { fileLinks } = useContext(ContextStates);

  async function copyToClipBoard(e) {
    const copiedMessage = e.target.nextElementSibling;
    const currentLink = e.target.attributes[0].value;

    if (!navigator.clipboard) {
      console.log("Clipboard API not available");
      return;
    }
    try {
      await navigator.clipboard.writeText(currentLink);
      copiedMessage.textContent = "Copied to clipboard";
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  }

  return (
    <div className="links-to-copy">
      <h3>Your links:</h3>
      {fileLinks.map((link, index) => {
        return (
          <div className="link-wrapper" key={index}>
            <p className="link">{link}</p>
            <div className="btn-copyText-wrapper">
              {" "}
              <button
                data-msg={link}
                onClick={copyToClipBoard}
                className="copy-btn"
              >
                Copy link
              </button>
              <div className="copiedToClipbardMsg"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
