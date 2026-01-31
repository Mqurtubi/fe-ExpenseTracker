import { ReactNode } from "react";

type FormLayoutProps = {
  children: ReactNode;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};
export default function FormLayout({
  children,
  handleSubmit,
}: FormLayoutProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-slate-200 shadow-xs m-auto col-span-3 px-10 py-7 rounded-2xl grid gap-7"
    >
      {children}
    </form>
  );
}
