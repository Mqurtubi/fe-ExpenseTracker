import { Link } from "react-router-dom";

type FooterFormProps = {
  text: string;
  linkText: string;
  href: string;
};
export default function FooterForm({ text, linkText, href }: FooterFormProps) {
  return (
    <p className="text-center text-slate-600">
      {text}{" "}
      <Link to={href} className="text-indigo-600 font-semibold">
        {linkText}
      </Link>
    </p>
  );
}
