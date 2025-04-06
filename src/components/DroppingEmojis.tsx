import Image from "next/image";
import { useEffect, useState } from "react";

const DroppingEmojis = ({ count = 15 }) => {
  const [drops, setDrops] = useState<Array<{ left: number; delay: number; size: number }>>([]);

  useEffect(() => {
    // Generate an array of drop objects with random left position, delay, and size.
    const newDrops = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,              // random horizontal position (percentage)
      delay: Math.random() * 5,               // random animation delay between 0 and 5 seconds
      size: 0.5 + Math.random() * 1,          // random font-size between 1rem and 1.5rem
    }));
    setDrops(newDrops);
  }, [count]);

  return (
    <>
      {drops.map((drop, i) => (
        <span
          key={i}
          className="drop-emoji"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            fontSize: `${drop.size}rem`,
          }}
        >
          <Image
            src="/favicon.png"
            alt="Impostors AI"
            width={24}
            height={24}
            className="mr-2"
          />
        </span>
      ))}
    </>
  );
}

export default DroppingEmojis;
