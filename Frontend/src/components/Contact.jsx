import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please provide all details.");
      return;
    }

    setLoading(true);

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      await emailjs.send(
        "service_gegbcal",
        "template_hxb978v",
        templateParams,
        "LLIuBLLtpfqS5eDsJ"
      );

      const { data } = await axios.post(
        "https://gym-backend-7umm.onrender.com/send/mail",
        templateParams,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

