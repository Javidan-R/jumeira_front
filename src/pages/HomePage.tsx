import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Premium Canvas animation
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");

    if (ctx) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Define the type of particles array as Particle[]
      const particles: Particle[] = [];
      const colors = ['#ff5c8d', '#ff7f50', '#ffb6c1', '#ffcc99', '#b0e0e6'];

      class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.size = Math.random() * 5 + 2;
          this.speedX = Math.random() * 2 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.size > 0.1) this.size -= 0.1;
        }

        draw() {
          if (ctx) {  // Check if ctx is available
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
          }
        }
      }

      const createParticles = (event: MouseEvent) => {
        const mouseX = event.x;
        const mouseY = event.y;
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(mouseX, mouseY));
        }
      };

      const animateCanvas = () => {
        if (ctx) {  // Ensure ctx is available before using it
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].size <= 0.1) {
              particles.splice(i, 1);
              i--;
            }
          }
          requestAnimationFrame(animateCanvas);
        }
      };

      canvas?.addEventListener("mousemove", createParticles);  // Check canvas for null
      animateCanvas();

      return () => {
        // Cleanup the event listener
        if (canvas) {  // Ensure canvas is available before calling removeEventListener
          canvas.removeEventListener("mousemove", createParticles);
        }
      };
    }
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white overflow-hidden">
      <canvas id="canvas" className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.h1
          className="text-6xl font-extrabold text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Welcome to <span className="text-pink-500">Jumeira House</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-xl text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          A luxurious and modern experience with premium animations and design.
        </motion.p>
        <motion.button
          className="mt-8 px-8 py-3 text-xl font-semibold text-blue-500 bg-white rounded-full hover:bg-blue-100 transition-all"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default HomePage;
