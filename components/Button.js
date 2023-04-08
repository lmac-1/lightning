const Button = ({
  children,
  className,
  arrow = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`bg-lightning-mustard enabled:hover:bg-[#C69400] transition-colors ease-in-out text-lightning-green-dark py-2 px-8 rounded-md ${className} ${
        arrow && "group"
      }
      ${disabled && `disabled:opacity-50 disabled:cursor-not-allowed`}`}
      {...props}
      disabled={disabled}
    >
      {children}{" "}
      {arrow && (
        <span className="inline-block transition-transform group-enabled:hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      )}
    </button>
  );
};

export default Button;
