import { EnterpriseProps } from "../../../redux/ducks/enterprise/types";
export interface HomeViewProps {
  enterprises: EnterpriseProps[];
  filteredEnterprises: EnterpriseProps[];
  isLoading: boolean;
  isError: boolean;
  isFilter: boolean;
  isFilterError: boolean;
  fetchEnterprises: () => void;
  handleClickArrow(): Promise<void>;
}

export interface EnterpriseDetailsViewProps {
  enterprise: EnterpriseProps;
  enterpriseDetails: EnterpriseProps;
  isLoading: boolean;
  isError: boolean;
  addEnterpriseInList: (enterprise: EnterpriseProps) => void;
}

export interface FilterViewProps {
  filteredEnterprises: EnterpriseProps[];
  isLoading: boolean;
  isError: boolean;
  isFilter: boolean;
  fetchEnterprisesByFilter: (enterpriseType: number, name: string) => void;
}

export interface FavoriteListProps {
  favoriteList: EnterpriseProps[];

  removeEnterpriseInList: (enterprise: EnterpriseProps) => void;
}
