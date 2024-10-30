import { Container } from "../../../../components/container"
import { DashboardHeader } from "../../../../components/panelHeader"
import { Input } from '../../../../components/input'
import {  z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { ModalDeleteItem } from './modalDelete';
import { useState } from "react";



const schema = z.object({
    category: z.string().nonempty("Campo vazio!!!"),
})

type FormData = z.infer<typeof schema>;


export function RegisterCategory() {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
      })
    
      const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

      function confirmDelete() {
        setIsConfirmModalOpen(false);
        console.log("Item excluído");
      }
    
      function handleTrash() {
        setIsConfirmModalOpen(true); // Abre o modal de confirmação
      }

    return(
        <Container>
            <DashboardHeader />
            <div className="w-full bg-white justify-center items-center gap-2 mt-2">
                <div className="justify-center items-center flex text-2xl font-semibold">Categorias</div>
                <form className="flex justify-center items-center">
                    <Input 
                        placeholder="Ex: SmartPhone"
                        type="text"
                        name="category"
                        id="category"
                        register={register}
                        error={errors.category?.message}
                        label="Digite o nome da Categoria:"
                    />
                    <button type="button" className="p-3 pl-5 mt-5 ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5  text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar Categoria</button>
                </form>

                <div className="justify-center items-center flex mt-10"> 
                    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                        <table className="w-full text-left table-auto min-w-max text-slate-800">
                            <thead>
                            <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                                <th className="p-4">
                                <p className="text-lg leading-none font-normal">
                                    Categoria
                                </p>
                                </th>
                                <th className="p-4">
                                <p className="text-lg leading-none font-normal">
                                    Data Cadastro
                                </p>
                                </th>
                                <th className="p-4">
                                <p></p>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="hover:bg-slate-50">
                                <td className="p-4">
                                <p className="text-lg">
                                    SmartPhone
                                </p>
                                </td>
                                <td className="p-4">
                                <p className="text-lg">
                                    01/01/2024
                                </p>
                                </td>
                                <td className="p-4 flex gap-3">
                                <div className="text-sm font-semibold cursor-pointer">
                                    <FaEdit color="#163E8D" size={25}/>
                                </div>
                                <div className="text-sm font-semibold cursor-pointer">
                                    <FaRegTrashAlt  color="#FE0032" size={25} onClick={handleTrash}/>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                {isConfirmModalOpen  && (
                    <ModalDeleteItem confirmDelete={confirmDelete} closeModal={() => setIsConfirmModalOpen(false)} />
                )}
        </Container>
    )
}