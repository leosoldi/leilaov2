import { Container } from "../../../../components/container";
import { DashboardHeader } from "../../../../components/panelHeader";
import { Input } from "../../../../components/input";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import smart from '../../../../assets/smarthphones/smarth4.png';
import { ImHourGlass } from "react-icons/im";
import { useState } from "react";

// Ajustando o schema para aceitar strings que representam números
const schema = z.object({
  org_value: z.string().refine(value => !isNaN(Number(value)), {
    message: "Este campo deve ser um número",
  }),
});

type FormData = z.infer<typeof schema>;

export function RegisterLeilao() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  // Definindo valores padrão
  const [valorOriginal, setValorOriginal] = useState(0); // valor original do produto
  const [lucroAdicionar, setLucroAdicionar] = useState(20); // lucro adicional em porcentagem
  const [numParticipantes, setNumParticipantes] = useState(0.20); // número de participantes em proporção (20%)
  const [inicioData, setDataInicio] = useState(""); // data de início
  const [horaInicio, setHoraInicio] = useState(""); // hora de início

  // Calculando o valor final com o lucro adicional
  const valorComLucro = valorOriginal + (valorOriginal * lucroAdicionar / 100);

  // Calculando o número máximo de participantes
  const numeroMaxParticipantes = Math.floor(valorComLucro * numParticipantes);

  // Calculando o valor de inscrição por participante
  const valorInscricao = numeroMaxParticipantes > 0 ? (valorComLucro / numeroMaxParticipantes).toFixed(2) : 0;

  function setItemProduto(e: string) {
    
    setValorOriginal(Number(e)); // Converte para número antes de definir o estado
  }

  function maskData(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value; // Exemplo: "1997/10/23"
    
    // Dividindo a data em partes
    const [year, month, day] = value.split('-');
    
    // Montando no formato "DD/MM/YYYY"
    const formattedDate = `${day}/${month}/${year}`;
    
    setDataInicio(formattedDate);
  }
  
  
  return (
    <Container>
      <DashboardHeader />
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-6 p-6">
        {/* Coluna 1: Inputs */}
        <div className="w-full md:w-1/2">
          <div className="text-2xl font-normal justify-center items-center flex mt-5 mb-5">
            Iniciar Leilão
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="relative">
              <select
                className="w-full p-3 pl-5 border border-gray-300 rounded-full"
                onChange={(e) => setItemProduto(e.target.value)}
              >
                <option>Selecione um Produto</option>
                <option value="5000">iPhone 16 Apple 128GB (R$5000)</option>
                <option value="890">iPhone 16 Apple 128GB  (R$890)</option>
                <option value="1200">iPhone 16 Apple 128GB (R$1200)</option>
                <option value="2000">iPhone 16 Apple 128GB (R$2000)</option>
              </select>
            </div>

            <Input
              placeholder="Valor Original"
              type="text"
              name="org_value"
              value={valorOriginal.toString()}
              id="org_value"
              register={register}
              error={errors.org_value?.message}
              label="Valor Original:"
              onChange={(e) => setValorOriginal(Number(e.target.value))}
            />

            <Input
              placeholder="Lucro Adicional (%)"
              type="text"
              name="additional_profit"
              value={lucroAdicionar.toString()}
              id="additional_profit"
              register={register}
              error={errors.org_value?.message}
              label="Lucro Adicional (%):"
              onChange={(e) => setLucroAdicionar(Number(e.target.value))}
            />

            <Input
              placeholder="Proporção de Participantes"
              type="number"
              name="participants_percentage"
              value={numParticipantes.toString()}
              id="participants_percentage"
              register={register}
              error={errors.org_value?.message}
              label="Proporção de Participantes:"
              onChange={(e) => setNumParticipantes(Number(e.target.value))}
            />

            <div className="flex justify-between items-center">
              <Input
                placeholder="Data Inicio"
                type="date"
                name="data_inicio"
                id="data_inicio"
                register={register}
                error={errors.org_value?.message}
                label="Data inicio:"
                //onChange={(e) => setDataInicio(e.target.value)}
                onChange={maskData}
              />
              <ImHourGlass className="mt-6" size={30} />
              <Input
                placeholder="Hora Inicio"
                type="time"
                name="hora_inicio"
                id="hora_inicio"
                register={register}
                error={errors.org_value?.message}
                label="Hora Inicio:"
                onChange={(e) => setHoraInicio(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Coluna 2: Preview */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="text-2xl font-semibold text-gray-700 flex justify-center items-center mt-5 mb-5">
            Preview
          </div>
          <div className="border border-gray-200 p-6 rounded-xl shadow-lg w-full max-w-sm bg-white">
            <div className="flex flex-col items-center">
              <img src={smart} alt="" className="w-36 h-36 object-cover rounded-md shadow-md" />
              <p className="mt-4 text-lg font-bold text-gray-800">iPhone 16 Apple 128GB, Tela 6,1", Black</p>
              <div className="text-center mt-4 rounded-lg p-4 w-full">
                <hr />
                <p className="text-lg bg-green-200 text-gray-600">Valor Original: <span className="font-semibold text-gray-800">R$ {valorOriginal}</span></p>
                <hr />
                <p className="text-lg bg-green-200 text-gray-600">Lucro Adicional: <span className="font-semibold text-gray-800">{lucroAdicionar}%</span></p>
                <hr />
                <p className="text-lg bg-yellow-200 text-gray-600">Valor Inscrição: <span className="font-semibold text-gray-800">R$ {valorInscricao}</span></p>
                <hr />
                {!!!inicioData &&   (
                    <div>
                        <p className="text-lg bg-indigo-200 text-gray-600"><span className="font-semibold text-gray-800">{numeroMaxParticipantes} </span>
                            Participantes
                        </p>
                    </div>
                )}
                
                {inicioData && (
                    <div>
                        <p className="font-semibold">Inicio:</p>
                        <p className="text-lg bg-indigo-200 text-gray-600"><span className="font-semibold text-gray-800">{inicioData} às {horaInicio}</span></p>
                        <p>OU</p>
                        <p className="text-lg bg-indigo-200 text-gray-600"><span className="font-semibold text-gray-800">{numeroMaxParticipantes}</span>
                            Participantes
                        </p>
                    </div>
                )}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
