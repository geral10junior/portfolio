import { useEffect, useState } from "react";

const DirectionalFlash = () => {
  const [flash, setFlash] = useState({
    active: false,
    x: "50%",
    y: "50%",
  });

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await triggerFlash("10%", "20%");

      await new Promise((r) => setTimeout(r, 400));
      await triggerFlash("90%", "30%");

      await new Promise((r) => setTimeout(r, 800));
      await triggerFlash("50%", "10%");

      // Finaliza
      setTimeout(() => setFinished(true), 500);
    };

    sequence();
  }, []);

  const triggerFlash = async (x: string, y: string) => {
    setFlash({ active: true, x, y });

    await new Promise((r) => setTimeout(r, 150));

    setFlash((prev) => ({ ...prev, active: false }));
  };

  if (finished) return null;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none transition-opacity duration-150 ease-out"
      style={{
        opacity: flash.active ? 1 : 0,

        background: `radial-gradient(circle at ${flash.x} ${flash.y}, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)`,
      }}
    />
  );
};

export default DirectionalFlash;
