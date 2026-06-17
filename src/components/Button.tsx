import type { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div
      className="text-black rounded py-2 px-4 mt-2 bg-cyan-400 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
