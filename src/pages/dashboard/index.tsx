import { Container } from "../../components/container";
import { Link } from "react-router-dom";
import { DashboardHeader } from '../../components/panelHeader';
import img_user from '../../assets/img_dashboard_admin/users-svgrepo-com.svg';
import itens from '../../assets/img_dashboard_admin/list-menu-svgrepo-com.svg';
import leilao from '../../assets/img_dashboard_admin/auction-svgrepo-com.svg';
import money from '../../assets/img_dashboard_admin/money-transfer-svgrepo-com.svg';
import admin from '../../assets/img_dashboard_admin/admin-with-cogwheels-svgrepo-com.svg';
import mail from '../../assets/img_dashboard_admin/mail-message-chat-svgrepo-com.svg';
import loading from '../../assets/img_dashboard_admin/loading-svgrepo-com.svg';

export function Dashboard() {
  return ( 
    <Container>
      <DashboardHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 p-5">
        
        {/* Card Template */}
        {[{icon: itens, title: "Itens", count: "95"}, {icon: leilao, title: "Ativos", count: "95"},
          {icon: loading, title: "Aguardando", count: "28"}, {icon: admin, title: "Admins", count: "95"},
          {icon: img_user, title: "Usuários", count: "95"}, {icon: money, title: "Financeiro", count: "R$150,00"},
          {icon: mail, title: "Newsletter", count: "28"}].map((card, index) => (
          <div 
            key={index} 
            className="w-40 h-40 p-5 border border-gray-200 rounded-lg shadow-lg bg-white flex flex-col items-center justify-center 
                       hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
          >
            <Link to="/users" className="flex flex-col items-center text-center">
              <img src={card.icon} alt={card.title} width={50} height={50} className="mb-2"/>
              <h5 className="text-lg font-semibold text-sky-700">{card.title}</h5>
              <p className="text-lg font-medium text-gray-600">{card.count}</p>
            </Link>
          </div>
        ))}

      </div>

      {/* Conteúdo Adicional */}
      <div className="h-full">
        <div className="p-20 items-center justify-center">
          <h1 className="text-2xl text-center">IDEIAS DE CONTEÚDO AQUI</h1>
          <ul className="text-center">
            <li>* Analytics</li>
            <li>* Gráficos</li>
            <li>* Estatísticas</li>
          </ul>
        </div>
      </div>
      
    </Container>
  );
}
