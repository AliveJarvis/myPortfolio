import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Corosel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const start = useRef<{ x: number; y: number } | null>(null);
  const move = (offset: number) => {
    setDirection(offset);
    setIndex((previous) => (previous + images.length + offset) % images.length);
  };
  return (
    <div role="group" aria-label={`${name} screenshots`} className="gallery">
      <div
        className="gallery-image"
        data-direction={direction < 0 ? "back" : "forward"}
        onPointerDown={(e) => {
          start.current = { x: e.clientX, y: e.clientY };
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerCancel={() => {
          start.current = null;
        }}
        onPointerUp={(e) => {
          if (start.current) {
            const dx = e.clientX - start.current.x;
            if (
              Math.abs(dx) > Math.max(40, Math.abs(e.clientY - start.current.y))
            )
              move(dx < 0 ? 1 : -1);
          }
          start.current = null;
        }}
      >
        <Image
          key={index}
          draggable={false}
          src={images[index]}
          alt={`${name}, screenshot ${index + 1} of ${images.length}`}
          fill
          sizes="(min-width: 900px) 45vw, 92vw"
        />
      </div>
      <div className="gallery-controls">
        <button
          type="button"
          aria-label={`Previous ${name} screenshot`}
          onClick={() => move(-1)}
        >
          <ChevronLeft size={16} />
        </button>
        <span aria-live="polite">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          aria-label={`Next ${name} screenshot`}
          onClick={() => move(1)}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
