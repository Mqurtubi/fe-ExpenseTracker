type AlertFormProps = {
  isError: boolean;
  message: string | null;
};
export default function AlertForm({ isError, message }: AlertFormProps) {
  if (!message) return null;
  return (
    <p
      className={` border  text-center py-1 rounded-lg  ${!isError ? "border-green-500 bg-green-400/20 text-green-800" : "border-red-500 bg-red-400/20 text-red-800"}`}
    >
      {message}
    </p>
  );
}
