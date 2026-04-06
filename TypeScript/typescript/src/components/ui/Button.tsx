interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-3 py-1 rounded"
  >
    {children}
  </button>
);

export default Button;
