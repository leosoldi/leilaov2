import React, { useState } from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carousel
import { Carousel } from 'react-responsive-carousel'; // Importa o componente Carousel
import smarthphone from '../../assets/smarthphones/smarth.png';
import smarthphone1 from '../../assets/smarthphones/smarth1.png';
import smarthphone2 from '../../assets/smarthphones/smarth2.png';
import smarthphone3 from '../../assets/smarthphones/smarth3.png';
import smarthphone4 from '../../assets/smarthphones/smarth4.png';
import tv from '../../assets/smarthphones/tv.png';
import pc from '../../assets/smarthphones/pc.png';
import relogio from '../../assets/smarthphones/relogio.png';
import carouselImage from '../../assets/image.png';
import { HiFire } from "react-icons/hi";
import { FaTv } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { RiWebcamLine } from "react-icons/ri";
import { PiSecurityCameraFill } from "react-icons/pi";
import { GiConsoleController } from "react-icons/gi";
import { GiProcessor } from "react-icons/gi";
import { GiSmartphone } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { FcSmartphoneTablet } from "react-icons/fc";
import { MdSportsSoccer } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { LuBedSingle } from "react-icons/lu";


export function Home() {
  // Leilões Finalizados
  const [finalizedProducts] = useState([
    { id: 1, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: false, image: smarthphone },
    { id: 2, name: "iPhone 16 Apple 128GB", price: 896.36, originalPrice: 7019.10, discount: 75, available: false, image: smarthphone1 },
    { id: 3, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: false, image: smarthphone2 },
    { id: 4, name: "iPhone 16 Apple 128GB", price: 896.36, originalPrice: 7019.10, discount: 75, available: false, image: smarthphone3 },
    { id: 5, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: false, image: smarthphone4 }
  ]);

  // Leilões Ativos
  const [activeProducts] = useState([
    { id: 4, name: "iPhone 16 Apple 128GB", price: 896.36, originalPrice: 7019.10, discount: 75, available: true, image: smarthphone3 },
    { id: 6, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: true, image: relogio },
    { id: 7, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: true, image: pc },
    { id: 8, name: "iPhone 16 Apple 128GB", price: 1495.25, originalPrice: 7019.10, discount: 75, available: true, image: tv }
  ]);

  return (
    <div>
      {/* Carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        dynamicHeight={false}
      >
        <div>
          <img src={carouselImage} alt="Imagem 1" className="w-full h-64 md:h-96 object-cover" />
        </div>
        <div>
          <img src={carouselImage} alt="Imagem 2" className="w-full h-64 md:h-96 object-cover" />
        </div>
      </Carousel>

      {/* Leilões Finalizados */}
      <div className="container mt-5 p-5 mx-auto px-4 rounded-md max-w-7xl" style={{ backgroundColor: '#fefafa' }}>
        <div className="flex justify-center items-center mb-5 mt-3 text-2xl md:text-4xl font-bold">
          <span className="text-center" style={{ color: '#783DC3' }}>Leilões Finalizados</span>
        </div>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
          {finalizedProducts.map(product => (
            <div key={product.id} className="rounded-lg bg-white p-5 shadow-2xl flex flex-col items-center duration-300 ease-in-out transform hover:scale-105">
              <div className="w-32 h-32 sm:w-40 sm:h-40">
                <img src={product.image} alt="smarthphone" className="object-contain w-full h-full" />
              </div>
              <div className="font-sans text-sm font-semibold text-left mt-4 min-h-[100px]">
                <span>{product.name}, Tela 6,1", Black</span>
                <p className="font-normal line-through">R$ {product.originalPrice.toLocaleString('pt-BR')}</p>
                <div className="flex items-center space-x-2">
                  <p>Leiloado por</p>
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

      {/* Categorias */}
      <div className="container mt-5 p-5 mx-auto px-4 rounded-md max-w-7xl" style={{ backgroundColor: '#fefafa' }}>
        <div className="flex flex-1 justify-center items-center mb-5 mt-3 text-2xl font-bold gap-10">
          <FaTv size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title="Smart TV"/>
          <LuBedSingle size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title="Tudo para Seu Quarto"/>
          <GiDeliveryDrone size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title="Drones"/>
          <RiWebcamLine size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title="Webcan"/>
          <FcSmartphoneTablet size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title="Tablets"/>
          <MdSportsSoccer size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title="Esportes e Lazer"/>
            <span className="text-center" style={{ color: '#783DC3' }}>Categorias</span>
          <PiSecurityCameraFill size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title="Cameras e Segurança"/>
          <GiConsoleController size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title='Games'/>
          <GiProcessor size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title='Periféricos'/>
          <GiSmartphone size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title='Smarthphones'/>
          <BsSmartwatch size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title='SmarthWatch'/>
          <FaTools size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title='Ferramentas'/>
          <FaBath size={50} className="rounded-full bg-purple-600 p-2 duration-300 ease-in-out transform hover:scale-105" color="#ffff" title='Banho'/>
        </div>
      </div>


      {/* Leilões Ativos */}
      <div className="container mt-5 p-5 mx-auto px-4 rounded-md max-w-7xl" style={{ backgroundColor: '#fefafa' }}>
        <div className="flex justify-center items-center mb-5 mt-3 text-2xl md:text-4xl font-bold">
          <span className="text-center" style={{ color: '#783DC3' }}>Leilões Ativos</span>
        </div>

        {/* Grid responsivo para leilões ativos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
            <div className="rounded-lg bg-white p-5 shadow-2xl flex flex-col items-center relative cursor-not-allowed">
              <div className="inline-block w-full rounded-xl text-center text-white" style={{background: 'linear-gradient(94deg, rgba(101,101,101,1) 0%, rgba(131,133,143,0.67) 100%)'}}>
                <p className="text-xs font-semibold">Começa em</p>
                <div className="font-mono text-lg">
                  <span>04d</span> <span>12h</span> <span>13m</span> <span>50s</span>
                </div>
              </div>
              <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
                <img src={smarthphone} alt="smarthphone" className="object-contain w-full h-full" />
                <div className="absolute left-0 transform -translate-x-1/3 -translate-y-1/3 bg-purple-600 text-white px-3 py-1 text-base font-bold rounded-full flex items-center space-x-2" style={{background: 'linear-gradient(94deg, rgba(101,101,101,1) 0%, rgba(131,133,143,0.67) 100%)'}}>
                  <TbTruckDelivery size={15} />
                  <p className=''>Frete grátis*</p>
                </div>
              </div>
              <div className="font-sans text-sm font-semibold text-left mt-5 mb-3">
                <span>iPhone 16 Apple 128GB, Tela 6,1", Black</span>
              </div>
              <div className="relative w-full h-6 bg-transparent rounded-full border border-black">
                <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-full text-white flex items-center justify-center" style={{width: '100%', background: 'linear-gradient(94deg, rgba(101,101,101,1) 0%, rgba(131,133,143,0.67) 100%)'}}>
                  100%
                </div>
              </div>
              
              <button
                className="w-full h-12 mt-3 rounded-full text-lg font-bold bg-gray-400 text-gray-800 shadow-lg cursor-not-allowed"
                disabled
              >
                ESGOTADO
              </button>
            </div>
          {activeProducts.map(product => (
            <div key={product.id} className="rounded-lg bg-white p-5 shadow-2xl flex flex-col items-center relative duration-300 ease-in-out transform hover:scale-105">
              <div className="inline-block w-full rounded-xl text-center text-white" style={{ background: 'linear-gradient(90deg, rgba(205,92,223,1) 20%, rgba(64,41,179,1) 100%, rgba(210,92,223,1) 100%)' }}>
                <p className="text-xs font-semibold">Começa em</p>
                <div className="font-mono text-lg">
                  <span>04d</span> <span>12h</span> <span>13m</span> <span>50s</span>
                </div>
              </div>
              <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
                <img src={product.image} alt="smarthphone" className="object-contain w-full h-full" />
                <div className="absolute left-0 transform -translate-x-1/3 -translate-y-1/3 bg-purple-600 text-white px-3 py-1 text-base font-bold rounded-full flex items-center space-x-2">
                  <TbTruckDelivery size={15} />
                  <p>Frete grátis*</p>
                </div>
              </div>
              <div className="font-sans text-sm font-semibold text-left mt-5 mb-3">
                <span>{product.name}, Tela 6,1", Black</span>
              </div>
              <div className="relative w-full h-6 bg-transparent rounded-full border border-black">
                <div className="absolute top-0 left-0 h-full bg-purple-500 rounded-full text-white flex items-center justify-center" style={{ width: '80%' }}>
                  80%
                </div>
              </div>
              <button
                    className="w-full h-12 mt-3 rounded-full text-lg font-bold bg-gradient-to-r from-purple-700 to-purple-200 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                  >
                    PARTICIPE
                    <HiFire className="ml-2" color='#f46928' size={25} />
                  </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
