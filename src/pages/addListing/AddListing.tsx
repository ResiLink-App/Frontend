import React, { useState } from 'react'
import { CustomInput } from '../../components/common/inputs/CustomInput'
import { CustomUpload } from '../../components/common/inputs/CustomUpload';
import { CustomTextArea } from '../../components/common/inputs/CustomTextArea';
import { ButtonBg } from '../../components/shared/buttons/Buttons';

const AddListing: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = () => {
        // const { name, value } = e.target;
        setFormData({ ...formData });
    };
    function handleClick(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <section className='w-full h-full overflow-y-scroll p-4 pb-40'>
            <section className='mb-5 flex justify-between items-center'>
                <section className='text-left py-4'>
                    <h2 className='text-2xl tracking-wide text-[#202224] font-bold'>Add Listing</h2>
                </section>
            </section>
            <section>
                <form action="">
                    <section className="w-full mb-4 grid grid-cols-3 gap-3">
                        <CustomInput
                            label={"Title"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"Property Type"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"Property Status"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"Property Price"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"Max Rooms"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"Country"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"City"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"Address"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                        <CustomInput
                            label={"Address"}
                            type={"text"}
                            name={"name"}
                            placeholder={"First Name"}
                            handleChange={handleChange}
                        />
                    </section>
                    <section className='w-full'>
                        <CustomTextArea
                            label={"Description"}
                            type={"text"}
                            name={"name"}
                            rows={6}
                            placeholder={"Describe your Listing"}
                            handleChange={handleChange}
                        />
                    </section>
                    <section className='w-full mb-10'>
                        <CustomUpload
                            label={"Image (*JPEG*, *PNG*, *JPG*)"}
                            // image={Image}
                            handleClick={handleClick}
                            handleFileChange={handleChange}
                        // inputRef={inputRef}
                        />
                    </section>
                    <section className="flex justify-center">
                        <section className='w-fit '>
                            <ButtonBg className='bg-bc px-10 py-3 w-fit'>Submit</ButtonBg>
                        </section>
                    </section>
                </form>
            </section>
        </section>
    )
}

export default AddListing