import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Ember {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function EmberParticles({ count = 20 }: {count?: number;}) {
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    const generated: Ember[] = [];
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5
      });
    }
    setEmbers(generated);
  }, [count]);

  return (
    <div data-ev-id="ev_a483487ade" className="absolute inset-0 overflow-hidden pointer-events-none">
			{embers.map((ember) =>
      <motion.div
        key={ember.id}
        className="absolute rounded-full"
        style={{
          left: `${ember.x}%`,
          top: `${ember.y}%`,
          width: ember.size,
          height: ember.size,
          background: `radial-gradient(circle, #F4D03F 0%, #D4AF37 40%, #8B0000 100%)`,
          boxShadow: `0 0 ${ember.size * 2}px #D4AF3780, 0 0 ${ember.size * 4}px #8B000040`
        }}
        animate={{
          y: [0, -100, -200],
          x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.3]
        }}
        transition={{
          duration: ember.duration,
          repeat: Infinity,
          delay: ember.delay,
          ease: 'linear'
        }} />

      )}
		</div>);

}