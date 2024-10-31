type ModalSuspenseItemProps = {
    confirmSuspencion: () => void;
    closeModal: () => void;
  };
  
  export function ModalSuspenseItem({ confirmSuspencion, closeModal }: ModalSuspenseItemProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4">Confirmação</h2>
          <p className="mb-4 justify-center items-center flex">Tem certeza de que deseja suspender este usuário?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={closeModal}
              className="text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Cancelar
            </button>
            <button
              onClick={confirmSuspencion}
              className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    );
  }
  