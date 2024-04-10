import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: String;
  Icon: LucideIcon;
};
export function Button({ title, Icon, ...rest }: ButtonProps) {
  return (
    <button className="bg-cyan-600 flex gap-3 h-9 justify-center items-center w-40  " {...rest} id="btn">
      {Icon && <Icon />}
      {title}
    </button>
  );
}
//npm install lucide-react