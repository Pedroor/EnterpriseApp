export interface EnterpriseProps {
  id?: number;
  enterprise_name?: string;
  description?: string;
  photo?: string;
  country?: string;
  share_price?: number;
  enterprise_type?: {
    id: number;
    enterprise_type_name: string;
  };
}
