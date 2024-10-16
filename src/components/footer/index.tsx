import logo from '../../assets/PARTICIPE.png';


export function Footer() {
    return(
        <footer className='flex h-25 items-center px-3'>
            
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="*" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-20 w-15" alt="TopLeilao Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Quem Somos?</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Regulamento</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Segurança & Privacidade</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Atendimento</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto text-white lg:my-8" />
                <span className="block text-sm sm:text-center text-white">© 2024 <a href="*" className="hover:underline font-semibold">TopLeilao</a>. Todos os direitos Reservados. Desenvolvido por<a href="https://www.linkedin.com/in/leonardo-soldi-b47198141/?originalSubdomain=br" className='font-semibold'> Dev LeoSoldi</a></span>
            </div>
        </footer>
    )
}