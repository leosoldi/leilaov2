import React, { useState } from 'react';
import logo from '../../assets/PARTICIPE.png';
import { Link } from "react-router-dom";
import { FiUser, FiSearch, FiShoppingCart  } from 'react-icons/fi';
import { IoIosHeart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlinePhonePaused } from "react-icons/md";
import { FaUser, FaGavel, FaShoppingCart, FaHeart, FaWallet, FaHeadset } from "react-icons/fa"; // Adicione os ícones
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiAdminFill } from "react-icons/ri";


export function Header() {
    const signed = true;
    const loadingAuth = false;
    
    // Estado para controlar a exibição do menu suspenso
    const [showMenu, setShowMenu] = useState(false);

    // Funções para mostrar e ocultar o menu
    const handleMouseEnter = () => setShowMenu(true);
    const handleMouseLeave = () => setShowMenu(true);

    return (
        <div className='flex h-25 items-center px-3' style={{ background: 'linear-gradient(90deg, #1e2c8a 90%, #5d3cdf 0%);'}}>
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
                   
                        <Link to="login">
                            <div className="p-3 flex items-center gap-2 font-bold">
                                <FaCircleUser color="#ffff" size={30} />
                                <p>Entre | Cadastre-se</p> 
                            </div>
                        </Link>
                            

                           
                          
                        </div>
                

                
                <div className="flex items-center space-x-4 px-4 mt-4 md:mt-0 mb-1">
                    <Link to="/support">
                        <IoIosHeart size={30} color="#ffff" />
                    </Link>
                    <Link to="/dashboard">
                        <RiAdminFill size={30} color="#ffff" />
                    </Link>
                    <Link to="/support">
                        <FiShoppingCart size={30} color="#ffff" />
                    </Link>
                    <Link to="/support">
                        <TfiHeadphoneAlt size={30} color="#ffff" />
                    </Link>
                </div>
            </header>
        </div>
    );
}
