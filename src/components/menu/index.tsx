import { Button } from "components/button";
import { FC, memo, useState } from "react";

export const Menu: FC<{ icon?: boolean; render?: any; activator?: any }> = memo(
  ({ icon, render, activator }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="relative w-32">
        <Button onClick={() => setOpen(!open)} icon={icon}>
          {activator && activator()}
        </Button>
        {open && (
          <div className="absolute top-10 left-0 w-auto ">
            {render && render(setOpen)}
          </div>
        )}
      </div>
    );
  }
);
