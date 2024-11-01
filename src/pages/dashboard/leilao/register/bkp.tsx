import { Container } from "../../../../components/container";
import { DashboardHeader } from "../../../../components/panelHeader";
import { useState } from "react";

export function RegisterLeilao() {
    // Definindo estados para valores editáveis
    const [valorOriginal, setValorOriginal] = useState(5000); // valor original do produto
    const [lucroAdicionar, setLucroAdicionar] = useState(20); // lucro adicional em porcentagem
    const [numParticipantes, setNumParticipantes] = useState(20); // número de participantes em porcentagem

    // Calculando o valor final com o lucro adicional
    const valorComLucro = valorOriginal + (valorOriginal * lucroAdicionar / 100);

    // Calculando o número máximo de participantes
    const numeroMaxParticipantes = Math.floor(valorComLucro * (numParticipantes / 100));

    // Calculando o valor de inscrição por participante
    const valorInscricao = valorComLucro / numeroMaxParticipantes;

    return (
        <Container>
            <DashboardHeader />
            <div className="w-full flex flex-col items-center gap-3 p-4">
                
                {/* Exibir e editar o valor original */}
                <div className="flex flex-col">
                    <label>Valor Original (Editável):</label>
                    <input 
                        type="number" 
                        value={valorOriginal} 
                        onChange={(e) => setValorOriginal(Number(e.target.value))}
                        className="border p-2 rounded"
                    />
                </div>
                
                {/* Exibir e editar o lucro adicional */}
                <div className="flex flex-col">
                    <label>Lucro Adicional (%) (Editável):</label>
                    <input 
                        type="number" 
                        value={lucroAdicionar} 
                        onChange={(e) => setLucroAdicionar(Number(e.target.value))}
                        className="border p-2 rounded"
                    />
                </div>
                
                {/* Exibir e editar o número de participantes */}
                <div className="flex flex-col">
                    <label>Porcentagem de Participantes (%) (Editável):</label>
                    <input 
                        type="number" 
                        value={numParticipantes} 
                        onChange={(e) => setNumParticipantes(Number(e.target.value))}
                        className="border p-2 rounded"
                    />
                </div>

                <hr className="my-4 w-full border-gray-300" />
                
                {/* Exibir cálculos finais */}
                <div className="flex flex-col">
                    <p><strong>Valor com Lucro Adicionado:</strong> R$ {valorComLucro.toFixed(2)}</p>
                    <p><strong>Número Máximo de Participantes:</strong> {numeroMaxParticipantes}</p>
                    <p><strong>Valor da Inscrição por Participante:</strong> R$ {valorInscricao.toFixed(2)}</p>
                </div>
                
            </div>
        </Container>
    );
}
