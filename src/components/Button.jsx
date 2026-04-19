import Link from "next/link";
import clsx from "clsx";

const Button = ({ invert, variant, href, className, children, ...props }) => {
  const baseStyles = {
    default: "bg-neutral-950 text-white hover:bg-neutral-800",
    invert: "bg-white text-neutral-950 hover:bg-neutral-200",
    purple: "bg-[#C85ACF] text-white hover:bg-[#8E3CA8] transition-colors",
    gradient:
      "bg-gradient-to-r from-[#C85ACF] via-[#8E3CA8] to-[#6A2A82] text-white hover:opacity-90 transition",
  };


  // Determine which style to use
  const style =
    variant === "gradient"
      ? baseStyles.gradient
      : variant === "purple"
      ? baseStyles.purple
      : invert
      ? baseStyles.invert
      : baseStyles.default;


  className = clsx(
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    style,
    className
  );

  const inner = <span>{children}</span>;

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
