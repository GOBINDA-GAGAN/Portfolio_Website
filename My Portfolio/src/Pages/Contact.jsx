import { PiDotsThreeOutlineThin } from "react-icons/pi";
import Title from "../Components/Title";
import { useState } from "react";
import { GrSend } from "react-icons/gr";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", contactNo: "", message: "" });
  };

  return (
    <div className="bg-black">
      <Title
        title={"CONTACT US"}
        subtitle={
          "Project is a temporary effort designed to achieve a unique goal or result."
        }
      />

      <div className=" p-11">
        <div className=" w-6/12  mx-auto bg-slate-300 rounded-xl">
          <div
            className=" flex justify-between items-center bg-slate-500  p-3 rounded-t-xl
      "
          >
            <div className="flex gap-5">
              <span className=" bg-red-600 rounded-full h-3 w-3"></span>
              <span className=" bg-yellow-500 rounded-full h-3 w-3"></span>
              <span className=" bg-green-500 rounded-full h-3 w-3"></span>
            </div>
            <div>
              <PiDotsThreeOutlineThin />
            </div>
          </div>

          <div className="p-2 flex gap-1 w-full ">
            <div className=" p-5 w-1/2">
              <div>
                <h2 className="text-pink-600 text-4xl font-bold leading-tight">
                  CONTACT
                </h2>
                <h2 className="text-pink-600 text-4xl font-bold leading-tight mb-4">
                  ME
                </h2>
                <div className=" mb-6">
                  <img
                    src="/public/logo 2.png"
                    alt=""
                    srcset=""
                    className=" w-96 h-72 rounded-md object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500"></p>
              </div>
            </div>

            <div className=" p-5 w-1/2">
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="NAME"
                    className="w-full border-b-2 border-gray-400 focus:outline-none py-2 text-gray-700  rounded-md px-1"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="EMAIL"
                    className="w-full border-b-2 border-gray-400 focus:outline-none py-2 text-gray-700  rounded-md px-1"
                    required
                  />
                  <input
                    type="text"
                    name="contactNo"
                    value={form.contactNo}
                    onChange={handleChange}
                    placeholder="CONTACT NO"
                    className="w-full border-b-2 border-gray-400 focus:outline-none py-2 text-gray-700  rounded-md px-1"
                    required
                  />
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="MESSAGE"
                    className="w-full border-b-2 border-gray-400 focus:outline-none py-2 text-gray-700 h-24 rounded-md px-1"
                    required
                  ></textarea>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="bg-pink-600 font-semibold text-lg  px-3 py-2 rounded-md hover:bg-pink-700 flex items-center gap-3"
                  >
                    SEND
                    <GrSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
