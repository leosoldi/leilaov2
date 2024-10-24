import { Container } from '../../components/container';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import img_smarth4 from '../../assets/smarthphones/smarth4.png';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from '../../assets/PARTICIPE.png';

export function Login() {
  const [finalizedProducts] = useState([
    { id: 1, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 78, available: false, image: img_smarth4 },
    { id: 2, name: "iPhone 16 Apple 128GB", price: 896.36, originalPrice: 5333.90, discount: 75, available: false, image: img_smarth4 },
    { id: 3, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 78, available: false, image: img_smarth4 }
  ]);

  return (
    <div className='w-full min-h-screen bg-purple-800 flex flex-col'>
      <div className='flex justify-center items-center py-4 text-white font-bold text-xl'>
        <FaCircleUser size={40} className='mr-3' />
        <span>Entre | Cadastre-se</span>
      </div>

      <Container >
        <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12 w-full">
          {/* Seção do Carrossel */}
          <div className="lg:w-1/2 w-full p-4 rounded-lg">
            <h4 className="font-bold mb-6 text-3xl text-center text-purple-700">Últimos Leilões</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap- justify-center items-center">
              {finalizedProducts.map(product => (
                <div key={product.id} className="rounded-lg bg-white p-5 shadow-2xl flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
                  <div className="w-50 h-42 sm:w-50 sm:h-50 ">
                    <img src={product.image} alt="smarthphone" className="object-contain w-full h-full" />
                  </div>
                  <div className="font-sans text-sm font-semibold text-left mt-4 min-h-[100px]">
                    <span>{product.name}, Tela 6,1", Black</span>
                    <p className="font-normal line-through">R$ {product.originalPrice.toLocaleString('pt-BR')}</p>
                    <div className="flex items-center space-x-2">
                      <p className='italic'>Leiloado por</p>
                      <div
                        className="inline-block px-3 py-1 text-white font-bold text-lg rounded-full"
                        style={{ background: 'linear-gradient(90deg, rgba(205,92,223,1) 20%, rgba(64,41,179,1) 100%, rgba(210,92,223,1) 100%)' }}
                      >
                        -{product.discount}%
                      </div>
                    </div>
                    <p
                      className="font-extrabold text-2xl bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #783DC3, #B83280)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      R$ {product.price.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Login */}
          <div className="w-full lg:w-1/3 p-4 rounded-lg m-5 bg-white shadow-lg">
            <h4 className="font-bold text-center text-3xl mb-6 text-purple-700">Entre na sua conta</h4>
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="block mb-2">E-mail</label>
                <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2">Senha</label>
                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <p className="text-right text-normal">
                <Link to="/forgot-password" className="text-purple-600">Esqueceu a senha?</Link>
              </p>
              <button type="submit" className="bg-purple-600 text-white py-2 rounded-md font-bold transition duration-300 ease-in-out transform hover:scale-105" style={{ background: 'linear-gradient(90deg, rgba(205,92,223,1) 20%, rgba(64,41,179,1) 100%, rgba(210,92,223,1) 100%)' }}>ENTRE</button>
              <div className="flex items-center justify-center my-4">
                <div className="flex-1 border-t border-transparent relative">
                  <span className="absolute left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></span>
                </div>
                <span className="px-4 text-purple-600 font-semibold">OU</span>
                <div className="flex-1 border-t border-transparent relative">
                  <span className="absolute right-0 h-1 w-full bg-gradient-to-l from-purple-500 via-pink-500 to-purple-500"></span>
                </div>
              </div>
            </form>
            <div className="flex flex-1 items-center justify-center gap-4 mt-4 ">
              <button className="bg-blue-800 text-white p-2 rounded-full flex flex-1 justify-center items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"><FaFacebook size={20} /> Facebook </button>
              <button className="bg-gray-200 p-2 rounded-full flex flex-1 items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"><FcGoogle size={20} /> Google </button>
              <button className="bg-gray-200 p-2 rounded-full flex flex-1 items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"><FaApple size={20} /> Apple </button>
            </div>
            <p className="mt-4 text-center">
              Novo no Top? <Link to="/register" className="text-dark font-bold">Cadastre-se</Link>
            </p>
          </div>
        </div>
      </Container>

      <div className='justify-center items-center flex flex-1 gap-8 text-white mt-8'>
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
