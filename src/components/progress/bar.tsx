import { FC, useEffect, useState } from "react";
import { Animate } from "react-move";

export const ProggressBar: FC<{
  current?: number;
  duration?: number;
  max?: number;
  label?: string;
}> = ({ current, duration, label = "Days", max }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated((prev) => !prev);
  }, []);

  return (
    <Animate
      start={() => ({
        value: 100,
      })}
      update={() => ({
        value: [isAnimated ? Math.round((current / max) * 100) : 100],
        timing: {
          duration: duration * 1000,
        },
      })}
    >
      {({ value }) => (
        <div className="flex flex-col items-center space-y-4">
          <span
            className={`text-lg ${
              value > 60
                ? "text-green-500"
                : value > 30
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {Math.round((value * max) / 100)} {label}
          </span>
          <div className="w-32 bg-gray-500 h-6 rounded p-1">
            <div
              className={`h-full rounded ${
                value > 60
                  ? "bg-green-500"
                  : value > 30
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      )}
    </Animate>
  );
};
