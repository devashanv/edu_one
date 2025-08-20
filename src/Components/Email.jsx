import React, { useState } from "react";
import emailjs from "emailjs-com";
import EmailIcon from "../assets/email.svg";

export default function GradientCard() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_cv4ipp4",
        "template_5ggh3dr",
        { user_email: email },
        "dmvWovS7JIPnTHIB9"
      )
      .then(() => {
        return emailjs.send(
          "service_cv4ipp4",
          "template_8gj8034",
          { user_email: email },
          "dmvWovS7JIPnTHIB9"
        );
      })

      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
          setMessage("✅ Email sent successfully!");
          setEmail("");
        },
        (error) => {
          console.error("FAILED...", error);
          setMessage("❌ Failed to send email. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="flex justify-center items-center bg-gray-100 py-10">
      <div className="w-10/12 min-h-[380px] bg-gradient-to-r from-sky-200 via-white to-sky-200 rounded-2xl p-10 text-center text-black shadow-lg flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl mb-6 leading-snug">
          <span className="block">Enroll in EduOne and advance your</span>
          <span className="block">
            career with industry-relevant skills today
          </span>
        </h1>

        <p className="text-base md:text-lg mb-10 leading-relaxed">
          <span className="block">
            EduOne offers courses designed to equip you with the skills needed
            to excel
          </span>
          <span className="block">
            in your career and stay ahead in the industry
          </span>
        </p>

        <form
          onSubmit={sendEmail}
          className="flex flex-col md:flex-row items-center gap-4 max-w-xl w-full mx-auto"
        >
          <div className="flex items-center w-full bg-white rounded-full border px-4 py-3">
            <img
              src={EmailIcon}
              alt="Email Icon"
              className="w-6 h-6 mr-3 text-gray-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full outline-none text-gray-700 text-lg bg-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-sky-500 text-white px-8 py-3 rounded-full whitespace-nowrap hover:bg-sky-600 transition w-full md:w-auto"
          >
            {loading ? "Sending..." : "Join Us"}
          </button>
        </form>

        {message && <p className="mt-4 text-gray-700 font-medium">{message}</p>}
      </div>
    </section>
  );
}
