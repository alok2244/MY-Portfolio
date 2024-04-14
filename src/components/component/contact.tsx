import emailjs from '@emailjs/browser';
import { useState } from 'react';


const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_pr1xlwg";
    const publicID = "qEhBA3mGrrjXyn6LP";
    const templetID = "template_br6whb8";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Alok",
      form_message: message,
    };

    emailjs.send(serviceID, templetID, templateParams, publicID)
      .then((response) => {
        console.log("Email sent ", response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
      });
  };

  return (
    <div className="">
      <div className="z-[10] mx-auto w-full max-w-xl md:max-w-2xl lg:max-w-3xl flex-wrap items-center space-y-2">
        <form onSubmit={handleSubmit} className="grid gap-4 justify-center bg-gray-200 py-8  rounded-lg">
          <div className="grid gap-2 w-full">
            <label className='font-bold text-xl' htmlFor="name">Name</label>
            <input
              className="w-[500px] py-4 px-3 rounded-lg"
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="grid gap-2">
            <label className='font-bold text-xl' htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="rounded-lg w-[500px] py-4 px-3"
            />
          </div>
          <div className="grid gap-2">
            <label className='font-bold text-xl' htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
              className="w-[500px] h-[200px] py-4 px-3 rounded-lg"
            />
          </div>
          <div className="flex justify-center py-2 cursor-pointer   transition duration-300 hover:bg-gray-800 hover:text-white rounded-md border-[1px] border-black">
            <input
              type="submit"
              value="Send Message"
              className=" cursor-pointer"
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;
