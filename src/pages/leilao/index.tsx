import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos do carrossel
import './index.css'; // Substitua pelo nome do seu arquivo CSS
import { TbTruckDelivery } from "react-icons/tb";
import avatar from '../../assets/avatar/avatar.png';
import avatar2 from '../../assets/avatar/avatar02.png';
import avatar3 from '../../assets/avatar/avatar03.png';
import avatar4 from '../../assets/avatar/avatar04.png';
import avatar5 from '../../assets/avatar/avatar05.png';
import avatar6 from '../../assets/avatar/avatar06.png';
import avatar7 from '../../assets/avatar/avatar07.png';

export function Leilao() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <h2 className="text-purple-700 font-bold mt-3 text-2xl pl-[9rem]">
                LEILÃO EM ANDAMENTO
            </h2>

            <div className="p-6 flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto">
                {/* Left Section */}
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                    <div className="rounded-lg flex flex-col items-center">
                        <p className="mb-4 font-medium text-xl">
                            iPhone 16 Apple 128GB, Câmera dupla de 48MP, Tela 6,1"
                        </p>
                        <div className="relative justify-center items-center flex">
                            <Carousel
                                showArrows={false}
                                showThumbs={true}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={3000}
                                showStatus={false}
                                thumbWidth={50}
                                dynamicHeight={true}
                            >
                                <div>
                                    <img
                                        src="https://http2.mlstatic.com/D_NQ_NP_2X_779617-MLA71782867320_092023-F.webp"
                                        alt="Imagem 1"
                                        className="object-contain"
                                        style={{ maxHeight: '300px', maxWidth: '100%' }}
                                    />
                                </div>
                                <div>
                                    <img
                                        src="https://http2.mlstatic.com/D_NQ_NP_2X_888363-MLA74806234573_022024-F.webp"
                                        alt="Imagem 2"
                                        className="object-contain"
                                        style={{ maxHeight: '300px', maxWidth: '100%' }}
                                    />
                                </div>
                            </Carousel>
                            <div
                                className="absolute bottom-20 left-4 text-white px-3 py-1 text-base font-bold rounded-full flex items-center space-x-2"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(58, 51, 176) 20%, rgba(136, 132, 224) 70%, rgba(58, 51, 176) 100%)',
                                }}
                            >
                                <TbTruckDelivery size={30} />
                                <p className="">Frete grátis*</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-start">
                        <span className="block text-lg font-bold text-gray-500">Preço Original</span>
                        <span className="block text-gray-800 line-through text-2xl">
                            R$ 7.019,00
                        </span>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex-1 flex flex-col gap-6 p-6 relative">
                    <div className="text-center">
                        <h2 className="text-purple-800 font-bold text-2xl">TEMPO DE LEILÃO</h2>
                        <div className="text-6xl font-extrabold text-purple-800">05:00</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-purple-800 font-bold mb-4 text-lg">Top 5</h3>
                        <ul className="space-y-3">
                            <li
                                className="flex items-center justify-between p-3 rounded-lg shadow-sm"
                                style={{
                                    background: "linear-gradient(90deg, #8785B7, #A995EB, #7E81AA)",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-yellow-500">🥇</span>
                                    <img src={avatar2} alt="Avatar de Antonio" width={40} />
                                    <span className="font-bold text-gray-700">Antonio</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 font-bold">🏆</span>
                                    <span className="text-gray-900">50:31 s</span>
                                </div>
                            </li>

                            <li
                                className="flex items-center justify-between p-3 rounded-lg shadow-sm"
                                style={{
                                    background: "linear-gradient(90deg, #8785B7, #A995EB, #7E81AA)",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-yellow-500">🥇</span>
                                    <img src={avatar7} alt="Avatar de Antonio" width={40} />
                                    <span className="font-bold text-gray-700">Roberta</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 font-bold">🏆</span>
                                    <span className="text-gray-900">50:31 s</span>
                                </div>
                            </li>

                            <li
                                className="flex items-center justify-between p-3 rounded-lg shadow-sm"
                                style={{
                                    background: "linear-gradient(90deg, #8785B7, #A995EB, #7E81AA)",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-yellow-500">🥇</span>
                                    <img src={avatar4} alt="Avatar de Antonio" width={40} />
                                    <span className="font-bold text-gray-700">Denilson</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 font-bold">🏆</span>
                                    <span className="text-gray-900">50:31 s</span>
                                </div>
                            </li>

                            <li
                                className="flex items-center justify-between p-3 rounded-lg shadow-sm"
                                style={{
                                    background: "linear-gradient(90deg, #8785B7, #A995EB, #7E81AA)",
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-yellow-500">🥇</span>
                                    <img src={avatar} alt="Avatar de Antonio" width={40} />
                                    <span className="font-bold text-gray-700">Jarilene</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-500 font-bold">🏆</span>
                                    <span className="text-gray-900">50:31 s</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center gap-4">
                        {/* Ícone de interrogação */}
                        <div className="w-10 h-10 bg-purple-700 text-white text-center rounded-full flex items-center justify-center font-bold shadow-lg">
                            ?
                        </div>
                        {/* Barra de progresso */}
                        <div className="relative w-12 h-60 bg-gray-300 rounded-full overflow-hidden shadow-inner flex items-center justify-center">
                            {/* Seção vermelha */}
                            <div
                                className="absolute top-0 left-0 w-full bg-red-500"
                                style={{ height: "22%" }} // Altura da parte vermelha
                            ></div>
                            {/* Seção verde */}
                            <div
                                className="absolute bottom-0 left-0 w-full bg-green-500"
                                style={{ height: "78%" }} // Altura da parte verde
                            ></div>
                            {/* Ícone centralizado */}
                            <div
                                className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-purple-700 text-white px-3 py-2 text-base font-bold rounded-lg shadow-md"
                            >
                                78%
                            </div>
                        </div>
                    </div>



                </div>

                {/* Right Section */}
                  {/* Right Section */}
                  <div className="flex-1 flex flex-col gap-6 bg-white rounded-lg shadow-lg p-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <div className="text-lg font-bold text-gray-800 mb-2">Valor Atual</div>
                        <div className="text-xl font-extrabold text-green-600">R$ 1.019,10</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-gray-800 font-bold mb-4">Tempo de lance</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-between">
                                <span className="font-bold text-gray-700">Antonio</span>
                                <span className="text-gray-500">50:31 s</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="font-bold text-gray-700">Rayane</span>
                                <span className="text-gray-500">45:31 s</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="font-bold text-gray-700">Jun1or</span>
                                <span className="text-gray-500">45:31 s</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="font-bold text-gray-700">@arlos</span>
                                <span className="text-gray-500">39:01 s</span>
                            </li>
                        </ul>
                    </div>
                    <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                        Arraste p/ R$ 0,10
                    </button>
                </div>
            </div>
        </div>
    );
}
