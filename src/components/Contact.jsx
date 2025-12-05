import React from "react";
import "./Contact.css";
import useReveal from "./useReveal";
import ModelViewer from "./ModelViewer";

export default function Contact() {
  const revealRef = useReveal();

  return (
    <section className="contact-cosmic reveal" id="contact" ref={revealRef}>
      <div className="dust-layer"></div>
      <div className="dust-layer2"></div>

      <h2 className="contact-title">reach me beyond the stars ✦</h2>
      <p className="contact-sub">
        let’s create something ethereal together — stories that drift between
        worlds and dreams.
      </p>

      <div className="contact-wrapper">
        {/* form left */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Your message has been sent into the void — I’ll find it soon ♡");
          }}
        >
          <input type="text" placeholder="your name" required />
          <input type="email" placeholder="your email" required />
          <textarea placeholder="your message" rows="5" required></textarea>
          <button type="submit" className="send-btn">send</button>
        </form>

        {/* 3d model right */}
        <div className="contact-model">
          <ModelViewer />
        </div>
      </div>

      <div className="contact-socials">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">instagram</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin</a>
        <a href="mailto:yourmail@example.com">email</a>
      </div>
    </section>
  );
}
