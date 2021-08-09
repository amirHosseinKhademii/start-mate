import { FC, useEffect, useState } from "react";
import { Animate } from "react-move";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CircleBar: FC<{
  value?: number;
  duration?: number;
  start?: number;
  label?: string;
}> = ({ value, start = 0, duration, label }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated((prev) => !prev);
  }, []);

  return (
    <Animate
      start={() => ({
        value: start,
      })}
      update={() => ({
        value: [isAnimated ? value : start],
        timing: {
          duration: duration * 1000,
        },
      })}
    >
      {({ value }) => {
        const roundedValue = Math.round(value);
        return (
          <div className="flex flex-col items-center space-y-6">
            <span
              className={`text-xl ${
                value < 30
                  ? "text-red-500"
                  : value < 60
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {label}
            </span>
            <CircularProgressbar
              className="w-24 h-24"
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({
                pathTransition: "none",
                pathColor:
                  value < 30 ? "#f80f0f" : value < 60 ? "#fbab16" : "#00fd22",

                textColor:
                  value < 30 ? "#f80f0f" : value < 60 ? "#fbab16" : "#00fd22",
              })}
            />
          </div>
        );
      }}
    </Animate>
  );
};
