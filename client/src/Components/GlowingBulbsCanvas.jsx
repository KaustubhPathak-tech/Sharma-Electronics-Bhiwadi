import React, { useEffect, useRef } from "react";

const GlowingBulbsCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Define bulb properties
    const bulbs = [
      { x: 100, y: 100, radius: 20 },
      { x: 200, y: 150, radius: 25 },
      { x: 300, y: 120, radius: 30 },
    ];

    // Draw bulbs
    const drawBulbs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bulbs.forEach((bulb) => {
        // Draw bulb
        ctx.beginPath();
        ctx.arc(bulb.x, bulb.y, bulb.radius, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();

        // Draw glow effect
        const glowGradient = ctx.createRadialGradient(
          bulb.x,
          bulb.y,
          0,
          bulb.x,
          bulb.y,
          bulb.radius * 1.5
        );
        glowGradient.addColorStop(0, "#eddbb7");
        glowGradient.addColorStop(1, "#c7a052");
        ctx.beginPath();
        ctx.arc(bulb.x, bulb.y, bulb.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      drawBulbs();
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return <canvas ref={canvasRef} width={500} height={300} />;
};

export default GlowingBulbsCanvas;
