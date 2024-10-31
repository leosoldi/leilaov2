import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineDashboardCustomize, MdOutlineAttachMoney } from "react-icons/md";
import { RiAlignItemBottomFill, RiAuctionFill, RiAdminFill } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";

export function DashboardHeader() {
    async function handleLogout() {
        alert("Realizar Logica Logout");
    }

    
    const [isItemDropdownOpen, setItemDropdownOpen] = useState(false);
    const [isAuctionDropdownOpen, setAuctionDropdownOpen] = useState(false);

    return (
        <div className="justify-center flex gap-6 bg-blue-500 text-white py-4 relative">
            <Link to="/dashboard" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <MdOutlineDashboardCustomize size={20} />
                <span>Dashboard</span>
            </Link>

            <div className="relative">
                <button
                    onClick={() => setItemDropdownOpen(!isItemDropdownOpen)}
                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                    <RiAlignItemBottomFill size={20} />
                    <span className="flex justify-center items-center">Cadastrar item <BsChevronDown className="ml-1" size={15}/></span>
                </button> 
                {isItemDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-50">
                        <Link
                            to="/dashboard/new/product"
                            className="block px-4 py-2 hover:bg-blue-200 transition"
                            onClick={() => setItemDropdownOpen(false)}
                        >
                            Produto
                        </Link>
                        <Link
                            to="/dashboard/new/category"
                            className="block px-4 py-2 hover:bg-blue-200 transition"
                            onClick={() => setItemDropdownOpen(false)}
                        >
                            Categoria
                        </Link>
                    </div>
                )}
            </div>
                
            {/* Dropdown para "Leilão" */}
            <div className="relative">
                <button
                    onClick={() => setAuctionDropdownOpen(!isAuctionDropdownOpen)}
                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                    <RiAuctionFill size={20} />
                    <span className="flex justify-center items-center">Leilão <BsChevronDown className="ml-1" size={15}/></span>
                </button> 
                {isAuctionDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg z-50">
                        <Link
                            to="/dashboard/leilao/cadastrar"
                            className="block px-4 py-2 hover:bg-blue-200 transition"
                            onClick={() => setAuctionDropdownOpen(false)}
                        >
                            Cadastrar
                        </Link>
                        <Link
                            to="/dashboard/leilao/administrar"
                            className="block px-4 py-2 hover:bg-blue-200 transition"
                            onClick={() => setAuctionDropdownOpen(false)}
                        >
                            Adminstrar
                        </Link>
                    </div>
                )}
            </div>

            <Link to="/dashboard/usuarios" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <FaUsersLine size={20} />
                <span>Administrar Usuários</span>
            </Link>
            <Link to="/dashboard/admin" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <RiAdminFill size={20} />
                <span>Cadastrar Admin</span>
            </Link>
            <Link to="/finance" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <MdOutlineAttachMoney size={20} />
                <span>Financeiro</span>
            </Link>
            <button onClick={handleLogout} title="Logout" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <HiOutlineLogout size={20} />
                <span>Sair</span>
            </button>
        </div>
    );
}
