import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder16: "rounded-radius16",
  icbRoundedBorder8: "rounded-radius8",
  CircleBorder12: "rounded-radius12",
  RoundedBorder8: "rounded-radius8",
};
const variants = {
  icbFillIndigoA700: "bg-indigo_A700",
  icbFillGray100: "bg-gray_100",
  FillRed600: "bg-red_600 text-white_A700",
  FillAmberA400: "bg-amber_A400 text-white_A700",
  FillTeal400: "bg-teal_400 text-white_A700",
  FillGray100: "bg-gray_100 text-bluegray_300",
};
const sizes = { smIcn: "p-[9px]", sm: "p-[5px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} hover:bg-violet-600`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder16",
    "icbRoundedBorder8",
    "CircleBorder12",
    "RoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "icbFillIndigoA700",
    "icbFillGray100",
    "FillRed600",
    "FillAmberA400",
    "FillTeal400",
    "FillGray100",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder12",
  variant: "FillTeal400",
  size: "sm",
};

export { Button };
