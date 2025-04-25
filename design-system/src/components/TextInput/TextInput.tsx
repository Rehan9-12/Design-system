import { TextInputProps } from './TextInput.types';

export const TextInput = ({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  error = false,
  helperText,
  icon,
  size = 'md',
  id,
}: TextInputProps) => {
  let sizeClass = '';
  if (size === 'sm') sizeClass = 'px-2 py-1 text-sm';
  else if (size === 'lg') sizeClass = 'px-4 py-3 text-lg';
  else sizeClass = 'px-3 py-2 text-base'; // default md

  let baseClass =
    'rounded border w-full outline-none transition-all ' + sizeClass;

  if (disabled) {
    baseClass += ' bg-gray-100 cursor-not-allowed';
  }

  if (error) {
    baseClass += ' border-red-500';
  } else {
    baseClass += ' border-gray-300';
  }

  if (icon) {
    baseClass += ' pl-10';
  }

  const helperTextColor = error ? 'text-red-500' : 'text-gray-500';

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3">{icon}</span>}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={error}
          className={baseClass}
        />
      </div>
      {helperText && (
        <span className={`text-sm ${helperTextColor}`}>{helperText}</span>
      )}
    </div>
  );
};
