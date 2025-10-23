const Input = ({
  type,
  placeholder,
}: {
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-white/20 shadow-black/10 shadow-md mt-5 px-5 py-2.5 border border-white/50 border-r-white/20 border-none rounded-4xl outline-none w-full text-md text-white placeholder:text-white tracking-wider -b-white/20"
    />
  );
};

export default Input;
