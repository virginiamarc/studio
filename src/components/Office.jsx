import clsx from "clsx";

function Office({ invert = false, className }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic leading-relaxed",
        invert ? "text-neutral-300" : "text-neutral-600",
        className
      )}
    >
      1645 Sun City Center Plaza, Unit 5453
      <br />
      Sun City Center, FL 33571
    </address>
  );
}

export default Office;