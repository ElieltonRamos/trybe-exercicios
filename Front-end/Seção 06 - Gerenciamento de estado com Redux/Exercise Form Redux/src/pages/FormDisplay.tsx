import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/Actions';

function FormDisplay() {
  const { personalData, professionalData } = useSelector((state: GlobalState) => state);
  const { address, city, cpf, email, name, uf } = personalData;
  const { description, resume, role } = professionalData;
  return (
    <section>
      <h1>Dados Enviados</h1>
      <div>
        {`Nome: ${name}`}
      </div>
      <div>
        {`Email: ${email}`}
      </div>
      <div>
        {`CPF: ${cpf}`}
      </div>
      <div>
        {`Endereço: ${address}`}
      </div>
      <div>
        {`Cidade: ${city}`}
      </div>
      <div>
        {`Estado: ${uf}`}
      </div>
      <div>
        {`Currículo: ${resume}`}
      </div>
      <div>
        {`Cargo: ${role}`}
      </div>
      <div>
        {`Descrição do cargo: ${description}`}
      </div>
    </section>
  );
}

export default FormDisplay;
