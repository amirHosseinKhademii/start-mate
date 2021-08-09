import { FC, memo } from "react";

export const LinkNav: FC<ILinkNav> = memo(({ children, size, onClick }) => {
  return (
    <button
      slot="wrapper"
      onClick={onClick}
      className={` cursor-pointer focus:outline-none  ${
        size === "title"
          ? "text-lg"
          : size === "small"
          ? "text-sm"
          : "text-base"
      }`}
    >
      {children}
    </button>
  );
});
