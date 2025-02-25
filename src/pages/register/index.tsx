import React, { useState } from 'react';
import logo from '../../assets/PARTICIPE.png';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { Input } from '../../components/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { GiArchiveRegister } from "react-icons/gi";
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

// Esquema de validação usando zod
const schema = z.object({
  nome: z.string().nonempty('O campo Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  celular: z.string().nonempty('O campo Celular é obrigatório')
  .min(11, 'Celular contém 11 digitos com o DDD'),
  cpf: z
    .string()
    .nonempty('O campo CPF é obrigatório')
    .refine((value) => cpfValidator.isValid(value), {
      message: 'CPF inválido',
    }),
  cep: z
    .string()
    .nonempty('O campo CEP é obrigatório')
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido, o formato correto é 12345-678'),
  rua: z.string().nonempty('O campo Rua é obrigatório'),
  bairro: z.string().nonempty('O campo Bairro é obrigatório'),
  cidade: z.string().nonempty('O campo Cidade é obrigatório'),
  estado: z.string().nonempty('O campo Estado é obrigatório'),
  password: z
    .string()
    .nonempty('O campo Senha é obrigatório')
    .min(8, 'A senha deve ter no mínimo 8 caracteres'),
  confirm_password: z
    .string()
    .nonempty('O campo Confirmar Senha é obrigatório')
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas não coincidem",
  path: ["confirm_password"],
});

type FormData = z.infer<typeof schema>;

export function Register() {
  const [cpfDisplay, setCpfDisplay] = useState(''); 
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cepError, setCepError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0); // Força da senha

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  //Força da senha
  const evaluatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  // Verifica mudanças na senha e avalia a força
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const progressElement = document.getElementById("progress");
    if (progressElement) {
      progressElement.style.display = password ? "block" : "none";
    }
  
    setValue('password', password);
    evaluatePasswordStrength(password);
  };
  

  async function viacep(cep: string) {
    const api = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await fetch(api);
      const data = await response.json();
      if (data.erro) {
        setCepError('CEP inválido ou não encontrado');
        setRua('');
        setBairro('');
        setCidade('');
        setEstado('');
      } else {
        setCepError('');
        setRua(data.logradouro || '');
        setBairro(data.bairro || '');
        setCidade(data.localidade || '');
        setEstado(data.uf || '');
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      setCepError("Erro ao buscar o CEP");
    }
  }

    // Função para aplicar a máscara ao campo de CEP
    function handleCepChange(e: React.ChangeEvent<HTMLInputElement>) {
      const value = e.target.value.replace(/\D/g, ''); 
      const formattedCep = value.length > 5 ? `${value.slice(0, 5)}-${value.slice(5, 8)}` : value; 
      e.target.value = formattedCep;
      setValue('cep', formattedCep);
    }

    // Função para buscar o endereço ao perder o foco do campo de CEP
    function handleCepBlur(e: React.ChangeEvent<HTMLInputElement>) {
      const cepValue = e.target.value.replace(/\D/g, '');
      if (cepValue.length === 8) {
        viacep(cepValue); 
      } else {
        setCepError('CEP inválido, deve conter 8 dígitos');
      }
    }

  

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, ''); 
    let formattedValue = value;
    if (value.length > 3) formattedValue = formattedValue.slice(0, 3)  + '.' + formattedValue.slice(3);
    if (value.length > 6) formattedValue = formattedValue.slice(0, 7)  + '.' + formattedValue.slice(7);
    if (value.length > 9) formattedValue = formattedValue.slice(0, 11) + '-' + formattedValue.slice(11, 13);
  
    setCpfDisplay(formattedValue); 
    setValue('cpf', value); 
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 11) value = value.slice(0, 11); 
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    setValue('celular', value); 
  };

  const password = watch('password');


  function handleRegister(data: FormData) {
    
    console.log(data)
    alert('email:' + data.email + 'senha:' + data.password)
  }

  
  return (
    <div className='w-full min-h-screen flex flex-col' style={{ background: 'linear-gradient(90deg, rgba(58, 51, 176) 20%, rgba(92, 60, 221) 100%, rgba(58, 51, 176) 80%)' }}>
      <div className='flex justify-center items-center py-4 text-white font-bold text-xl'>
        <FaCircleUser size={40} className='mr-3' />
        <span>Entre | Cadastre-se</span>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center bg-slate-100 py-10'>
        <div className='lg:w-1/2 rounded-lg px-8'>
          <h4 className='font-bold text-center text-4xl mb-10 mt-10 flex flex-1 justify-center gap-4 items-center' style={{ color: '#3131a4' }}>
            CADASTRO DE NOVA CONTA <GiArchiveRegister size={60} />
          </h4>
          <form onSubmit={handleSubmit(handleRegister)}>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <Input
                  placeholder='Nome Completo'
                  type='text'
                  name='nome'
                  id='nome'
                  register={register}
                  error={errors.nome?.message}
                  label='Nome Completo:'
                />

                <Input
                  placeholder='Apelido'
                  type='text'
                  name='apelido'
                  id='apelido'
                  register={register}
                  label='Apelido (Como deseja ser chamado)'
                />

                <Input
                  placeholder='E-mail'
                  type='text'
                  name='email'
                  id='email'
                  register={register}
                  error={errors.email?.message}
                  label='E-mail:'
                />

              <Input          
                  placeholder='Celular'
                  type='text'
                  name='celular'
                  id='celular'
                  register={register}
                  error={errors.celular?.message}
                  label='Celular:'
                  onChange={handlePhoneChange}
                />  


                <Input
                  placeholder='CPF'
                  type='text'
                  name='cpf'
                  id='cpf'
                  register={register}
                  error={errors.cpf?.message}
                  label='CPF:'
                  value={cpfDisplay} 
                  onChange={handleCpfChange} 
                />

                <Input
                  placeholder='CEP'
                  type='text'
                  name='cep'
                  id='cep'
                  register={register}
                  error={errors.cep?.message || cepError}
                  label='CEP:'
                  onBlur={handleCepBlur}
                  onChange={handleCepChange}
                />

                <Input
                  placeholder='Rua'
                  value={rua}
                  type='text'
                  name='rua'
                  id='rua'
                  register={register}
                  error={errors.rua?.message}
                  label='Rua:'
                />

                <Input
                  placeholder='Bairro'
                  value={bairro}
                  type='text'
                  name='bairro'
                  id='bairro'
                  register={register}
                  error={errors.bairro?.message}
                  label='Bairro:'
                />

                <Input
                  placeholder='Cidade'
                  value={cidade}
                  type='text'
                  name='cidade'
                  id='cidade'
                  register={register}
                  error={errors.cidade?.message}
                  label='Cidade:'
                />
              
                <Input
                  placeholder='Estado'
                  value={estado}
                  type='text'
                  name='estado'
                  id='estado'
                  register={register}
                  error={errors.estado?.message}
                  label='Estado:'
                />

                <Input
                  placeholder='Número'
                  value={estado}
                  type='text'
                  name='numero'
                  id='numero'
                  register={register}
                  label='Número:'
                />

                <Input
                  placeholder='Complemento'
                  value={estado}
                  type='text'
                  name='complemento'
                  id='complemento'
                  register={register}
                  label='Complemento:'
                />

                <Input
                  placeholder='Senha'
                  type='password'
                  name='password'
                  id='password'
                  register={register}
                  error={errors.password?.message}
                  label='Senha:'
                  onChange={handlePasswordChange}
                />

                <Input
                  placeholder='Confirmar Senha'
                  type='password'
                  name='confirm_password'
                  id='confirm_password'
                  register={register}
                  error={errors.confirm_password?.message}
                  label='Confirmar Senha:'
                />

            <div className="w-full mt-2" id='progress' style={{display: 'none'}}>
                <label>Força da Senha:</label>
                <div className="w-full h-2 bg-gray-200 mt-1">
                  <div
                    className={`h-full ${passwordStrength >= 3 ? 'bg-green-500' : passwordStrength === 2 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${(passwordStrength / 4) * 100}%` }}
                  />
                </div>
            </div>

          </div>

            <div className="flex justify-center mt-10">
                <button type="submit" className="rounded-md bg-blue-600 py-3 px-6 border border-transparent text-center text-lg text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                  Cadastrar
                </button>
            </div>
          </form>
          <div className='flex flex-col items-start'>
            <Link to='/' className='text-sky-700 text-lg'>Voltar ao Site</Link>
            <Link to='/login' className='text-sky-700 text-lg'>Já tem conta? Faça seu login!</Link>
          </div>
        </div>
        
        
      </div>
        <div className='justify-center items-center flex flex-1 gap-8 text-white mt-4'>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/quem-somos">
            Quem Somos?
          </Link>
          <Link to="/regulamento">
            Regulamento
          </Link>
          <Link to="/acessibilidade">
            Acessibilidade
          </Link>
          <Link to="/seguranca-privacidade">
            Segurança & Privacidade
          </Link>
          <Link to="/atendimento">
            Atendimento
          </Link>
        </div>
    </div>
  );
}
