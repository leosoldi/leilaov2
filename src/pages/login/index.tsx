import { Container } from '../../components/container';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import img_smarth4 from '../../assets/smarthphones/smarth4.png';
import img_smarth6 from '../../assets/smarthphones/smarth2.png';
import img_smarth3 from '../../assets/smarthphones/smarth3.png';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import logo from '../../assets/PARTICIPE.png';

export function Login() {
  const [finalizedProducts] = useState([
    { id: 1, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 78, available: false, image: img_smarth4 },
    { id: 2, name: "iPhone 16 Apple 128GB", price: 896.36, originalPrice: 5333.90, discount: 75, available: false, image: img_smarth6 },
    { id: 3, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 78, available: false, image: img_smarth3 }
  ]);

  return (
    <div className='w-full min-h-screen flex flex-col' style={{background: 'linear-gradient(90deg, rgba(58, 51, 176) 20%, rgba(92, 60, 221) 100%, rgba(58, 51, 176) 80%)'}}>
      <div className='flex justify-center items-center py-4 text-white font-bold text-xl'>
        <FaCircleUser size={40} className='mr-3' />
        <span>Entre | Cadastre-se</span>
      </div>

     
        <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-100 gap-24">
          {/* Seção do Carrossel */}
          <div className="lg:w-1/2 rounded-lg">
            <h4 className="font-bold text-center text-4xl mb-10" style={{color: "#3131a4"}}>Últimos Leilões</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center items-center px-20 ">
              {finalizedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`rounded-lg p-5 shadow-2xl flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 ${
                    index === 1 ? 'scale-110 -translate-y-4 mb-7' : ''
                  }`} // Aplica a escala e a elevação para o card do meio
                >
                  <div className="w-50 h-42 sm:w-50 sm:h-50">
                    <img src={product.image} alt="smartphone" className="object-contain w-full h-full mt-3" />
                  </div>
                  <div className="font-sans text-sm font-semibold text-left mt-4 min-h-[100px]">
                    <span>{product.name}, Tela 6,1", Black</span>
                    <p className="font-normal line-through">R$ {product.originalPrice.toLocaleString('pt-BR')}</p>
                    <div className="flex items-center space-x-2">
                      <p className="italic">Leiloado por</p>
                      <div
                        className="inline-block px-3 py-1 text-white font-bold text-lg rounded-full"
                        style={{ background: 'linear-gradient(90deg, rgba(58, 51, 176) 20%, rgba(136, 132, 224) 100%, rgba(58, 51, 176) 100%)' }}
                      >
                        -{product.discount}%
                      </div>
                    </div>
                    <p
                      className="font-extrabold text-2xl bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #3A33B0, #6A65CE)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
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
          <div className="w-1/4 p-4 rounded-lg m-5 " style={{ maxWidth: '600px' }}>
            <h4 className="font-bold text-center text-3xl mb-6" style={{color: "#3131a4"}}>Entre na sua conta</h4>
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="block mb-2">E-mail</label>
                <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-full" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2">Senha</label>
                <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-full" />
              </div>
              <p className="text-right text-normal">
                <Link to="/forgot-password" className='text-blue-600 font-bold'>Esqueceu a senha?</Link>
              </p>
              <button type="submit" className="text-white py-2 rounded-full font-bold transition duration-300 ease-in-out transform hover:scale-105"  style={{ background: 'linear-gradient(90deg, rgba(58, 51, 176) 60%, rgba(136, 132, 224) 100%, rgba(58, 51, 176) 100%)' }} >ENTRE</button>
              <div className="flex items-center justify-center my-4">
                <div className="flex-1 relative" style={{ height: '2px', backgroundColor: '#3B82F6' }}></div> {/* Ajusta a altura da linha */}
                <span className="px-4 text-blue-600 font-semibold">OU</span>
                <div className="flex-1 relative" style={{ height: '2px', backgroundColor: '#3B82F6' }}></div> {/* Ajusta a altura da linha */}
              </div>
            </form>
            <div className="flex flex-1 items-center justify-center gap-4 mt-4 ">
              <button className="bg-blue-800 text-white p-2 rounded-full flex flex-1 justify-center items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"><FaFacebook size={20} /> Facebook </button>
              <button className="bg-gray-200 p-2 rounded-full flex flex-1 items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"><FcGoogle size={20} /> Google </button>
              <button className="bg-gray-200 p-2 rounded-full flex flex-1 items-center gap-2 transition duration-300 ease-in-out transform hover:scale-105"><FaApple size={20} /> Apple </button>
            </div>
            <p className="mt-4 text-center">
              Novo no Top? <Link to="/register" className="text-blue font-bold text-blue-600">Cadastre-se</Link>
            </p>
          </div>
        </div>


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
      <div className='flex justify-center items-center py-4 text-white font-bold text-xl'>
        <FaCircleUser size={40} className='mr-3' />
        <span>Entre | Cadastre-se</span>
      </div>
    </div>
  );
}
