import Button from "../Button/Button";
import img from '../assets/img/contact.jpg'

const Contact = () => {
  const backgroundColor = `bg-brightColor`
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <form className="w-full lg:w-2/5 space-y-5 bg-[#f2f2f2] p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center">contact Form</h1>
          <div className="flex flex-col">
            <label htmlFor="userName">Full Name</label>
            <input className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter your name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userName">Email</label>
            <input className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userEmail"
              id="userEmail"
              placeholder="Enter your email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userMessage">Message</label>
            <textarea name="userMessaage" id="userName" cols="30" rows="3"></textarea>
          </div>

          <div className="flex flex-row justify-center">
            <Button title='Submit' backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className="flex flex-col items-center w-full lg:w-2/4 my-5">
          <img className="rounded-lg" src={img} alt="" />
          <p className="text-center text-sm pt-4 text-[#898888]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur saepe qui optio aliquid commodi repellat quasi, assumenda id earum quod!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;