interface Props {
  value: string;
  onChange(value: string): void;
}

function SearchBox({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input input-bordered w-full"
      placeholder="Search..."
    />
  );
}

export default SearchBox;
