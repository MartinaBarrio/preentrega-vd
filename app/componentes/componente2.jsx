'use client'
import React, { useEffect } from 'react';

const FlourishV2 = () => {
  useEffect(() => {
    // Cargar el script de Flourish cuando el componente se monte
    const script = document.createElement('script');
    script.src = 'https://public.flourish.studio/resources/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flourish-embed flourish-map" data-src="visualisation/19361938">
    </div>
  );
};

export default FlourishV2;





