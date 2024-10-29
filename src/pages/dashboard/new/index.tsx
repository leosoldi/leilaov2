import { ReactNode } from "react";
import { Container } from "../../../components/container";
import { DashboardHeader  } from '../../../components/panelHeader'
import { Input } from '../../../components/input'
export function RegisterItem() {
  return (
   <div>
    <Container>
        <DashboardHeader />

        <div className="w-full h-full">
          <input type="text" value="INICIAR DESENVOLVIMENTO CADASTRO DE PRODUTO" className="bg-slate-500 mt-20 p-5" />
        </div>
    </Container>
   </div>
  );
}

