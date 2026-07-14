import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Header({
  darkMode,
  setDarkMode,
}: Readonly<HeaderProps>) {
  return (
    <header className="bg-momo-blue h-16.5 flex items-center justify-between px-6 md:px-8 text-white sticky top-0 z-50 shadow-momo-sm">
      <div className="flex items-center gap-6">
        <div className="bg-momo-blue/10 p-6 rounded-xl border border-momo-yellow/70 flex items-center justify-center">
          <img
            src="https://momobizuat.momo.africa/momo4business-web-3-1-x/App%20Icon.png"
            alt=""
            className="w-8 h-8 rounded-full"
          />
          <span className="momo-typo-label-xl text-momo-yellow ml-2">
            MoMo Business
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 momo-typo-label-xl">
        <div className="flex items-center gap-2 text-momo-yellow">
          <span className="uppercase">User</span>
          <span className="text-white/85">Shezan</span>
        </div>
        <span className="text-white">0779999420</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 rounded-lg bg-momo-blue/30 text-momo-yellow border border-momo-yellow/50 hover:bg-momo-blue/50 transition-colors inline-flex items-center gap-2"
        >
          {darkMode ? (
            <Sun className="w-24 h-24" />
          ) : (
            <Moon className="w-24 h-24" />
          )}
        </button>
      </div>
    </header>
  );
}
