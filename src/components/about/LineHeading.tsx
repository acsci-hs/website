export default function LineHeading({ title }: { title: string }) {
  const borderStyle = "grow border-t border-[1.25px] border-black max-w-[50vw]";
  return (
    <div className="flex justify-content items-center">
      <div className={borderStyle}></div>
      <span className="shrink-0 mx-4 font-display font-bold text-5xl tracking-wide uppercase">
        {title}
      </span>
      <div className={borderStyle}></div>
    </div>
  );
}
