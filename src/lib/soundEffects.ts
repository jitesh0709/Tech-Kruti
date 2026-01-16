// Sound effects using Web Audio API - no external dependencies needed

export const createAudioContext = () => {
  return new (window.AudioContext || (window as any).webkitAudioContext)();
};

// Power-up / Light turning on sound
export const playPowerUpSound = (audioContext: AudioContext, volume: number = 0.3) => {
  const now = audioContext.currentTime;
  
  // Main tone oscillator - rising pitch
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(200, now);
  oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.3);
  oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.5);
  
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(volume, now + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.start(now);
  oscillator.stop(now + 0.5);
  
  // High frequency shimmer
  const shimmer = audioContext.createOscillator();
  const shimmerGain = audioContext.createGain();
  
  shimmer.type = "sine";
  shimmer.frequency.setValueAtTime(1200, now + 0.1);
  shimmer.frequency.exponentialRampToValueAtTime(2000, now + 0.4);
  
  shimmerGain.gain.setValueAtTime(0, now + 0.1);
  shimmerGain.gain.linearRampToValueAtTime(volume * 0.4, now + 0.2);
  shimmerGain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
  
  shimmer.connect(shimmerGain);
  shimmerGain.connect(audioContext.destination);
  
  shimmer.start(now + 0.1);
  shimmer.stop(now + 0.6);
};

// Electric buzz / hum sound
export const playElectricBuzz = (audioContext: AudioContext, volume: number = 0.15) => {
  const now = audioContext.currentTime;
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  
  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(60, now);
  
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(200, now);
  filter.frequency.linearRampToValueAtTime(800, now + 0.3);
  
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(volume, now + 0.05);
  gainNode.gain.setValueAtTime(volume, now + 0.2);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
  
  oscillator.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.start(now);
  oscillator.stop(now + 0.4);
};

// Sparkle / twinkle sound for particles
export const playSparkleSound = (audioContext: AudioContext, delay: number = 0, volume: number = 0.1) => {
  const now = audioContext.currentTime + delay;
  
  const frequencies = [1800, 2200, 2600, 3000];
  
  frequencies.forEach((freq, index) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(freq, now + index * 0.05);
    
    gainNode.gain.setValueAtTime(0, now + index * 0.05);
    gainNode.gain.linearRampToValueAtTime(volume, now + index * 0.05 + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + index * 0.05 + 0.15);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(now + index * 0.05);
    oscillator.stop(now + index * 0.05 + 0.15);
  });
};

// Whoosh / reveal sound
export const playWhooshSound = (audioContext: AudioContext, volume: number = 0.2) => {
  const now = audioContext.currentTime;
  
  // White noise for whoosh
  const bufferSize = audioContext.sampleRate * 0.5;
  const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  
  const noise = audioContext.createBufferSource();
  noise.buffer = buffer;
  
  const filter = audioContext.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(500, now);
  filter.frequency.exponentialRampToValueAtTime(3000, now + 0.2);
  filter.frequency.exponentialRampToValueAtTime(500, now + 0.4);
  filter.Q.setValueAtTime(1, now);
  
  const gainNode = audioContext.createGain();
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(volume, now + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
  
  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  noise.start(now);
  noise.stop(now + 0.5);
};

// Complete splash screen sound sequence
export const playSplashSequence = (volume: number = 0.3) => {
  try {
    const audioContext = createAudioContext();
    
    // Main power-up sound
    playPowerUpSound(audioContext, volume);
    
    // Electric buzz shortly after
    setTimeout(() => {
      playElectricBuzz(audioContext, volume * 0.5);
    }, 100);
    
    // Sparkles as letters appear
    setTimeout(() => {
      playSparkleSound(audioContext, 0, volume * 0.4);
    }, 400);
    
    // Whoosh for the final reveal
    setTimeout(() => {
      playWhooshSound(audioContext, volume * 0.6);
    }, 800);
    
    // More sparkles for particles
    setTimeout(() => {
      playSparkleSound(audioContext, 0, volume * 0.3);
    }, 1200);
    
    return audioContext;
  } catch (error) {
    console.warn("Audio playback not available:", error);
    return null;
  }
};
