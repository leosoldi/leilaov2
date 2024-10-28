import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  value?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Propriedade opcional
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Propriedade opcional
}

export function Input({
  placeholder,
  type,
  name,
  id,
  register,
  error,
  rules,
  value,
  label,
  onBlur,
  onChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="m-3">
        {label}
      </label>
      <input
        className="w-full p-3 pl-5 border border-gray-300 rounded-full"
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        {...register(name, rules)}
        {...(onChange && { onChange })} // Somente adiciona onChange se ele existir
        {...(onBlur && { onBlur })}
      />
      {error && <p className="text-red-600 ml-4 font-medium">{error}</p>}
    </div>
  );
}
