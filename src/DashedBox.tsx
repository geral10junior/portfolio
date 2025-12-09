interface DashedBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const DashedBox = ({ children, className = "" }: DashedBoxProps) => {
  return (
    <div className={`relative flex group ${className}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <rect
          x="1"
          y="1"
          width="100%"
          height="100%"
          rx="6"
          ry="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="16 10"
          className="text-neutral-600 group-hover:text-red-600 transition-colors duration-300 ease-in-out"
          style={{ width: "calc(100% - 2px)", height: "calc(100% - 2px)" }}
        />
      </svg>

      <div className="relative z-10 px-6 py-2 hover:stroke-red-600">
        {children}
      </div>
    </div>
  );
};
