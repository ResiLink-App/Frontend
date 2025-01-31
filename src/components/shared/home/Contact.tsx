import { useState } from "react";
import { CustomInput } from "../../common/inputs/CustomInput";
import { ButtonBg } from "../buttons/Buttons";
import React from "react";
import { useForm } from "@formspree/react";
import { SuccessModal } from "./success-modal";

const Contact: React.FC = () => {
  // SHOULD CONSIDER PUTTING THE FORM ID: mqaeegka IN THE .ENV
  const [state, handleSubmit] = useForm("mqaeegka");
  const [open, setOpen] = useState(false);

  if (state.succeeded) {
    setOpen(true);
    return <SuccessModal open={open} onOpenChange={setOpen} />;
  }
  const loading = state.submitting;

  return (
    <section id="contact" className="bg-white md:px-10 px-4 py-20">
      <section className="w-full text-center">
        <span className="uppercase text-bc text-base font-medium tracking-widest">
          Have you got issues?
        </span>
        <h1 className="text-center font-semibold text-black md:text-4xl text-lg py-3 capitalize">
          Contact Us
        </h1>
      </section>
      <section className="w-full py-10 lg:px-20 px-4">
        <form onSubmit={handleSubmit}>
          <div className="w-full flex gap-5">
            <div className="w-1/2">
              <CustomInput
                label="First Name"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <CustomInput
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <CustomInput
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
          />
          <CustomInput
            label="Subject"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <CustomInput
            label="Message"
            type="textarea"
            name="message"
            placeholder="What are you telling us?"
            cols={30}
            rows={10}
          />
          <div className="w-full flex justify-center mt-5">
            <section className="w-fit">
              <ButtonBg
                className="bg-bc px-5 py-4 text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <ButtonLoaderWithBg />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                  </>
                )}
              </ButtonBg>
            </section>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;

export const ButtonLoaderWithBg = () => {
  return (
    <div className="flex items-center justify-center rounded-full bg-white/5 transition-opacity duration-300 h-6 w-6">
      <svg
        className="h-6 w-6 animate-spin text-white"
        fill="none"
        viewBox="-4 -4 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="stroke-current opacity-25"
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
        ></circle>
        <path
          className="fill-current opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export const ButtonLoader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="size-6 animate-spin"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    </svg>
  );
};

export const ButtonLoaderWithShape = () => {
  return (
    <div className="w-4 h-4 border-2 border-white rounded-full animate-spin relative ml-2">
      <div className="w-3 h-3 absolute bg-neutral-900 transition-colors group-hover:bg-zinc-800 z-10 top-1 left-1"></div>
    </div>
  );
};

export const SmallSpinner = ({ className }: { className?: string }) => {
  return (
    <>
      <div className="flex items-center h-full outline-none">
        <span className="sr-only">Loading</span>
        <svg
          className={`w-6 h-6 text-black stroke-current animate-spin ${className}`}
          viewBox="0 0 24 24"
        >
          <g
            stroke-linecap="round"
            strokeWidth="2"
            fill="red"
            stroke-linejoin="round"
          >
            <path d="M8.56 3.69l0-.01c-1.1.45-2.09 1.11-2.93 1.94"></path>
            <path d="M3.69 8.56l-.01 0c-.46 1.09-.69 2.25-.69 3.43"></path>
            <path d="M3.69 15.44l0 0c.45 1.09 1.11 2.08 1.95 2.92"></path>
            <path d="M8.56 20.31l0 0c1.09.45 2.25.68 3.43.68"></path>
            <path d="M15.44 20.31l-.01 0c1.09-.46 2.08-1.12 2.92-1.95"></path>
            <path d="M20.31 15.44l-.01 0c.45-1.1.68-2.26.69-3.44"></path>
            <path d="M20.31 8.56l0 0c-.46-1.1-1.12-2.09-1.95-2.92"></path>
            <path d="M15.44 3.69l-.01-.01c-1.1-.46-2.26-.69-3.44-.69"></path>
          </g>
        </svg>
      </div>
    </>
  );
};
