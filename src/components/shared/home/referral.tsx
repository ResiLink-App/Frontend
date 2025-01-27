const ExclusiveBenefits = () => {
  return (
    <section className="md:px-10 px-4 py-20">
      <>
        <section className="w-full text-center">
          <h3 className="uppercase text-bc text-base font-medium tracking-widest">
            Client Benefits
          </h3>
          <h2 className="text-center font-medium text-black text-3xl md:text-4xl mb-4 capitalize">
            Benefits for Our Clients
          </h2>
        </section>

        <div className="pb-10 pt-3">
          <p className="text-para text-center text-sm md:text-lg font-medium mb-8">
            After completing your property rental process on ResiLink, enjoy
            complimentary cleaning services to make your move stress-free.
          </p>
          <p className="text-para text-center text-sm md:text-lg font-medium mb-8">
            It’s our way of saying thank you for trusting ResiLink with your
            dream home.
          </p>
        </div>
      </>

      {/* Referral Program Section */}
      <section className="w-full flex justify-center md:justify-start">
        <div>
          <h2 className="text-center font-medium text-black text-3xl md:text-4xl mb-4 capitalize">
            Earn with ResiLink
          </h2>
          <div className="flex flex-wrap flex-col md:flex-row items-center justify-center  gap-4 pb-10 pt-3 mx-auto">
            <div className="rounded-[24px] md:w-[34%] bg-[#6f79832b]/5 p-4 flex flex-col gap-2 md:py-8">
              <h3 className="font-Chalty text-xl mb-2">Refer and Earn</h3>
              <p className="">
                Invite your friends to use ResiLink! Earn rewards for every
                successful rental completed through your referral link.
              </p>
              <button className="w-full cursor-pointer rounded-full items-center justify-center inline-flex text-center text-base font-medium leading-normal bg-bc px-10 py-3 text-white">
                Refer Now
              </button>
            </div>

            <div className="rounded-[24px] md:w-[34%] bg-[#6f79832b]/5  p-4 flex flex-col gap-2  md:py-8">
              <h3 className="font-Chalty text-xl mb-2">
                List Properties and Earn
              </h3>
              <p className="">
                Upload vacant properties as a caretaker, landlord, or student.
                Earn a percentage of the rent each time your property is rented.
              </p>
              <button className="w-full cursor-pointer rounded-full items-center justify-center inline-flex text-center text-base font-medium leading-normal bg-bc px-10 py-3 text-white">
                Post a Property
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExclusiveBenefits;
