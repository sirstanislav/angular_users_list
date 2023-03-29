export interface BankType {
  page: string
  filtri: FilterType[]
}

export interface FilterType {
  element?: string;
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  required: boolean;
  validation?: {
    maxLength: number;
    pattern?: string;
  };
  options?: {
    value: string;
    label: string;
  }[];
  section: string;
}
