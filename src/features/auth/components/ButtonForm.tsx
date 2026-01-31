type ButtonFormProps = {
  label: string;
  isSubmitting: boolean;
};
export default function ButtonForm({ label, isSubmitting }: ButtonFormProps) {
  return (
    <button
      type="submit"
      className="bg-indigo-600/80 hover:bg-indigo-600 hover:cursor-pointer py-2 text-white rounded-xl"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Memproses..." : label}
    </button>
  );
}
