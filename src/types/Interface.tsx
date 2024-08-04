export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  bgColor?: string;
}

export interface InputProps {
  label: string;
  handleChange: () => void;
  type?: string;
  placeholder?: string;
  name?: string;
  cols?: number;
  rows?: number;
}

export interface TextAreaProps {
  label: string;
  handleChange: () => void;
  type?: string;
  placeholder?: string;
  name?: string;
  cols?: number;
  rows?: number;
}

export interface SelectProps {
  label: string;
  handleChange: () => void;
  type?: string;
  placeholder?: string;
  name?: string;
  options?: any;
}

export interface UploadProps {
  handleFileChange: () => void;
  label: string;
  image?: {
    preview?: string
  }
  handleClick: () => void;
  inputRef?: string
}

export interface AccordionItem {
  title: string;
  icon: React.ReactNode;
  content: string;
  isOpen?: boolean;
}

export interface LogoProps {
  color?: string
}

export interface RootState {
  action: {
    sidenav: boolean;
    topnav: boolean;
    // Add other properties if needed
  };
}

export interface ListingProps {
  propList: {
    displayImage: string,
    listingType: string,
    amount: string,
    rentalPeriod: string,
    propertyName: string,
    location: string,
    bedrooms: number,
    bathrooms: number,
    sqFt: number,
    garage: number,
    agentInCharge: {
      title: string,
      firstName: string,
      profilePic: string
    },
    postedDate: string
  };
}
