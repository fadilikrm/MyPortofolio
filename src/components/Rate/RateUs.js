import React, { useState } from "react";
import Particle from "../Particle";
import { Container } from "react-bootstrap";

const RateUs = () => {
  const [emailValue, setEmailValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [submittedComment, setSubmittedComment] = useState(null);

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lakukan logika pengiriman komentar ke server atau penyimpanan komentar di sini

    // Setelah pengiriman komentar berhasil, simpan komentar yang dikirim
    setSubmittedComment({
      email: emailValue,
      comment: commentValue,
    });

    // Reset nilai email dan komentar setelah pengiriman
    setEmailValue("");
    setCommentValue("");
  };

  return (
    <Container>
    <Particle/>
    <div className="rate-head">
      <h2 className="rate-h2">Comment</h2>
      <form onSubmit={handleSubmit}>
        <label className="rate-label">Email:</label>
        <br />
        <input
          className="rate-input"
          type="email"
          placeholder="Masukkan alamat email"
          value={emailValue}
          onChange={handleEmailChange}
        />
        <br />
        <label className="rate-label">Komentar:</label>
        <br />
        <textarea
          className="rate-textarea"
          placeholder="Masukkan komentar Anda"
          value={commentValue}
          onChange={handleCommentChange}
        ></textarea>
        <br />
        <button className="rate-button" type="submit">Kirim Komentar</button>
      </form>
      {submittedComment && (
        <div className="submitted-comment">
          <h3 className="submitted-comment-h3">Komentar Terkirim</h3>
          <p className="submitted-comment-p">Email: {submittedComment.email}</p>
          <p className="submitted-comment-p">Komentar: {submittedComment.comment}</p>
        </div>
      )}
    </div>
    <br/>
    <br/>
    </Container>
  );
};

export default RateUs;
