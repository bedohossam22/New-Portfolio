import image from "../Assets/knife2.png";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [tymessage, settymessage] = useState(false);
  const [failmessage, setfailmessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.user_name.value && form.current.user_email.value && form.current.message.value) {
      emailjs.sendForm('service_hgdcfju', 'template_oorm5ca', form.current, 'B5vIYm_gPggvMz-zc')
        .then((result) => {
          settymessage(true);
          form.current.reset();
        }, (error) => {
          setfailmessage(true);
        });
    } else {
      console.log("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <h2 className="free">Please feel Free to share your <span>Critics</span></h2>
      <div className="contact" id="contact">
        <div className="elfinaly">
          <h1>Contact me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required className="Orewa" />
            <label>Email</label>
            <input type="email" name="user_email" required className="Orewa" />
            <label>Message</label>
            <textarea name="message" required></textarea>
            <input className="far" type="submit" value="Send" />
          </form>
        </div>
        <div className="flex-down">
          <img src={image} alt="penguing" />
          {tymessage && <span>🗸 Message Sent!</span>}
          {failmessage && <span id="fail">Message Failed!</span>}
          <p>Seriously, your feedback will be greatly appreciated as it will assist me in improving. Say Hi!</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
