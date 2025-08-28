import React, { useEffect, useRef } from "react";

const InstagramSection = () => {
  const instagramUrl =
    "https://www.instagram.com/safepianomover_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `rgba(34, 197, 94, ${Math.random() * 0.4 + 0.1})`; // Green shades
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Circle class
    class Circle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(34, 197, 94, ${Math.random() * 0.05 + 0.02})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // Create particles and circles
    const particles = [];
    const circles = [];

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    for (let i = 0; i < 5; i++) {
      circles.push(new Circle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw circles
      circles.forEach((circle) => {
        circle.update();
        circle.draw();
      });

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section className="instagram-section bg-black py-6 px-4 relative overflow-hidden">
      {/* Animated background canvas */}
      <div className="absolute inset-0 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Image Container */}
        <div className="relative w-full md:w-2/5 flex justify-center order-2 md:order-1">
          <div className="relative">
            <img
              src="/instagram.png"
              alt="Instagram Preview"
              className="w-full max-w-sm  z-10 relative"
            />

            {/* Subtle glow effect around the image */}
            <div className="absolute inset-0 bg-green-400 rounded-lg blur-xl opacity-20 -z-10"></div>

            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-green-500 rounded-full border-4 border-white shadow-lg z-20 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Content and Button */}
        <div className="w-full md:w-3/5 text-center md:text-center order-1 md:order-2">
          <h2 className="text-5xl md:text-7xl font-semibold mb-4 text-white tracking-tight">
            FIND US ON INSTAGRAM
          </h2>
          <p className="text-lg text-white text-center mb-8">
            Stay updated with our latest offers and news by following us on
            Instagram!
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-4 px-10 rounded-full hover:bg-green-600  duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
