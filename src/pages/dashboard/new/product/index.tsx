import { ReactNode, useState } from "react";
import { Container } from "../../../../components/container";
import { DashboardHeader  } from '../../../../components/panelHeader'
import { Input } from '../../../../components/input'
import { GiBottomRight3dArrow } from "react-icons/gi";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineZoomIn } from "react-icons/ai";
import { ModalView } from './modalView';
import { ModalDeleteItem } from './modalDelete';



const schema = z.object({
  category: z.string().nonempty("Categotia é Obrigatório"),
  product: z.string().nonempty("Nome do Produto"),
  description: z.string().nonempty("Descrição é Obrigatório"),
  price: z.string().nonempty("Valor é Obrigatório"),
})

type FormData = z.infer<typeof schema>;

export function RegisterItem() {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })


  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onSubmit(data: FormData) {
    console.log(data);
  }

  function handleView() {
    setViewData(null);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleEdit() {
    // Função de edição
  }

  function handleTrash() {
    setIsConfirmModalOpen(true); // Abre o modal de confirmação
  }

  function confirmDelete() {
    setIsConfirmModalOpen(false); // Fecha o modal de confirmação
    console.log("Item excluído");
    // Coloque aqui a lógica para excluir o item
  }

  return (
   <div>
    <Container>
        <DashboardHeader />
      <div className="justify-center items-center flex text-2xl font-semibold bg-white m-5">Cadastrar Produto</div>
       <div className="w-full bg-white p-3 rounded-lg flex flex-col sm:flex-row items-center gap-2 mt-2 shadow-lg">
          
          <button className="border-2 w-48 rounded-lg flex items-center justify-center cursor-pointer border-gray-600 h-32 md:w-48">
            <div className="absolute cursor-pointer">
              <FiUpload size={40} color="#000" />
            </div>
            <div className="cursor-pointer">
              <input type="file" accept="image/*" className="opacity-0 cursor-pointer" />
            </div>
          </button>
       </div>

       <div className="w-full bg-white shadow-sm rounded-lg flex flex-col sm:flex-row item-center gap-2 ">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="categoria" className="m-3">Selecione a Categoria:</label>
                <div className="relative">
                  <select
                      className="w-full p-3 pl-5 border border-gray-300 rounded-full">
                      <option value="brazil">Smartphone</option>
                      <option value="bucharest">Tablets</option>
                      <option value="london">Tv</option>
                      <option value="washington">SmartWatch</option>
                  </select>
                </div>

                <Input 
                  placeholder="Ex: Phone 16 Apple 128GB"
                  type="text"
                  name="product"
                  id="product"
                  register={register}
                  error={errors.product?.message}
                  value=""
                  label="Nome do Produto:"
                />

                <Input 
                  placeholder="Ex: iPhone 16 Apple 128GB, Câmera dupla de 48MP, Tela 6,1"
                  type="text"
                  name="description"
                  id="description"
                  register={register}
                  error={errors.description?.message}
                  value=""
                  label="Descrição do Produto:"
                />

                <Input 
                  placeholder="R$ 7.019.00"
                  type="text"
                  name="price"
                  id="price"
                  register={register}
                  error={errors.price?.message}
                  value=""
                  label="Valor Original:"
                />

                <div className="mt-4 justify-center items-center flex p-5">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar Produto</button>
                    <Link to="/dashboard">
                        <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-3 text-center me-2 mb-2 dark:focus:ring-yellow-900">Voltar</button>
                    </Link>
                </div>
        </form>
          <hr className="my-6 mt-5 border-gray-200 sm:mx-auto text-white lg:my-8" />
       </div>
       
       <div className="justify-center items-center flex mt-10"> 
          <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
              <table className="w-full text-left table-auto min-w-max text-slate-800">
                  <thead>
                  <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                      <th className="p-4">
                          <p className="text-lg leading-none font-normal"># Id</p>
                      </th>
                      <th className="p-4">
                          <p className="text-lg leading-none font-normal">Categoria</p>
                      </th>
                      <th className="p-4">
                          <p className="text-lg leading-none font-normal">Nome</p>
                      </th>
                      <th className="p-4">
                          <p className="text-lg leading-none font-normal">Data Cadastro</p>
                      </th>
                      <th className="p-4">
                          <p className="text-lg leading-none font-normal">Valor</p>
                      </th>
                      <th className="p-4">
                          <p className="text-lg leading-none font-normal">Ações</p>
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-slate-50">
                        <td className="p-4">
                            <p className="text-lg">04</p>
                        </td>
                        <td className="p-4">
                            <p className="text-lg">SmartPhone</p>
                        </td>
                        
                        <td className="p-4">
                            <p className="text-lg">iPhone 16 Apple 128GB, Câmera dupla de 48MP, Tela 6,1"</p>
                        </td>
                        <td className="p-4">
                            <p className="text-lg">30/10/2024</p>
                        </td>
                        <td className="p-4">
                            <p className="text-lg">R$ 7.019.00</p>
                        </td>
                        <td className="p-4 flex gap-3">
                            <div className="text-sm font-semibold" onClick={handleEdit}><FaEdit color="#163E8D" size={25}/></div>
                            <div className="text-sm font-semibold" onClick={handleTrash}><FaRegTrashAlt  color="#FE0032" size={25}/></div>
                            <div className="text-sm font-semibold" onClick={handleView}><AiOutlineZoomIn  color="#608733" size={25}/></div>
                        </td>
                    </tr>
                  </tbody>
              </table>
          </div>
       </div>

       {isModalOpen && (
          <ModalView closeModal={closeModal} />
       )}


       {isConfirmModalOpen  && (
          <ModalDeleteItem confirmDelete={confirmDelete} closeModal={() => setIsConfirmModalOpen(false)} />
       )}
    </Container>
   </div>
  );
}

