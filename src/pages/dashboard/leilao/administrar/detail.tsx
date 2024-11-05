import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../../components/panelHeader";
import { Container } from "../../../../components/container";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiAuctionFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import smarthPhone from '../../../../assets/smarthphones/smarth1.png';
import img_default from '../../../../assets/business_9900742.png';

interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
}

interface Winner {
    name: string;
    amount: string;
}

interface User {
    name: string;
    amount: string;
    isWinner: boolean;
}


export function DetailLeilao() {
    const [status, setStatus] = useState("Em Andamento");
    const [winner, setWinner] = useState<Winner | null>(null); // Estado para armazenar informações do vencedor
    const auctionEndDate = new Date("2024-11-14T23:59:00");
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    function calculateTimeLeft(): TimeLeft {
        const difference = auctionEndDate.getTime() - new Date().getTime();
        let timeLeft: TimeLeft = { hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            setStatus("Finalizado");
            setWinner({ name: "Robson29", amount: "R$ 350,00" });
        }
        return timeLeft;
    }
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const finalizarLeilao = () => {
        setStatus("Finalizado");
        setWinner({ name: "Robson29", amount: "R$ 350,00" });
    };

    const formatTimeLeft = () => {
        return `${timeLeft.hours.toString().padStart(2, "0")}h ${timeLeft.minutes.toString().padStart(2, "0")}m ${timeLeft.seconds.toString().padStart(2, "0")}s`;
    };

    const handleDataUser = (user: User) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const getStatusBadge = () => {
        let color;
        switch (status) {
            case "Aguardando":
                color = "bg-blue-500";
                break;
            case "Finalizado":
                color = "bg-red-500";
                break;
            case "Em Andamento":
                color = "bg-green-500";
                break;
            case "Suspenso":
                color = "bg-yellow-500";
                break;
            default:
                color = "bg-gray-500";
        }
        return (
            <span className={`${color} text-white px-2 py-1 text-xs font-semibold rounded absolute top-2 right-2`}>
                {status}
            </span>
        );
    };

    return (
        <Container>
            <DashboardHeader />

            <div className="text-center my-5">
                <h1 className="text-3xl font-bold">Detalhes do Leilão</h1>
                <p className="text-gray-500">Informações detalhadas sobre o leilão e seus lances</p>

               
            </div>

                <div className="flex flex-col md:flex-row gap-5 p-5">
                    <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 ">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 p-4 rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
                        <AiOutlineInfoCircle className="text-white" />
                        Detalhes do Leilão
                    </h2>

                    <div className="text-gray-800 space-y-6">
                        <div className="relative flex justify-center mb-6">
                            <img src={smarthPhone} alt="Smartphone" className="w-52 h-auto rounded-lg shadow-md hover:shadow-xl transform transition-all hover:scale-105" />
                            <button onClick={finalizarLeilao} className="absolute bottom-4 right-4  text-white px-4 py-2 rounded-lg shadow-md">
                                {getStatusBadge()}
                            </button>
                            </div>

                            <div className="flex justify-between items-center mb-4">
                            <span className="font-medium text-lg">
                                Valor: <strong className="text-green-600">R$ 1.500,00</strong>
                            </span>
                            <span className="font-medium text-lg">
                                Lance Inicial: <strong className="text-green-600">R$ 120,00</strong>
                            </span>
                            </div>

                            <div className="space-y-3">
                            <p className="font-semibold text-lg">
                                Nome do Item: <span className="font-normal text-gray-700">Item XYZ</span>
                            </p>
                            <p className="font-medium">
                                Categoria: <span className="font-normal text-gray-600">Categoria do Item</span>
                            </p>
                            <p className="font-medium">
                                Descrição: <span className="font-normal text-gray-600">Detalhes completos sobre o item...</span>
                            </p>
                            </div>

                            <div className="flex justify-between items-center mt-6 space-x-8">
                            <div className="flex items-center">
                                <p className="font-medium text-lg">n° Participantes:</p>
                                <p className="font-semibold text-gray-800 ml-2">500</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-medium text-lg">Qntd Online:</p>
                                <p className="font-semibold text-gray-800 ml-2">200</p>
                            </div>
                            </div>
                        </div>
                        <div className=" mt-3">
                            <button className="p-2 rounded-full bg-red-500 text-white items-center flex">Suspender</button>
                        </div>
                    </div>

                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 flex flex-col" style={{ height: '100%' }}>
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-between">
                        <span className="flex items-center gap-1"><AiOutlineInfoCircle className="text-indigo-500" />Lances e Histórico</span>
                        <span className="flex items-center gap-1"><FaClock /> {formatTimeLeft()}</span>
                    </h2>

                    {/* Aviso de vencedor */}
                    {status === "Finalizado" && winner && (
                        <div className="p-3 rounded-lg bg-green-100 border border-green-500 text-green-800 font-bold text-center mb-4">
                            🎉 Parabéns, {winner.name}! Arrematou o item por {winner.amount}!
                        </div>
                    )}

                    <div className="overflow-y-auto flex-grow space-y-3 text-gray-700 p-2" style={{ maxHeight: '550px' }}>
                        <div className="p-3 rounded-lg bg-green-400 border-2 border-green-600 shadow-lg flex gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-grow">
                                <div className="flex justify-between items-center">
                                    <p className="flex-grow font-bold text-lg"><span className="font-medium">Lance:</span> R$ 350,00</p>    
                                    <RiAuctionFill size={30} />
                                </div>
                                <p className="text-lg font-semibold"><span className="font-medium">Apelido:</span> Robson29</p>
                                <p><span className="font-medium">Data:</span> 01/11/2024</p>
                                <span className="mt-2 inline-block bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">Lance Superior</span><br />
                                <button onClick={() => handleDataUser({ name: "Robson29", amount: "R$ 350,00", isWinner: true })} className="text-black-500 underline mt-2">Ver Detalhes</button>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg bg-green-200 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full "
                            />
                            <div>
                                <p><span className="font-medium">Lance:</span> R$ 200,00</p>
                                <p><span className="font-medium">Usuário:</span> Cleiton</p>
                                <p><span className="font-medium">Data:</span> 01/11/2024 20:22</p>
                                <button onClick={() => handleDataUser({ name: "Cleiton", amount: "R$ 200,00", isWinner: false })} className="text-black-500 underline mt-2">Ver Detalhes</button>
                            </div>
                        </div>

                        <div className="p-3 rounded-lg bg-yellow-100 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p><span className="font-medium">Lance:</span> R$ 150,00</p>
                                <p><span className="font-medium">Usuário:</span> Cleiton</p>
                                <p><span className="font-medium">Data:</span> 01/11/2024</p>
                                <button onClick={() => handleDataUser({ name: "Cleiton", amount: "R$ 150,00", isWinner: false })} className="text-black-500 underline mt-2">Ver Detalhes</button>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg bg-yellow-100 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p><span className="font-medium">Lance:</span> R$ 90,00</p>
                                <p><span className="font-medium">Usuário:</span> Cleiton</p>
                                <p><span className="font-medium">Data:</span> 01/11/2024</p>
                                <button onClick={() => handleDataUser({ name: "Cleiton", amount: "R$ 150,00", isWinner: true })} className="text-black-500 underline mt-2">Ver Detalhes</button>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg bg-yellow-100 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p><span className="font-medium">Lance:</span> R$ 50,00</p>
                                <p><span className="font-medium">Usuário:</span> Jamilton</p>
                                <p><span className="font-medium">Data:</span> 01/11/2024</p>
                                <button onClick={() => handleDataUser({ name: "Cleiton", amount: "R$ 150,00", isWinner: false })} className="text-black-500 underline mt-2">Ver Detalhes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


           


            {showModal && selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4">Detalhes do Usuário</h2>
                        <p><span className="font-medium">Nome:</span> {selectedUser.name}</p>
                        <p><span className="font-medium">Lance:</span> {selectedUser.amount}</p>
                        {selectedUser.isWinner && (
                            <p className="text-green-600 font-bold mt-2">🎉 Este usuário é o ganhador!</p>
                        )}
                        <div className="justify-between items-center flex mt-5">
                            <button className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                                Entrar em Contato
                            </button>
                            <button onClick={() => setShowModal(false)} className="mt-2 text-red-500 underline">Fechar</button>
                        </div>
                    </div>
                </div>
            )}
        </Container>
    );
}
