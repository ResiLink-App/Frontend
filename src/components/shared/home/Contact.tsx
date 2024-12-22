import { FormEvent, useState } from "react";
import { CustomInput } from "../../common/inputs/CustomInput"
import { ButtonBg } from "../buttons/Buttons";

const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = () => {
        // const { name, value } = e.target;
        setFormData({ ...formData });
    };
    function handleSubmit(_event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
    }

    return (
        <section id='listings' className='bg-white md:px-10 px-4 py-20'>
            <section className="w-full text-center">
                <span className="uppercase text-bc text-base font-medium tracking-widest">
                    Have you got issues?
                </span>
                <h1
                    className="text-center font-semibold text-black md:text-4xl text-lg py-3 capitalize"
                >Contact Us</h1>
            </section>
            <section className="w-100 py-10 lg:px-20 px-4">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="w-full flex gap-5">
                        <div className="w-1/2">
                            <CustomInput
                                label={"First Name"}
                                type={"text"}
                                name={"name"}
                                placeholder={"First Name"}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <CustomInput
                                label={"Last Name"}
                                type={"text"}
                                name={"lastName"}
                                placeholder={"Last Name"}
                                handleChange={handleChange}
                            />
                        </div>
                    </div>
                    <CustomInput
                        label={"Email"}
                        type={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        handleChange={handleChange}
                    />
                    <CustomInput
                        label={"Subject"}
                        type={"text"}
                        name={"subject"}
                        placeholder={"Subject"}
                        handleChange={handleChange}
                    />
                    <CustomInput
                        label={"Message"}
                        type={"textBro. Listen to yourself. Brazil. You guys are a joke. "}
                        name={"message"}
                        placeholder={"What are you telling us?"}
                        cols={10}
                        rows={10}
                        handleChange={handleChange}
                    />
                    <div className="w-full flex justify-center mt-5">
                        {/* {!loading ? ( */}
                        <section className="w-fit">
                            <ButtonBg className='bg-bc px-5 py-4'>Send Message
                            </ButtonBg>
                        </section>
                        {/* ) : (
                            <ButtonDefault>
                                <RoundLoader />
                            </ButtonDefault>
                        )} */}
                    </div>
                </form>
            </section>
        </section>
    )
}

export default Contact