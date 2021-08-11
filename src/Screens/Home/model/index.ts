import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
export interface HomeView {
  enterprises: EnterpriseProps[];
  filteredEnterprises: EnterpriseProps[];
  isLoading: boolean;
  isError: boolean;
  isFilter: boolean;
  isFilterError: boolean;
  fetchEnterprises: () => void;
  fetchEnterpriseById: (id: number) => void;
  fetchEnterprisesByFilter: (enterpriseType: number, name: string) => void;
}

export interface EnterpriseDetailsView {
  enterpriseId: number;
  enterpriseDetails: EnterpriseProps;
  isLoading: boolean;
  isError: boolean;
  fetchEnterpriseById: (id: number) => void;
}
