
import { Container } from "../../../components/container";
import { DashboardHeader } from "../../../components/panelHeader";
import { FiSearch } from 'react-icons/fi';
import { BsChevronDoubleUp } from "react-icons/bs";




export function Usuarios() {
    return(
        <Container>
            <DashboardHeader />
            <div className="w-full justify-center items-center gap-2 bg-white">
                <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
                        <div className="flex items-center justify-between gap-8 mb-8">
                        <div>
                            <h5
                            className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
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
                                Data Cadastro <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Apelido <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Function <BsChevronDoubleUp /></p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Status <BsChevronDoubleUp /> </p>
                            </th>
                            <th
                                className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
                                <p
                                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                                Employed <BsChevronDoubleUp /> </p>
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
                                <div className="flex items-center gap-3">
                                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                                    alt="John Michael" className="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                                <div className="flex flex-col">
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    John Michael
                                    </p>
                                    <p
                                    className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                    john@creative-tim.com
                                    </p>
                                </div>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex flex-col">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Manager
                                </p>
                                <p
                                    className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                    Organization
                                </p>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="w-max">
                                <div
                                    className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                                    <span className="">online</span>
                                </div>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                23/04/18
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                    className="w-4 h-4">
                                    <path
                                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                                    </path>
                                    </svg>
                                </span>
                                </button>
                            </td>
                            </tr>
                            <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex items-center gap-3">
                                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg"
                                    alt="Alexa Liras" className="relative inline-block h-9 w-9 !rounded-full object-cover object-center" />
                                <div className="flex flex-col">
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Alexa Liras
                                    </p>
                                    <p
                                    className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                    alexa@creative-tim.com
                                    </p>
                                </div>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="flex flex-col">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                    Programator
                                </p>
                                <p
                                    className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                                    Developer
                                </p>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <div className="w-max">
                                <div
                                    className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
                                    <span className="">offline</span>
                                </div>
                                </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                23/04/18
                                </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                                <button
                                className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                    className="w-4 h-4">
                                    <path
                                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                                    </path>
                                    </svg>
                                </span>
                                </button>
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
                            Previous
                        </button>
                        <button
                            className="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            Next
                        </button>
                        </div>
                    </div>
                    </div>

            </div>
        </Container>
    )
}