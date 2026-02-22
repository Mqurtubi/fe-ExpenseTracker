import { z } from "zod";

const addCategorySchema = z.object({
  name: z.string().min(1, "Name category required"),
  type: z.enum(["INCOME", "EXPENSE", "BOTH"]),
});

type CategoryFormData = z.infer<typeof addCategorySchema>;

export { type CategoryFormData, addCategorySchema };
