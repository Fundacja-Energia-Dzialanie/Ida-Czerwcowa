import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
    join?: string;
}

export default function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 0.25, // Duration of the animation in seconds
    className = "",
    startWhen = true,
    separator = "",
    onStart,
    onEnd,
    join
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);

    // Calculate damping and stiffness based on duration
    const damping = 20 + 40 * (1 / duration); // Adjust this formula for finer control
    const stiffness = 50 * (1 / duration);   // Adjust this formula for finer control

    const springValue = useSpring(motionValue, {
        damping,
        stiffness,
    });

    const isInView = useInView(ref, { once: true, margin: "0px" });

    // Set initial text content to the initial value based on direction
    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = String(direction === "down" ? to : from);
        }
    }, [from, to, direction]);

    // Start the animation when in view and startWhen is true
    useEffect(() => {
        if (isInView && startWhen) {
            if (typeof onStart === "function") {
                onStart();
            }

            // Start the animation after the specified delay
            const animationStartTimeoutId = setTimeout(() => {
                motionValue.set(direction === "down" ? from : to);
            }, delay * 1000);

            // Set the final value directly after duration to ensure animation completes
            const animationEndTimeoutId = setTimeout(() => {
                // Force the final value to ensure the animation completes
                if (ref.current) {
                    const finalValue = direction === "down" ? from : to;

                    const options = {
                        useGrouping: !!separator,
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    };

                    const formattedNumber = Intl.NumberFormat("en-US", options).format(
                        finalValue
                    );

                    ref.current.textContent = separator
                        ? formattedNumber.replace(/,/g, separator)
                        : formattedNumber;

                    // Also set the motion value to the final value to ensure consistency
                    motionValue.set(finalValue);
                }

                // Call onEnd callback
                if (typeof onEnd === "function") {
                    onEnd();
                }
            }, (delay + duration) * 1000);

            return () => {
                clearTimeout(animationStartTimeoutId);
                clearTimeout(animationEndTimeoutId);
            };
        }
    }, [isInView, startWhen, motionValue, direction, from, to, delay, duration, onStart, onEnd, separator]);

    // Update text content with formatted number on spring value change
    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                const options = {
                    useGrouping: !!separator,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                };

                const formattedNumber = Intl.NumberFormat("en-US", options).format(
                    Number(latest.toFixed(0))
                );

                ref.current.textContent = separator
                    ? formattedNumber.replace(/,/g, separator)
                    : formattedNumber;
            }
        });

        return () => unsubscribe();
    }, [springValue, separator]);

    return (
        <>
            <div>
                <span className={`${className}`} ref={ref} />&nbsp;{join || ""}
            </div>
        </>
    );
}