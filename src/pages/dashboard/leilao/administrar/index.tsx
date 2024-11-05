import { Container } from "../../../../components/container";
import { DashboardHeader } from '../../../../components/panelHeader';
import { useState, useEffect } from 'react';
import smarthPhone from '../../../../assets/smarthphones/smarth.png';
import relogio from '../../../../assets/smarthphones/relogio.png';
import tv from '../../../../assets/smarthphones/tv.png'
import ps5 from '../../../../assets/smarthphones/ps5.png'
import { Link } from "react-router-dom";
import {FiSearch} from 'react-icons/fi';



function calculateDaysRemaining(startDate: string | Date): string {
    const  currentDate = new Date();
    const  targetDate = new Date(startDate);
    const  timeDiff = targetDate.getTime() - currentDate.getTime();
    const  daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining > 0 ? `${daysRemaining} dias restantes` : 'Iniciado';
}



export function AdministrarLeilao() {
    const startDate = '2024-11-30';

    // Estado para contagem regressiva
    const [daysRemaining, setDaysRemaining] = useState(calculateDaysRemaining(startDate));
    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDaysRemaining(calculateDaysRemaining(startDate));
        }, 86400000); 
        return () => clearInterval(interval);
    }, [startDate]);

    function handleFilterStatus(e: string) {
        setInputSearch(e)
    }

    function handleInputFilter() {

    }

    return (
        <Container>
            <DashboardHeader />

            <div className="justify-center items-center">
                <div className="font-medium text-center text-2xl mb-5 mt-5">Administrar Leilão</div>

                <div className="justify-between items-center flex mb-5 mt-5">
                    
                    <div className="gap-3 flex">
                        <button className="p-2 bg-gray-400 text-white font-medium rounded-lg text-center"   onClick={(e) => handleFilterStatus((e.target as HTMLInputElement).value)} value="Aguardando">Aguardando</button>
                        <button className="p-2 bg-green-500 text-white font-medium rounded-lg text-center"  onClick={(e) => handleFilterStatus((e.target as HTMLInputElement).value)} value="Andamento">Em Andamento</button>
                        <button className="p-2 bg-orange-400 text-white font-medium rounded-lg text-center" onClick={(e) => handleFilterStatus((e.target as HTMLInputElement).value)} value="Finalizado">Finalizado</button>
                        <button className="p-2 bg-red-400 text-white font-medium rounded-lg text-center"    onClick={(e) => handleFilterStatus((e.target as HTMLInputElement).value)} value="suspenso">Suspenso</button>
                    </div>

                    <div className="relative">
                        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" color="#000" />
                        <input type="text" className="p-2 pr-10 rounded-lg border border-gray-300" placeholder="Pesquisar" onChange={() => handleInputFilter} value={inputSearch} />
                    </div>                    
                </div>

                <div className="relative overflow-y-auto shadow-lg sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 bg-white">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3">Produto</th>
                                <th scope="col" className="px-6 py-3">Preço</th>
                                <th scope="col" className="px-6 py-3">Participantes</th>
                                <th scope="col" className="px-6 py-3">Data de Início</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center space-x-4">
                                    <img src={relogio} alt="Produto 1" width={50} height={50} className="rounded shadow-md" />
                                    
                                    <div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs">ID: 52</span>
                                        </div>
                                        <p className="text-gray-900 font-medium" title="iPhone 16 Apple 128GB, Tela 6,1', Black">
                                            iPhone 16 Apple 128GB, Tela 6,1"...
                                        </p>
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-gray-900">
                                    <div className="flex items-center space-x-1">
                                        <p className="font-semibold text-green-900">
                                            <span className="inline-block bg-green-100 text-green-900 rounded px-2 py-1 text-xs font-bold">
                                                + Lucro
                                            </span> 
                                            R$ 1.500,25
                                        </p>
                                    </div>
                                    <div className="text-gray-500 text-sm flex items-center">
                                        <p className="line-through">Preço original: R$ 1.495,25</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-600">120 de 500 participantes</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-gray-900">{new Date(startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                    <p className="text-xs text-gray-600">{daysRemaining}</p>
                                </td>
                                <td className="px-6 py-4"><div className="p-1 bg-gray-400 text-white font-medium rounded-lg text-center">Aguardando</div></td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:underline cursor-pointer">Administrar</button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center space-x-3">
                                    <img src={smarthPhone} alt="Produto 2" width={50} height={50} className="rounded" />
                                    <div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs">ID: 52</span>
                                        </div>
                                        <p className="text-gray-900 font-medium" title="iPhone 16 Apple 128GB, Tela 6,1', Black">
                                            iPhone 16 Apple 128GB, Tela 6,1"...
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                <div className="flex items-center space-x-1">
                                        <p className="font-semibold text-green-900">
                                            <span className="inline-block bg-green-100 text-green-900 rounded px-2 py-1 text-xs font-bold">
                                                + Lucro
                                            </span> 
                                            R$ 1.500,25
                                        </p>
                                    </div>
                                    <div className="text-gray-500 text-sm flex items-center">
                                        <p className="line-through">Preço original: R$ 1.495,25</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-600">120 de 500 participantes</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-gray-900">{new Date(startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                    <p className="text-xs text-gray-600">{daysRemaining}</p>
                                </td>
                                <td className="px-6 py-4"><div className="p-1 bg-green-500 text-black font-medium rounded-lg text-center">Aguardando</div></td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:underline cursor-pointer">Administrar</button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center space-x-3">
                                    <img src={tv} alt="Produto 2" width={50} height={50} className="rounded" />
                                    <div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs">ID: 52</span>
                                        </div>
                                        <p className="text-gray-900 font-medium" title="iPhone 16 Apple 128GB, Tela 6,1', Black">
                                            iPhone 16 Apple 128GB, Tela 6,1"...
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <div className="flex items-center space-x-1">
                                        <p className="font-semibold text-green-900">
                                            <span className="inline-block bg-green-100 text-green-900 rounded px-2 py-1 text-xs font-bold">
                                                + Lucro
                                            </span> 
                                            R$ 1.500,25
                                        </p>
                                    </div>
                                    <div className="text-gray-500 text-sm flex items-center">
                                        <p className="line-through">Preço original: R$ 1.495,25</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-600">120 de 500 participantes</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-gray-900">{new Date(startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                    <p className="text-xs text-gray-600">{daysRemaining}</p>
                                </td>
                                <td className="px-6 py-4"><div className="p-1 bg-orange-500 text-white font-medium rounded-lg text-center">Finalizado</div></td>
                                <td className="px-6 py-4">
                                    <Link to="./detail.tsx">
                                        <button className="text-blue-600 hover:underline cursor-pointer">Administrar</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center space-x-3">
                                    <img src={ps5} alt="Produto 2" width={50} height={50} className="rounded" />
                                    <div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs">ID: 52</span>
                                        </div>
                                        <p className="text-gray-900 font-medium" title="iPhone 16 Apple 128GB, Tela 6,1', Black">
                                            iPhone 16 Apple 128GB, Tela 6,1"...
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <div className="flex items-center space-x-1">
                                        <p className="font-semibold text-green-900">
                                            <span className="inline-block bg-green-100 text-green-900 rounded px-2 py-1 text-xs font-bold">
                                                + Lucro
                                            </span> 
                                            R$ 1.500,25
                                        </p>
                                    </div>
                                    <div className="text-gray-500 text-sm flex items-center">
                                        <p className="line-through">Preço original: R$ 1.495,25</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-600">120 de 500 participantes</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-gray-900">{new Date(startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                    <p className="text-xs text-gray-600">{daysRemaining}</p>
                                </td>
                                <td className="px-6 py-4"><div className="p-1 bg-yellow-500 text-black font-medium rounded-lg text-center">Em Andamento</div></td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:underline cursor-pointer">Administrar</button>
                                </td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center space-x-3">
                                    <img src={ps5} alt="Produto 2" width={50} height={50} className="rounded" />
                                    <div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="font-semibold bg-gray-200 px-2 py-1 rounded text-xs">ID: 52</span>
                                        </div>
                                        <p className="text-gray-900 font-medium" title="iPhone 16 Apple 128GB, Tela 6,1', Black">
                                            iPhone 16 Apple 128GB, Tela 6,1"...
                                        </p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <div className="flex items-center space-x-1">
                                        <p className="font-semibold text-green-900">
                                            <span className="inline-block bg-green-100 text-green-900 rounded px-2 py-1 text-xs font-bold">
                                                + Lucro
                                            </span> 
                                            R$ 1.500,25
                                        </p>
                                    </div>
                                    <div className="text-gray-500 text-sm flex items-center">
                                        <p className="line-through">Preço original: R$ 1.495,25</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-600">120 de 500 participantes</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="text-sm font-medium text-gray-900">{new Date(startDate).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                    <p className="text-xs text-gray-600">{daysRemaining}</p>
                                </td>
                                <td className="px-6 py-4"><div className="p-1 bg-red-400 text-white font-medium rounded-lg text-center">Suspenso</div></td>
                                <td className="px-6 py-4">
                                    <button className="text-blue-600 hover:underline cursor-pointer">Administrar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
}
