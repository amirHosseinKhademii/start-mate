import { FC, memo } from "react";
import { classNames } from "utils";

export const List: FC<IList> = memo(({ children, className }) => {
  return (
    <div className={classNames("w-full col-start", className)} slot="wrapper">
      {children}
    </div>
  );
});
