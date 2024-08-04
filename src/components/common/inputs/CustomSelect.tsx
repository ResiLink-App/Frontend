import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { SelectProps } from "../../../types/Interface";

export const CustomSelect: React.FC<SelectProps> = ({
  handleChange,
  label,
  options,
  name,
}) => {
  return (
    <>
      <section>
        <div className="w-100">
          {label && <label>{label} </label>}
          <select name={name} onChange={handleChange}>
            {options?.map((data: { value: string | number | readonly string[] | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, id: Key | null | undefined) => (
              <option key={id} value={data?.value}>{data?.text}</option>
            ))}
          </select>
        </div>
      </section>
    </>
  );
};
