import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="bg-momo-blue h-64 flex items-center justify-between px-32 text-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-48">
        <div className="bg-momo-darkText p-10 rounded-xl border-2 border-momo-yellow shadow-lg flex items-center justify-center w-auto h-auto">
          <img
            src="https://momobizuat.momo.africa/momo4business-web-3-1-x/App%20Icon.png"
            alt=""
            className="w-32 h-32 rounded-full"
          />
          <span className="text-xl text-momo-yellow"> FoMo</span>
        </div>
        {/* <nav className="flex items-center gap-10">
          <span className="text-momo-yellow font-bold text-sm tracking-wide px-12 py-6 border-b-2 border-momo-yellow">
            Home
          </span>
        </nav> */}
      </div>
      <div className="flex items-center gap-16 text-md font-semibold">
        <div className="flex items-center gap-4 text-momo-yellow font-black uppercase italic tracking-wider">
          Yolo{" "}
          <span className="text-white normal-case not-italic font-normal opacity-80">
            Shezan |
          </span>
        </div>
        <span className="font-bold tracking-tight text-white">0779999420</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-10 py-4 rounded bg-momo-darkText text-momo-yellow border border-slate-700/50 mr-10 hover:opacity-90 transition-colors inline-flex items-center gap-4"
        >
          {darkMode ? <Sun className="w-24 h-24" /> : <Moon className="w-24 h-24" />}
        </button>
      </div>
    </header>
  );
}
