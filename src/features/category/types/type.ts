interface CategoryValue {
  id: string;
  name: string;
  type: TypeCategory;
  icon?: string;
  color?: string;
  is_default: boolean;
}

type TypeCategory = "EXPENSE" | "INCOME" | "BOTH";

export type { CategoryValue, TypeCategory };
