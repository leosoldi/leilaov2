import { Container } from "../../../../components/container";
import { DashboardHeader } from "../../../../components/panelHeader";
import { Input } from "../../../../components/input";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import smart from '../../../../assets/smarthphones/smarth4.png';
import { ImHourGlass } from "react-icons/im";
import { useState } from "react";


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


  const [valorOriginal, setValorOriginal] = useState(0);
  const [lucroAdicionar, setLucroAdicionar] = useState(20);
  const [numParticipantes, setNumParticipantes] = useState(0.20);
  const [valorLucro, setValorLucro] = useState(0)
  const [inicioData, setDataInicio] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  

  const valorComLucro = valorOriginal + (valorOriginal * lucroAdicionar / 100);
  console.log(valorComLucro)
  
  
  const numeroMaxParticipantes = Math.floor(valorComLucro * numParticipantes);

  
  const valorInscricao = numeroMaxParticipantes > 0 ? (valorComLucro / numeroMaxParticipantes).toFixed(2) : 0;
  console.log(valorInscricao)
  function setItemProduto(e: string) {
    
    setValorOriginal(Number(e)); 
  }

  function maskData(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const [year, month, day] = value.split('-');
    const formattedDate = `${day}/${month}/${year}`;
    
    setDataInicio(formattedDate);
  }
  
  
  return (
    <Container>
      <DashboardHeader />
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-6 p-6">
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
            <div className="justify-center items-center flex gap-5 m-8">
              <button className="bg-sky-500 hover:bg-sky-600 hover:text-white p-3 text-white cursor-pointer rounded-full">Criar Leilão</button>
              <button className="bg-gray-400 hover:bg-gray-600 hover:text-white p-3 text-dark cursor-pointer rounded-full">Limpar Campos</button>  
              <button className="bg-yellow-500 hover:bg-yellow-600 hover:text-white p-3 text-darks cursor-pointer rounded-full hover:transf">Voltar</button>
            </div>
            
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="text-2xl font-semibold text-gray-700 flex justify-center items-center mt-5 mb-5">
            Preview
          </div>
          <div className="border border-gray-200 p-6 rounded-xl shadow-lg w-full max-w-sm bg-white">
            <div className="flex flex-col items-center">
              <img src={smart} alt="" className="w-36 h-36 object-cover rounded-md shadow-md" />
              <p className="mt-4 text-lg font-bold text-gray-800 text-center">iPhone 16 Apple 128GB, Tela 6,1", Black</p>
              <div className="text-left mt-4 rounded-lg p-4 w-full">
                <hr />
                <p className="text-lg bg-green-300 text-gray-600">Valor Original: <span className="font-semibold text-gray-800">R$ {valorOriginal}</span></p>
                <hr />
                <p className="text-lg bg-green-400 text-gray-600">Valor com Lucro: {lucroAdicionar}% <span className="font-semibold text-gray-800">R$ {valorComLucro}</span></p>
                <hr />
                <p className="text-lg bg-green-100 text-gray-600">Lucro Adicional: <span className="font-semibold text-gray-800">{lucroAdicionar}%</span></p>
                <hr />
                <p className="text-lg bg-yellow-200 text-gray-600">Valor Inscrição: <span className="font-semibold text-gray-800">R$ {valorInscricao}</span></p>
                <hr />
                {!!!inicioData &&   (
                    <div>
                        <p className="text-lg bg-indigo-200 text-gray-600"><span className="font-semibold text-gray-800"> </span>
                            Participantes: <strong>{numeroMaxParticipantes}</strong>
                        </p>
                    </div>
                )}
                
                {inicioData && (
                    <div className="text-center">
                        <p className="font-semibold">Inicio:</p>
                        <p className="text-lg bg-indigo-200 text-gray-600"><span className="font-semibold text-gray-800">{inicioData} às {horaInicio}</span></p>
                        <p>OU</p>
                        <p className="text-lg bg-indigo-200 text-gray-600"><span className="font-semibold text-gray-800">{numeroMaxParticipantes} </span>
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
