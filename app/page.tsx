import React from 'react';
import Image from 'next/image'
import FlourishV1 from '@/app/componentes/componente1'
import FlourishV2 from '@/app/componentes/componente2'
import FlourishV3 from '@/app/componentes/componente3'
import FlourishV4 from '@/app/componentes/componente4'
import FlourishV5 from '@/app/componentes/componente5'
import FlourishV6 from '@/app/componentes/componente6'
import FlourishV7 from '@/app/componentes/componente7'


const AttentionPoster: React.FC = () => {
  return (
    <main>
      <div className="bg-[#d20303] text-black p-8 rounded-xl max-w-[1410px] h-[750px] mx-auto flex flex-col justify-center items-center relative">
        {/* Flechas decorativas en las esquinas */}
        <div className="absolute top-6 left-6 w-6 h-6 border-t-4 border-l-4 border-black rotate-180"></div>
        <div className="absolute top-6 right-6 w-6 h-6 border-t-4 border-r-4 border-black -rotate-180"></div>
        <div className="absolute bottom-6 left-6 w-6 h-6 border-b-4 border-l-4 border-black -rotate-180"></div>
        <div className="absolute bottom-6 right-6 w-6 h-6 border-b-4 border-r-4 border-black rotate-180"></div>



        {/* Título */}


        {/* Subtítulo */}
        <p className="text-center text-4xl mb-4 uppercase tracking-wide">El poder de las potencias es LETAL</p>

        {/* Texto central LETAL */}
        <div className="text-center text-[160px] sm:text-[130px] font-black tracking-wider leading-none">LENGUAJE VISUAL</div>



        {/* Texto inferior */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl tracking-wider">
          VISUALIZACIÓN DE DATOS, UTDT
        </div>
      </div>






      {/* Título a LV1 */}
      <h3 className="text-[#D9D9D9] text-left text-7xl font-bold my-20 ml-[50px]">TIPOS DE EMISIONES Y SUS ACTIVIDADES</h3>

        {/* Párrafo explicativo LV1*/}
        <p className="text-[#D9D9D9] text-[16px] text-lg leading-relaxed mx-20 ml-[50px] w-1/2">
        En un principio, explicaremos qué son los gases de efecto invernadero (CO2, NOx, CH4) y las actividades humanas que provocan su emisión, para esto utilizaremos este sistema. 
        </p>
        
      <div className="flex justify-center my-8">
        <Image src="/tiposemisiones.svg" alt="Visualizacion de datos" width={1400} height={600} />
      </div>

    {/* IMAGEN NO CENTRADA
    <Image src="/tiposemisiones.svg" alt="Visualizacion de datos" width={1200} height={400} /> 
    */}






      {/* Título a LV2 */}
      <h2 className="text-[#D9D9D9] text-left text-7xl font-bold my-20 ml-[50px]">LOS PAÍSES Y SUS EMISIONES</h2>

      <p className="text-[#D9D9D9] text-[16px] text-lg leading-relaxed mx-20 ml-[50px] w-1/2">
      Posteriormente, usaremos un gráfico del planeta tierra interactivo para categorizar cada país con su respectivo nivel. Para enfatizar esto, cada país dispondrá de una pieza del lenguaje visual que identificará si el país es una potencia, sus emisiones totales y el nivel correspondiente. 
        </p>

      <div className="flex justify-center my-8">
        <Image src="/paises.svg" alt="Visualizacion de datos" width={1800} height={500} />
      </div>

      {/* NO CENTRADA
      <Image src="/paises.svg" alt="Visualizacion de datos" width={1800} height={500} /> */}

{/* Título a LV3 */}
        <h2 className="text-[#D9D9D9] text-left text-7xl font-bold my-20 ml-[50px]">Nuestro futuro</h2>

      <p className="text-[#D9D9D9] text-[16px] text-lg leading-relaxed mx-20 ml-[50px] w-1/2">
      Para evidenciar lo pasará en 2026, realizaremos una compraracion entre el 2020 y 2060. Estos dos gráficos expresan las precipitaciones, la temperatura, los días con temperaturas mayores a 40°C y los días de sequía de ambos años. 
        </p>

      <div className="flex justify-center my-8 ml-8">
        <Image src="/prediccion.svg" alt="Visualizacion de datos" width={1800} height={500} />
      </div>
        
      {/*  NO CENTRADA
      <Image src="/prediccion.svg" alt="Visualizacion de datos" width={1800} height={500} />
      */}



    </main>
  );
};

export default AttentionPoster;
