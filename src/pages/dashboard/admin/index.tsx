import { Container } from "../../../components/container"
import { DashboardHeader } from "../../../components/panelHeader"
import { Input } from "../../../components/input"
import {  z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { BsChevronDoubleUp } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import { FaRegTrashAlt, FaUser } from "react-icons/fa";


const schema = z.object({
    name: z.string().nonempty("Campo vazio!!!"),
})

type FormData = z.infer<typeof schema>;



export function UserAdmin() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
      })

      function handleSaveAdmin() {

      }

      function handleTrash() {

      }

      function handleBlocked() {

      }
      


    return(
        <Container>
            <DashboardHeader />

        <div className="w-full justify-center items-center gap-2">
            <h1 className="text-2xl font-normal justify-center items-center flex mt-3"> Usuários Admin</h1>
            <div className="p-2 mt-1 m-5 py-5">
                <div className="w-full p-6 justify-center flex flex-col sm:flex-row items-center gap-2  ">
                    <button className=" bg-slate-400 rounded-full w-25  flex items-center justify-center cursor-pointer border-gray-600 h-40 md:w-40">
                        <div className="absolute cursor-pointer">
                            <FaUser size={40} color="#000" />
                        </div>
                        <div className="cursor-pointer">
                            <input type="file" accept="image/*" className="opacity-0 cursor-pointer" />
                        </div>
                    </button>
                </div>  
                <form onSubmit={handleSubmit(handleSaveAdmin)}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    
                        <Input 
                            placeholder="ex: Luiz Rodrigues"
                            type="text"
                            name="name"
                            id="name"
                            register={register}
                            label="Nome Completo:"
                            error={errors && errors.name?.message}
                        />

                        <Input 
                            placeholder="ex: luiz@luiz.com.br"
                            type="text"
                            name="email"
                            id="email"
                            register={register}
                            label="E-mail:"
                            error={errors && errors.name?.message}
                        />

                        <Input 
                            placeholder="ex: 000.000.000-00"
                            type="text"
                            name="email"
                            id="email"
                            register={register}
                            label="E-mail:"
                            error={errors && errors.name?.message}
                        />

                        <Input 
                            placeholder="ex: 000.000.000-00"
                            type="text"
                            name="cpf"
                            id="cpf"
                            register={register}
                            label="CPF:"
                            error={errors && errors.name?.message}
                        />

                        <Input 
                            placeholder="******"
                            type="text"
                            name="senha"
                            id="senha"
                            register={register}
                            label="Senha:"
                            error={errors && errors.name?.message}
                        />

                        <Input 
                            placeholder="******"
                            type="text"
                            name="confirm_senha"
                            id="confirm_senha"
                            register={register}
                            label="Confirmar Senha:"
                            error={errors && errors.name?.message}
                        />


                    </div>
                    <div className="flex justify-center mt-10">
                        <button type="submit" className="rounded-md bg-blue-600 py-3 px-6 border border-transparent text-center text-lg text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="w-full justify-center items-center gap-2">
        <div className="p-6 px-0">
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
                        <td className="border-b border-blue-gray-50">
                            <div className="flex justify-center items-center gap-3">
                                <div className="font-semibold" onClick={handleBlocked}><ImBlocked title="Suspender Usuário" color="#FE0032" size={20} className="cursor-pointer"/></div>
                                <div className="font-semibold" onClick={handleTrash}><FaRegTrashAlt title="Suspender Usuário" color="#FE0032" size={20} className="cursor-pointer"/></div>
                            </div>
                        </td>
                    </tr>            
                    </tbody>
                </table>
            </div>
        </div>

        </Container>
    )
}