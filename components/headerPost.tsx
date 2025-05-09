import { BsThreeDotsVertical } from "react-icons/bs";

interface HeaderPostProps {
  username: string;
  avatarUrl: string;
  isSuggested?: boolean;
}

export default function HeaderPost({ username, avatarUrl, isSuggested }: HeaderPostProps) {
  return (
    <div className="w-full h-18 bg-neutral-100 flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{username}</span>
          {isSuggested && <span className="text-xs text-gray-700">Sugestões para você</span>}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="text-sm text-gray-950 border border-neutral-950 rounded-lg py-1 px-3">
          Seguir
        </button>
        <BsThreeDotsVertical className="w-5 h-5" />
      </div>
    </div>
  );
}
