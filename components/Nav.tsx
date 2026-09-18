export default function Nav() {
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">ESMAT FAHIM</a>
        <nav className="flex gap-5 text-sm">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}