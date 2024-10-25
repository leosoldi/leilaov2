import React from 'react';
import logo from '../../assets/PARTICIPE.png';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { Input } from '../../components/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  nome: z.string().nonempty('O campo Nome é obrigatório'),
});

type FormData = z.infer<typeof schema>;

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  return (
    <div
      className='w-full min-h-screen flex flex-col'
      style={{
        background:
          'linear-gradient(90deg, rgba(58, 51, 176) 20%, rgba(92, 60, 221) 100%, rgba(58, 51, 176) 80%)',
      }}
    >
      <div className='flex justify-center items-center py-4 text-white font-bold text-xl'>
        <FaCircleUser size={40} className='mr-3' />
        <span>Entre | Cadastre-se</span>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-center bg-slate-100 py-10'>
        <div className='lg:w-1/2 rounded-lg px-8'>
          <h4
            className='font-bold text-center text-4xl mb-10 mt-10'
            style={{ color: '#3131a4' }}
          >
            CADASTRO DE NOVA CONTA
          </h4>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <Input
              placeholder='Nome Completo'
              type='text'
              name='nome'
              id='nome'
              register={register}
              error={errors.nome?.message}
              label='Nome Completo'
            />

            <Input
              placeholder='CPF'
              type='text'
              name='cpf'
              id='cpf'
              register={register}
              error={errors.nome?.message}
              label='Nome CPF'
            />

            <Input
              placeholder='E-mail'
              type='text'
              name='email'
              id='email'
              register={register}
              error={errors.nome?.message}
              label='E-mail'
            />

            <Input
              placeholder='Telefone'
              type='text'
              name='phone'
              id='phone'
              register={register}
              error={errors.nome?.message}
              label='Telefone'
            />

            <Input
              placeholder='Senha'
              type='password'
              name='password'
              id='password'
              register={register}
              error={errors.nome?.message}
              label='Senha:'
            />

            <Input
              placeholder='Confirmar Senha'
              type='password'
              name='confirm_password'
              id='confirm_password'
              register={register}
              error={errors.nome?.message}
              label='Confirmar Senha'
            />
          </div>

          <div className="justify-center gap-28 mt-10">
            <button className="text-white py-2 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105"  style={{ background: 'linear-gradient(90deg, rgba(58, 51, 176) 60%, rgba(136, 132, 224) 100%, rgba(58, 51, 176) 100%)' }} > Cadastrar </button>
            <button> Limpar </button>
            <button> Login </button>
          </div>

        </div>
      </div>

      <div className='justify-center items-center flex flex-1 gap-8 text-white mt-4'>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
        <Link to='/quem-somos'>Quem Somos?</Link>
        <Link to='/regulamento'>Regulamento</Link>
        <Link to='/acessibilidade'>Acessibilidade</Link>
        <Link to='/seguranca-privacidade'>Segurança & Privacidade</Link>
        <Link to='/atendimento'>Atendimento</Link>
      </div>
    </div>
  );
}
