import { useEffect, useRef } from "react";

// Update the pointer and the nearest interactive surface once per frame.
export default function CursorTrail() {
  const trail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = trail.current;
    if (!element) return;
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    let surface: HTMLElement | null = null;
    let point: PointerEvent | null = null;
    function resetSurface() {
      surface?.style.removeProperty("--pointer-x");
      surface?.style.removeProperty("--pointer-y");
      surface = null;
    }
    function hide() {
      cancelAnimationFrame(frame);
      frame = 0;
      point = null;
      resetSurface();
      element?.removeAttribute("data-visible");
    }
    function draw() {
      frame = 0;
      if (!point || !element) return;
      const { clientX, clientY, target } = point;
      const next =
        target instanceof Element
          ? target.closest<HTMLElement>("[data-pointer]")
          : null;
      if (surface !== next) resetSurface();
      surface = next;
      if (surface) {
        const box = surface.getBoundingClientRect();
        surface.style.setProperty(
          "--pointer-x",
          String(((clientX - box.left) / box.width) * 2 - 1),
        );
        surface.style.setProperty(
          "--pointer-y",
          String(((clientY - box.top) / box.height) * 2 - 1),
        );
      }
      element.style.transform = `translate3d(${clientX}px,${clientY}px,0)`;
      element.dataset.visible = "true";
    }
    function move(event: PointerEvent) {
      if (event.pointerType !== "mouse") {
        hide();
        return;
      }
      point = event;
      if (!frame) frame = requestAnimationFrame(draw);
    }
    function sync() {
      window.removeEventListener("pointermove", move);
      hide();
      if (media.matches)
        window.addEventListener("pointermove", move, { passive: true });
    }
    sync();
    media.addEventListener("change", sync);
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("scroll", hide, { passive: true });
    return () => {
      hide();
      media.removeEventListener("change", sync);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", hide);
      window.removeEventListener("blur", hide);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, []);
  return <div aria-hidden="true" ref={trail} className="cursor-trail" />;
}
