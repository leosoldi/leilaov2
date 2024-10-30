import phone from '../../../../assets/smarthphones/smarth4.png';

export function ModalView({ closeModal }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100 sm:w-25">
        <h2 className="text-2xl font-bold mb-4 p-2">Detalhes do Produto</h2>
        <p className="p-2 text-lg"><strong>ID:</strong> 04</p>
        <hr />
        <p className="p-2 text-lg"><strong>Categoria:</strong> SmartPhone</p>
        <hr />
        <p className="p-2 text-lg"><strong>Nome:</strong> iPhone 16 Apple 128GB</p>
        <hr />
        <p className="p-2 text-lg"><strong>Descrição:</strong> iPhone 16 Apple 128GB, Câmera dupla de 48MP, Tela 6,1 </p>
        <hr />
        <p className="p-2 text-lg"><strong>Data de Cadastro:</strong> 30/10/2024</p>
        <hr />
        <p className="p-2 text-lg"><strong>Valor:</strong> R$ 7,019,00</p>
        <hr />
        <div className="justify-center items-center flex p-6">
          <img src={phone} alt="Smartphone" width={150} height={150} />
        </div>
        <button
          onClick={closeModal}
          className="mt-4 items-center justify-center text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5">
          Fechar
        </button>
      </div>
    </div>
  );
}
