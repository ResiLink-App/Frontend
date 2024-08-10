export interface ButtonProps {
  children: React.ReactNode;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  bgColor?: string;
}

export interface InputProps {
  label: string;
  handleChange: any;
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
  };
  user: {
    loading: boolean;
    data: RegisterUserResponse | null;
    error: string | null;
    token: string | null;
    isLoggedIn: boolean;
  }
  account: {
    data: any, 
    user: object | null, 
    uLoading: boolean, 
    status: string | null, 
    error: string | null
  }
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

export interface RegisterUserData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface ToastOptionsData {
  position: string,
  autoClose: string,
  pauseOnHover: boolean,
  draggable: boolean,
  theme: string,
};

// src/types/userTypes.ts

// Type for user registration request payload
export interface RegisterUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Type for user registration response
export interface RegisterUserResponse {
  token: string;
  message: string;
  status: boolean;
  // Add other fields if needed
}

export interface HandleChangeData {
  target: {
    name: string;
    value: string;
  };
}