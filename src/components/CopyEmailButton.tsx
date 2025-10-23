import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "Your Email Address";
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Animate in the "copied" text
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.1, ease: "power1.out" }
      );
    }

    setTimeout(() => {
      // Animate back to original "copy" text
      if (textRef.current) {
        gsap.to(textRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.1,
          ease: "power1.in",
          onComplete: () => setCopied(false),
        });
      } else {
        setCopied(false);
      }
    }, 2000);
  };

  // Hover and tap effects
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleHover = () => gsap.to(btn, { y: -5, duration: 0.2, ease: "power1.out" });
    const handleHoverOut = () => gsap.to(btn, { y: 0, duration: 0.2, ease: "power1.out" });
    const handleTap = () => gsap.to(btn, { scale: 1.05, duration: 0.1 });
    const handleTapRelease = () => gsap.to(btn, { scale: 1, duration: 0.1 });

    btn.addEventListener("mouseenter", handleHover);
    btn.addEventListener("mouseleave", handleHoverOut);
    btn.addEventListener("mousedown", handleTap);
    btn.addEventListener("mouseup", handleTapRelease);
    btn.addEventListener("mouseleave", handleTapRelease);

    return () => {
      btn.removeEventListener("mouseenter", handleHover);
      btn.removeEventListener("mouseleave", handleHoverOut);
      btn.removeEventListener("mousedown", handleTap);
      btn.removeEventListener("mouseup", handleTapRelease);
      btn.removeEventListener("mouseleave", handleTapRelease);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={copyToClipboard}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <div ref={textRef} className="flex items-center justify-center gap-2">
        {copied ? (
          <>
            <img src="assets/copy-done.svg" className="w-5" alt="copy icon" />
            Email has Copied
          </>
        ) : (
          <>
            <img src="assets/copy.svg" className="w-5" alt="copy icon" />
            Copy Email Address
          </>
        )}
      </div>
    </button>
  );
};

export default CopyEmailButton;
