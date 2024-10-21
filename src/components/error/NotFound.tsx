import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-purple-600">404</h1>
                <p className="text-2xl mt-4">Página não encontrada</p>
                <p className="mt-2 text-gray-600">
                    Desculpe, a página que você está procurando não existe.
                </p>
                <Link to="/" className="mt-4 inline-block bg-purple-500 text-white px-6 py-2 rounded-lg">
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
}
