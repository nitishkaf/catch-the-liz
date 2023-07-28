import React, { useState, useEffect, useRef } from "react";
import { Flex, Text, Heading, useBreakpointValue } from "@chakra-ui/react";
import { TTimeBlock } from "@/types";

const TimeBlock = ({ number = 0, unit, textSize, numberProps }: TTimeBlock) => {
  const responsiveSize = useBreakpointValue({
    base: "xs",
    md: "xl",
  });

  const digitSize = textSize ?? responsiveSize;

  return (
    <Flex alignItems="center" direction="column">
      <Heading
        minW={{ base: "20px", md: "40px" }}
        textAlign="center"
        size={digitSize}
        {...numberProps}
        variant="short"
      >
        {number.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
      </Heading>
      <Text
        textTransform="capitalize"
        size="xs"
        variant="label"
        {...numberProps}
      >
        {unit}
      </Text>
    </Flex>
  );
};

type CountdownProps = {
  timeInSeconds: number;
};

export const Countdown = ({ timeInSeconds }: CountdownProps) => {
  const [countdownTime, setCountdownTime] = useState(timeInSeconds);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Start the countdown timer
    timerRef.current = window.setInterval(() => {
      setCountdownTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (countdownTime === 0) {
      // Countdown reached 0, clear the interval to stop the timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  }, [countdownTime]);

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  return (
    <Flex>
      <TimeBlock number={minutes} unit="min" />
      <Heading mx={{ base: 1, md: 2 }} size="lg">
        :
      </Heading>
      <TimeBlock number={seconds} unit="sec" />
    </Flex>
  );
};
