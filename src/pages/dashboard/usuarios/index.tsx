
import { Container } from "../../../components/container";
import { DashboardHeader } from "../../../components/panelHeader";
import { FiSearch } from 'react-icons/fi';
import { BsChevronDoubleUp } from "react-icons/bs";
import { AiOutlineZoomIn } from "react-icons/ai";
import { useState } from "react";
import { ImBlocked } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { ModalView } from "./modalView";
import { ModalSuspenseItem } from "./modalSuspense";




export function Usuarios() {

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [viewData, setViewData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    function confirmSuspencion() {
      setIsConfirmModalOpen(false);
      console.log("Item excluído");
    }

    // Função para abrir o modal de suspensão
    function openSuspensionModal() {
        setIsConfirmModalOpen(true);
    }
  
    function handleBlocked() {
        openSuspensionModal();
    }

    function handleView() {
        setViewData(null);
        setIsModalOpen(true);
    }
    
    function closeModal() {
        setIsModalOpen(false);
    }
    return(
        <Container>
            <DashboardHeader />
            <div className="w-full justify-center items-center gap-2 bg-white">
                <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                        <div className="flex items-center justify-between gap-8 mb-8">
                            <div>
                                <h5
                                className="block font-sans text-xl items-center justify-center  font-semibold  ">
                                    Lista de Membros
                                </h5>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-end gap-4 md:flex-row">
                            <div className="w-full md:w-72 absolute mb-16" >
                                <input 
                                    type="text" 
                                    className="p-2  w-full rounded-lg border border-gray-300" 
                                    placeholder="Pesquisar Usuário..." 
                                />
                                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" color="#000" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-around items-center flex mt-3">
                            <div className="rounded-full bg-green-600 p-2 font-medium text-white pl-3 pr-3">Ativos: 50 </div>
                            <div className="rounded-full bg-red-600 p-2 font-medium text-white pl-3 pr-3">Suspensos: 50 </div>
                            <div className="rounded-full bg-green-700 p-2 font-medium text-white pl-3 pr-3">Online: 50 </div>
                        </div>
                    <div className="p-6 px-0 overflow-scroll">
                        <table className="w-full mt-4 text-left table-auto min-w-max">
                        <thead>
                            <tr>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                id <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Nome <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Status <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Acesso <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                 Data Cadastro <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Ult. Acesso <BsChevronDoubleUp /> </p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                </p>
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border-b border-blue-gray-50">
                                <p>#08</p>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="flex items-center gap-3">
                                    <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                                        alt="John Michael" className="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                                    <div className="flex flex-col">
                                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                            John Michael
                                        </p>
                                        <p
                                        className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                            john
                                        </p>
                                    </div>
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="w-max">
                                        <div
                                            className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                                            <span className="">Ativo</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <div className="w-max">
                                    <div
                                        className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-redf-500/20">
                                        <span className="">Offline</span>
                                    </div>
                                    </div>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        23/04/18
                                    </p>
                                </td>
                                <td className="p-4 border-b border-blue-gray-50">
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                        23/04/18
                                    </p>
                                </td>
                                <td className="border-b border-blue-gray-50  gap-5">
                                    <div className="flex gap-1 justify-center items-center">
                                        <div className="font-semibold" onClick={handleView}><AiOutlineZoomIn  color="#608733" title="Visualizar Detalhes" size={25} className="cursor-pointer"/></div>
                                        <div className="font-semibold" onClick={handleBlocked}><ImBlocked title="Suspender Usuário" color="#FE0032" size={20} className="cursor-pointer"/></div>
                                        <a href="https://wa.me/55998916390" target="_blank">
                                            <div className="font-semibold"><IoLogoWhatsapp  title="Entrar em contato" color="#30D14E" size={25} className="cursor-pointer"/></div>
                                        </a>
                                    </div>
                                </td>
                            </tr>            
                        </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-end p-4 border-t border-blue-gray-50">
                        <div className="flex gap-2">
                        <button
                            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Voltar
                        </button>
                        <button
                            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            proximo
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <ModalView  closeModal={closeModal} />
            )}
             {isConfirmModalOpen  && (
                <ModalSuspenseItem confirmSuspencion={confirmSuspencion} closeModal={() => setIsConfirmModalOpen(false)} />
                )}

        </Container>
    )
}