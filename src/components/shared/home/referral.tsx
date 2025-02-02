import React from "react";
import Heading from "./headingTitle";

const ExclusiveBenefits = () => {
  const handleShare = () => {
    const currentUrl = window.location.href;
    const message =
      "Looking for a vacant house to rent for your next home? Check out ResiLink, a website that seamlessly connects people with vacant houses at their convenience. Click the link to visit the ResiLink website: ";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      message + currentUrl
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="md:px-10 px-4 py-20">
      <section className="">
        <Heading
          heading="Client Benefits"
          subheading="Benefits for Our Clients"
        />
        <div className="pb-10 pt-3 text-center text-gray-500">
          <p className="md:text-lg font-medium mb-8 mt-2 text-base">
            After completing your property rental process on ResiLink, enjoy
            complimentary cleaning services to make your move stress-free.
          </p>
          <p className="md:text-lg font-medium mb-8 mt-2 text-base">
            It’s our way of saying thank you for trusting ResiLink with your
            dream home.
          </p>
        </div>
      </section>

      {/* Earning Steps Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <Heading
            heading="Earn with ResiLink"
            subheading="Earn quick cash with ResiLink in just 4 easy steps!"
          />
          <div className="mt-20 grid md:grid-cols-2 gap-10">
            {[
              {
                icon: <Locate />,
                title: "Locate apartment",
                desc: "Locate an available apartment for rent, such as one from a friend who's moving out.",
              },
              {
                icon: <Camera />,
                title: "Take pictures",
                desc: "Take pictures of the vacant apartment.",
              },
              {
                icon: <Send />,
                title: "Send pictures",
                desc: "Send the pictures to ResiLink's Customer Service Line.",
              },
              {
                icon: <Paid />,
                title: "Get paid",
                desc: "Get paid after the successful renting of the apartment.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-bc text-white">
                    {step.icon}
                  </div>
                  <p className="ml-16 leading-6 font-medium text-gray-900 font-Chalty text-xl">
                    {step.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {step.desc}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading subheading="Start Earning Now!" />
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            {/* <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4 pb-10 pt-3 mx-auto"> */}
            {[
              {
                title: "Refer and Earn",
                desc: "Invite your friends to use ResiLink! Earn rewards for every successful rental completed through your referral link.",
                button: (
                  <button
                    onClick={handleShare}
                    className="w-full cursor-pointer rounded-full inline-flex justify-center text-base font-medium leading-normal bg-bc px-10 py-3 text-white"
                  >
                    Refer Now
                  </button>
                ),
              },
              {
                title: "List Properties and Earn",
                desc: "Upload vacant properties as a caretaker, landlord, or student. Earn a percentage of the rent each time your property is rented.",
                button: (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.link/sfzgvg"
                    className="w-full cursor-pointer rounded-full inline-flex justify-center text-base font-medium leading-normal bg-bc px-10 py-3 text-white"
                  >
                    Post a Property
                  </a>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-[24px] relative bg-gray-700/5 p-4 flex flex-col gap-2 md:py-8"
              >
                <h3 className="font-Chalty text-xl mb-2 leading-6 font-medium text-gray-900">
                  {card.title}
                </h3>
                <p className="text-base text-gray-900">{card.desc}</p>
                {card.button}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExclusiveBenefits;

const Locate = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill={"none"}
    {...props}
    className="size-6 text-white"
  >
    <path
      d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M15.5 11H12M12 11H8.5M12 11V14.5M12 11L12 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Camera = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
    className="size-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
    />
  </svg>
);

const Send = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill={"none"}
    {...props}
    className="size-6 text-white"
  >
    <path
      d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M11.5 12.5L15 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Paid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
    className="size-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
    />
  </svg>
);
