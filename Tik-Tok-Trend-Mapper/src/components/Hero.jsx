import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';
import styles from './Hero.module.css';
import EncryptButton from './EncryptButton';

const TARGET_TEXT = "Tik Tok TrendMapper";

const Hero = () => {
  const vantaRef = useRef(null);
  const scrambledText = TARGET_TEXT;

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x4285f4,         // Google Blue
      color2: 0x34a853,        // Google Green
      backgroundColor: 0xf5f5f5, // Light Grey
      THREE,
      size: 1.3
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className={styles.hero} ref={vantaRef}>
      <h1 className={styles.heroText}>{scrambledText}</h1>
      <div className={styles.heroAction}>
        <EncryptButton />
      </div>
    </div>
  );
};

export default Hero;
