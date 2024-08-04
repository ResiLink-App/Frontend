import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { UploadProps } from "../../../types/Interface";

export const CustomUpload: React.FC<UploadProps> = ({
  handleFileChange,
  label,
  image,
  handleClick,
  inputRef,
}) => {
  return (
    <>
      <section className="mb-2 flex items-center w-full flex-col">
        <div className="w-full">
          {label && <label className="text-neutral-400 text-sm font-semibold mb-2">{label} </label>}
          {image?.preview ? (
            <div onClick={handleClick} className="preview d-flex">
              <img src={image?.preview} className="w-full h-40" alt="property-img" />
            </div>
          ) : (
            <div className="mx-auto p-32 border-2 border-dashed border-[#eee] rounded-md bg-gray-100 h-46 relative cursor-pointer text-center" onClick={handleClick}>
              <div className="flex justify-center items-center">
                <i className="text-4xl text-[#a59f9f]">
                  <FaCloudUploadAlt />
                </i>
              </div>
              <h6>Drag & Drop file here or click to upload</h6>
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                name="image"
                onChange={handleFileChange}
                className="form-control shadow-none"
                accept="image/*"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
