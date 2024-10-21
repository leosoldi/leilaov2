import { Container } from '../../components/container';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import img_smarth4 from '../../assets/smarthphones/smarth4.png';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from '../../assets/PARTICIPE.png'





export function Login() {

  const [finalizedProducts] = useState([
    { id: 1, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: false, image: img_smarth4 },
    { id: 2, name: "iPhone 16 Apple 128GB", price: 896.36, originalPrice: 7019.10, discount: 75, available: false, image: img_smarth4 },
    { id: 3, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: false, image: img_smarth4 }
  ]);

  return (
    <div className='w-full'>
      <p className='flex flex-1 justify-center items-center ml-3 text-white font-bold text-xl'>
        <FaCircleUser size={40} className='m-3' />
        Entre | Cadastre-se
      </p>

      <Container>
        <div className="w-full h-full flex flex-1 justify-center items-center">
          <div className="flex flex-row w-4/5">
            {/* Seção do Carrossel */}
            <div className="w-full p-4 rounded-lg">
              <h4 className="font-semibold mb-6 text-xl text-center">Últimos Leilões</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3">
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
            <div className="w-1/2 p-4 rounded-lg m-5">
              <h4 className="font-semibold text-center text-3xl mb-6 text-violet-700">Entre na sua conta</h4>
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
                <button className="bg-blue-800 text-white p-2 rounded-full flex flex-1 justify-center items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"onClick={() => alert('Realizar logica login social')}><FaFacebook size={20} /> Facebook </button>
                <button className="bg-gray-200 p-2 rounded-full flex flex-1 items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"onClick={() => alert('Realizar logica login social')}><FcGoogle size={20} className='' /> Google </button>
                <button className="bg-gray-200 p-2 rounded-full flex flex-1 items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"onClick={() => alert('Realizar logica login social')}><FaApple size={20} /> Apple </button>
              </div>
              <p className="mt-4 text-center">
                Novo no Top? <Link to="/register" className="text-purple-600 font-bold">Cadastre-se</Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className='justify-center items-center flex flex-1 gap-8 text-white'>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Link to="/quem-somos">
            Quem Somos ? 
        </Link>
        <Link to="regulamento">
          Regulamento
        </Link>
        <Link to="acessibilidade">
          Acessibilidade
        </Link>
        <Link to="seguranca-privacidade">
          Segurança & Privacidade
        </Link>
        <Link to="atendimento">
          Atendimento
        </Link>
      </div>
    </div>
  );
}
