interface CategoryValue {
  id: string;
  name: string;
  type: TypeCategory;
  icon?: string;
  color?: string;
}

type TypeCategory = "EXPENSE" | "INCOME" | "BOTH";

export type { CategoryValue };
