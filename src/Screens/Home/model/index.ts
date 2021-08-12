import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
export interface HomeViewProps {
  enterprises: EnterpriseProps[];
  filteredEnterprises: EnterpriseProps[];
  isLoading: boolean;
  isError: boolean;
  isFilter: boolean;
  isFilterError: boolean;
  fetchEnterprises: () => void;
  fetchEnterpriseById: (id: number) => void;
  fetchEnterprisesByFilter: (enterpriseType: number, name: string) => void;
  handleClickArrow(): Promise<void>;
}

export interface EnterpriseDetailsViewProps {
  enterprise: EnterpriseProps;
  enterpriseDetails: EnterpriseProps;
  isLoading: boolean;
  isError: boolean;
  fetchEnterpriseById: (id: number) => void;
}

export interface FilterViewProps {
  filteredEnterprises: EnterpriseProps[];
  isLoading: boolean;
  isError: boolean;
  isFilter: boolean;
  fetchEnterprisesByFilter: (enterpriseType: number, name: string) => void;
}
