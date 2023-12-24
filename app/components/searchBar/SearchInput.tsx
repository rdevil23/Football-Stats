export default function SearchInput() {
  return (
    <div className="flex justify-center items-center w-full max-w-lg relative">
      <input
        type="text"
        placeholder="Search for a team"
        className="w-full bg-transparent p-2 outline-none
         border-lime-950 border-[1px] rounded-xl 
         focus:border-yellow-50 text-yellow-50 placeholder:text-yellow-50"
      />
    </div>
  );
}
