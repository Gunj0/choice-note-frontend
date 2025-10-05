export interface Product {
  id: string;
  name: string;
  evaluations: Record<string, string>;
  isSelected: boolean;
}
