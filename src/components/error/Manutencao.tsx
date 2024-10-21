
import { Link } from "react-router-dom";

export function UnderConstruction() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-purple-600">🚧 Em Construção 🚧</h1>
                <p className="text-2xl mt-4">Esta página ainda está em desenvolvimento.</p>
                <p className="mt-2 text-gray-600">
                    Estamos trabalhando duro para trazer essa funcionalidade o mais breve possível.
                </p>
                <Link to="/" className="mt-4 inline-block bg-purple-500 text-white px-6 py-2 rounded-lg">
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
}