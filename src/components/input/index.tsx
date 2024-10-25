import { RegisterOptions, UseFormRegister} from 'react-hook-form'


interface InputProps{
    type: string;
    placeholder: string;
    name: string;
    id: string;
    register: UseFormRegister<any> 
    error?: string
    rules?: RegisterOptions
}



export function Input({ placeholder, type, name, id, register, error, rules }: InputProps) {
    return(
        <div>
            <input 
            className="w-full p-3 pl-5 border border-gray-300 rounded-full"
            placeholder={placeholder}
            type={type}
            id={id}
            {...register(name, rules)}
            />
            {error && <p className='text-red-600 ml-4 font-medium'>{error}</p>}
        </div>
    )
}