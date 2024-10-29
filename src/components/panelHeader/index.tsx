
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineDashboardCustomize, MdOutlineAttachMoney  } from "react-icons/md";
import { RiAlignItemBottomFill, RiAuctionFill, RiAdminFill  } from "react-icons/ri";
import { FaUsersLine } from "react-icons/fa6";


export function DashboardHeader() {

    async function handleLogout() {
        alert("Realizar Logica Logout")
    }

    return (
        <div className="justify-center flex gap-6 bg-blue-500 text-white py-4">
            <Link to="/dashboard" className="flex items-center gap-2 hover:transition-shadow duration-300 transform hover:scale-105">
                <MdOutlineDashboardCustomize size={20} />
                <span>Dashboard</span>
            </Link>
            <Link to="/dashboard/new" className="flex items-center gap-2 hover:transition-shadow duration-300 transform hover:scale-105">
                <RiAlignItemBottomFill size={20} />
                <span>Cadastrar item</span>
            </Link>
            <Link to="dashboard/new" className="flex items-center gap-2 hover:transition-shadow duration-300 transform hover:scale-105">
                <RiAuctionFill size={20} />
                <span>Cadastrar Leilão</span>
            </Link>
            <Link to="users" className="flex items-center gap-2 hover:transition-shadow duration-300 transform hover:scale-105">
                <FaUsersLine size={20} />
                <span>Lista Usuários</span>
            </Link>
            <Link to="users" className="flex items-center gap-2 hover:transition-shadow duration-300 transform hover:scale-105">
                <RiAdminFill size={20} />
                <span>Cadastrar Admin</span>
            </Link>
            <Link to="users" className="flex items-center gap-2 hover:transition-shadow duration-300 transform hover:scale-105">
                <MdOutlineAttachMoney size={20} />
                <span>Financeiro</span>
            </Link>
            <button onClick={handleLogout} title="Logout" className="flex items-center gap-2 hover:transition-shadow duration-300 transform hover:scale-105">
                <HiOutlineLogout size={20} />
                <span>Sair</span>
            </button>
        </div>
    );
}