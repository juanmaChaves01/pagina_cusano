

export default function NavLink({ section, children }) {
  return (
    <a
      href={`#${section}`}
      className="
        relative inline-block
        px-3 py-2
        text-lg font-bold
        transition-colors duration-300
        hover:text-amber-600
        after:absolute
        after:left-0
        after:bottom-0
        after:h-[2px]
        after:w-0
        after:bg-amber-600
        after:transition-all
        after:duration-300
        hover:after:w-full
      "
    >
      {children}
    </a>
  );
}