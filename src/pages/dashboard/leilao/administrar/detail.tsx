import React, { useState, useEffect } from "react";
import { DashboardHeader } from "../../../../components/panelHeader";
import { Container } from "../../../../components/container";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiAuctionFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";
import smarthPhone from '../../../../assets/smarthphones/smarth1.png';
import img_default from '../../../../assets/business_9900742.png'


interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
}


export function DetailLeilao() {
    const auctionEndDate = new Date("2024-11-06T15:15:00");
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Function to calculate time left
    function calculateTimeLeft(): TimeLeft {
        const difference = auctionEndDate.getTime() - new Date().getTime();
        let timeLeft: TimeLeft = { hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    // Update the timeLeft state every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the timer when the component is unmounted
        return () => clearInterval(timer);
    }, []);

    // Format the time left
    const formatTimeLeft = () => {
        return `${timeLeft.hours.toString().padStart(2, "0")}h ${timeLeft.minutes.toString().padStart(2, "0")}m ${timeLeft.seconds.toString().padStart(2, "0")}s`;
    };

    return (
        <Container>
            <DashboardHeader />

            {/* Cabeçalho do Leilão */}
            <div className="text-center my-5">
                <h1 className="text-3xl font-bold">Detalhes do Leilão</h1>
                <p className="text-gray-500">Informações detalhadas sobre o leilão e seus lances</p>
            </div>

            <div className="flex flex-col md:flex-row gap-5 p-5">
                
                {/* Seção de Item */}
                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <AiOutlineInfoCircle className="text-indigo-500" />
                        Detalhes do Leilão
                    </h2>
                    <div className="text-gray-700 space-y-2">
                        <img src={smarthPhone} alt="" width={190} height={140}/>
                        <p className="font-medium">Nome do Item: <span className="font-normal">Item XYZ</span></p>
                        <p className="font-medium">Categoria: <span className="font-normal">Categoria do Item</span></p>
                        <p className="font-medium">Descrição: <span className="font-normal">Detalhes completos sobre o item...</span></p>
                        <p className="font-medium">Valor: <span className="font-normal">R$1,500,00</span></p>
                        <p className="font-medium">Lance Inicial: <span className="font-normal">R$1,500,00</span></p>
                        <p className="font-medium">n° Participantes: <span className="font-normal">500</span></p>
                    </div>
                </div>

                {/* Seção de Lances */}
                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-between">
                        <span className="flex items-center gap-1"><AiOutlineInfoCircle className="text-indigo-500" />Lances e Histórico</span>
                        <span className="flex items-center gap-1"><FaClock /> {formatTimeLeft()} finaliza</span>
                    </h2>
                    <div className="overflow-y-auto max-h-80 space-y-3 text-gray-700 p-2">
                    <div className="p-3 rounded-lg bg-yellow-300 flex  gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                            <div className="justify-between flex">
                                <p><span className="font-medium">Lance:</span> R$ 150,00</p>    
                                <RiAuctionFill size={30} />
                            </div>
                                
                                <p><span className="font-medium">Usuário:</span> Robson Santos</p>
                                <p><span className="font-medium">Data:</span> 01/11/2024</p>
                            </div>
                        </div>
                        <div className="p-3 rounded-lg bg-yellow-300 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p><span className="font-medium">Lance:</span> R$ 300,00</p>
                                <p><span className="font-medium">Usuário:</span> Robson Santos</p>
                                <p><span className="font-medium">Data:</span> 01/11/2024</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <p><span className="font-medium">Lance Inicial:</span> R$ 100,00</p>
                            <p><span className="font-medium">Usuário:</span>(TOP LEILAO)</p>
                            <p><span className="font-medium">Data:</span> 01/11/2024 15:15h</p>
                        </div>
                        <div className="p-3 rounded-lg bg-yellow-300 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <p><span className="font-medium">Lance:</span> R$ 300,00</p>
                            <p><span className="font-medium">Usuário:</span> Robson Santos</p>
                            <p><span className="font-medium">Data:</span> 01/11/2024</p>
                        </div>
                        <div className="p-3 rounded-lg bg-yellow-300 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <p><span className="font-medium">Lance:</span> R$ 300,00</p>
                            <p><span className="font-medium">Usuário:</span> Robson Santos</p>
                            <p><span className="font-medium">Data:</span> 01/11/2024</p>
                        </div>
                        <div className="p-3 rounded-lg bg-yellow-300 flex items-center gap-3">
                            <img
                                src={img_default}
                                alt="Foto do usuário"
                                className="w-10 h-10 rounded-full"
                            />
                            <p><span className="font-medium">Lance:</span> R$ 300,00</p>
                            <p><span className="font-medium">Usuário:</span> Robson Santos</p>
                            <p><span className="font-medium">Data:</span> 01/11/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
