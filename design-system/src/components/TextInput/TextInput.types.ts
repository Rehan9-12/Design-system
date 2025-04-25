  export interface TextInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    icon?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    id?: string;
  }
  