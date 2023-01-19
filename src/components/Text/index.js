import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[15px] md:text-[29px] text-[40px]",
  h2: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "font-bold text-[19px]",
  h4: "text-[16px]",
  h5: "text-[14px]",
  h6: "text-[12px]",
  body1: "font-normal text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
