const Submit = ({ value = "Submit" }: { value?: string }) => {
  return (
    <input
      type="submit"
      value={value}
      className="bg-white shadow-black/10 shadow-md mt-5 mb-5 px-5 py-2.5 border border-white/50 border-r-white/20 border-b-white/20 border-none rounded-4xl outline-none w-full max-w-24 font-semibold text-[#666] text-md placeholder:text-white tracking-wider cursor-pointer"
    />
  );
};

export default Submit;
