import SearchInput from './SearchInput';

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center w-full p-3 bg-black/35">
      <div className="w-1/6 flex justify-center items-center text-neutral-100">
        <a href={'/'} className="flex justify-center items-center">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/emoji/48/soccer-ball-emoji.png"
            alt="soccer-ball-emoji"
          />
          <div className="px-2 md:block hidden font-bold text-x1 text-yellow-50">
            Football Stats
          </div>
        </a>
      </div>
      <div className="w-4/6 flex justify-center items-center">
        <SearchInput />
      </div>
      <div className="w-1/6"></div>
    </div>
  );
}
