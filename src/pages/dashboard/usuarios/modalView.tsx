import { IoLogoWhatsapp } from "react-icons/io";

export function ModalView({ closeModal }: any) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-center border-b pb-2">Detalhes do Usuário</h2>
          <p className="text-lg justify-center items-center flex"><strong>ID:</strong> #08</p>

          <div className="flex items-center justify-center mt-4">
            <img
              src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
              alt="John Michael"
              className="h-20 w-19 rounded-full object-cover border border-gray-300" style={{height: "8rem"}}
            /> 
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-lg"><strong>Nome:</strong> John Michael</p>
            <p className="text-lg"><strong>Apelido:</strong> john</p>
            <p className="text-lg"><strong>E-mail:</strong> john@jhon.com.br</p>
            <div className="text-lg justify-center"><strong>Celular:</strong> <a href=""> 4199891630 </a></div>
            <p className="text-lg"><strong>CPF:</strong> 000.000.000.00</p>
          </div>
  
          <hr className="my-1" />
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-lg"><strong>CEP:</strong> 81720-030</p>
            <p className="text-lg"><strong>Rua:</strong> Rua Coronel José Leal Fontoura</p>
            <p className="text-lg"><strong>Bairro:</strong> Xaxim</p>
            <p className="text-lg"><strong>Cidade:</strong> PR</p>
            <p className="text-lg"><strong>Estado:</strong> PR</p>
            <p className="text-lg"><strong>Número:</strong> 20</p>
            <p className="text-lg"><strong>Complemento:</strong> esquina</p>
          </div>
  
          <button
            onClick={closeModal}
            className="mt-6 w-full text-center text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-200">
            Fechar
          </button>
        </div>
      </div>
    );
  }
  