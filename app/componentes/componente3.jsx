'use client'

import React, { useEffect } from 'react';

const FlourishV3 = () => {
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
    <div className="flourish-embed flourish-chart" data-src="visualisation/19429778">
      <noscript>
        <img
          src="https://public.flourish.studio/visualisation/19429778/thumbnail"
          width="100%"
          alt="chart visualization"
        />
      </noscript>
    </div>
  );
};

export default FlourishV3;






