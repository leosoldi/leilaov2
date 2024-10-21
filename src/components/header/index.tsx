import React, { useState } from 'react';
import logo from '../../assets/PARTICIPE.png';
import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { IoIosHeart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePhonePaused } from "react-icons/md";
import { FaUser, FaGavel, FaShoppingCart, FaHeart, FaWallet, FaHeadset } from "react-icons/fa"; // Adicione os ícones

export function Header() {
    const signed = true;
    const loadingAuth = false;
    
    // Estado para controlar a exibição do menu suspenso
    const [showMenu, setShowMenu] = useState(false);

    // Funções para mostrar e ocultar o menu
    const handleMouseEnter = () => setShowMenu(true);
    const handleMouseLeave = () => setShowMenu(true);

    return (
        <div className='flex h-25 items-center px-3' style={{ background: 'linear-gradient(90deg, rgba(205,92,223,1) 20%, rgba(64,41,179,1) 50%, rgba(210,92,223,1) 100%)' }}>
            <header className='flex flex-col md:flex-row justify-between w-full items-center'>
                {/* Lado esquerdo: Logo e barra de pesquisa */}
                <div className='flex flex-col md:flex-row items-center space-x-4 text-white font-semibold  md:w-auto md:mt-3 mb-1'>
                    <div className="flex items-center px-4 mb-3 md:mb-3">
                        <Link to="/">
                            <img src={logo} alt="Logo Top Leilao" className="h-10 md:h-12"/>
                        </Link>
                    </div>
                    <div className="relative w-full md:w-80">
                        <input 
                            type="text" 
                            className="p-2 pr-10 w-full rounded-lg border border-gray-300" 
                            placeholder="Pesquisar item..." 
                        />
                        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" color="#c057db" />
                    </div>
                    {!loadingAuth && signed && (
                        <div 
                            className="relative mt-3 md:mt-0 cursor-pointer"
                            onClick={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >   
                        <Link to="login">
                            <div className="p-3 flex items-center gap-2 font-bold">
                                <FaCircleUser color="#ffff" size={30} />
                                <p>Entre | Cadastre-se</p> 
                            </div>
                        </Link>
                            

                            {/* Menu suspenso */}
                            {showMenu && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                                    <Link to="/meus-dados" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <FaUser className="mr-2" color='#9D3BAD' /> Meus Dados
                                    </Link>
                                    <Link to="/meus-leiloes" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <FaGavel className="mr-2" color='#9D3BAD'/> Meus Leilões
                                    </Link>
                                    <Link to="/carrinho" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <FaShoppingCart className="mr-2" color='#9D3BAD'/> Meu carrinho
                                    </Link>
                                    <Link to="/favoritos" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <FaHeart className="mr-2" color='#9D3BAD'/> Favoritos
                                    </Link>
                                    <Link to="/carteira" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <FaWallet className="mr-2" color='#9D3BAD' /> Carteira
                                    </Link>
                                    <Link to="/atendimento" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        <FaHeadset className="mr-2" color='#9D3BAD'/> Atendimento
                                    </Link>
                                    <Link to="/logout" className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100">
                                        SAIR
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Lado direito: Ícones de coração e carrinho */}
                <div className="flex items-center space-x-4 px-4 mt-4 md:mt-0 mb-1">
                    <Link to="/support">
                        <IoIosHeart size={30} color="#ffff" />
                    </Link>
                    <Link to="/support">
                        <FiShoppingCart size={30} color="#ffff" />
                    </Link>
                    <Link to="/support">
                        <MdOutlinePhonePaused size={30} color="#ffff" />
                    </Link>
                </div>
            </header>
        </div>
    );
}
