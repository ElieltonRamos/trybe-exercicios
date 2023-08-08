type PayloadPerson = {
  name: string;
  email: string;
  cpf: string;
  address: string;
  city: string;
  uf: string;
};

type PayloadProf = {
  resume: string;
  role: string;
  description: string;
};

export type GlobalState = {
  personalData: PayloadPerson,
  professionalData: PayloadProf,
};

export const
  actionPersonalForm = (type: string, payload: PayloadPerson) => ({ type, payload });

export function actionProfissionalForm(type: string, payload: PayloadProf) {
  return { type, payload };
}
