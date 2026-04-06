interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ value, onChange }: Props) => (
  <input
    className="border p-2 rounded w-full"
    value={value}
    onChange={onChange}
  />
);

export default Input;
