import React from 'react';
import { Sparkles, Compass, Rocket, Globe, Building2, Landmark, Volume2, ArrowRight } from 'lucide-react';

interface VisionPanelProps {
  selectedLang: 'EN' | 'ES';
  onAskVoyager?: (prompt: string) => void;
  onExploreApp?: () => void;
}

export const VisionPanel: React.FC<VisionPanelProps> = ({
  selectedLang,
  onAskVoyager,
  onExploreApp
}) => {
  const isEn = selectedLang === 'EN';

  const visionMessage = isEn
    ? "Our vision: for English to be your tool to live new experiences. Learn today, use it tomorrow in your real life."
    : "Nuestra visión: que el inglés sea tu herramienta para vivir nuevas experiencias. Aprender hoy, usarlo mañana en tu vida real.";

  const speakVision = () => {
    if (onAskVoyager) {
      const prompt = isEn
        ? `[SYSTEM INSTRUCTION: As Voyager, speak our core vision message out loud in warm, encouraging American English: "${visionMessage}"]`
        : `[INSTRUCCIÓN DE SISTEMA: Como Voyager, di en voz alta nuestra visión principal de manera cálida e inspiradora: "${visionMessage}"]`;
      onAskVoyager(prompt);
    }
  };

  const futureModules = [
    {
      icon: Globe,
      title: isEn ? "Global Travel & Real Scenarios" : "Viajes e Inmersión Real",
      desc: isEn ? "Navigate airports, hotels, and cities with total confidence." : "Navega aeropuertos, hoteles y ciudades con total confianza."
    },
    {
      icon: Landmark,
      title: isEn ? "Culture & Civics Preparation" : "Cultura y Cívica en EE.UU.",
      desc: isEn ? "Understand history, citizenship, and daily life in American communities." : "Comprende la historia, la ciudadanía y la vida cotidiana en los Estados Unidos."
    },
    {
      icon: Building2,
      title: isEn ? "Professional Growth" : "Crecimiento Profesional",
      desc: isEn ? "Master workplace communication, interviews, and business English." : "Domina entrevistas, comunicación laboral e inglés de negocios."
    },
    {
      icon: Compass,
      title: isEn ? "Interactive City Journeys" : "Rutas Interactivas por Ciudades",
      desc: isEn ? "Explore icons like New York City, subway routes, and local culture." : "Explora íconos como Nueva York, el metro y la cultura local."
    }
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto p-4 sm:p-6 bg-white text-stone-900 animate-fadeIn space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0D224A] via-[#15346e] to-[#0D224A] rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{isEn ? 'Our Purpose & Horizons' : 'Nuestra Propósito y Horizontes'}</span>
          </div>

          <h2 style={{ fontFamily: "'Raleway', sans-serif" }} className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {isEn ? 'Our Vision' : 'Nuestra Visión'}
          </h2>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3">
            <p className="text-amber-300 text-sm sm:text-base font-semibold leading-relaxed italic">
              “{visionMessage}”
            </p>

            <button
              onClick={speakVision}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs shadow-md transition-all cursor-pointer active:scale-95"
            >
              <Volume2 className="w-4 h-4 text-stone-950" />
              <span>{isEn ? 'Listen to Voyager' : 'Escuchar a Voyager'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Future Learning Horizons */}
      <div className="space-y-4 text-left">
        <div className="flex items-center gap-2 text-[#0D224A]">
          <Rocket className="w-5 h-5 text-amber-500" />
          <h3 style={{ fontFamily: "'Raleway', sans-serif" }} className="text-lg font-bold">
            {isEn ? 'Expanding Horizons' : 'Horizontes en Expansión'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {futureModules.map((mod, idx) => {
            const IconComp = mod.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-all duration-200 flex flex-col justify-between space-y-2 group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D224A] text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900 leading-tight">
                    {mod.title}
                  </h4>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-0.5">
                  {mod.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call To Action */}
      <div className="p-6 rounded-3xl bg-amber-50 border-2 border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div className="space-y-1">
          <h4 className="text-base font-extrabold text-stone-900">
            {isEn ? 'Ready to Start Speaking?' : '¿Listo para Hablar con Confianza?'}
          </h4>
          <p className="text-xs text-stone-700">
            {isEn ? 'Conversations, real practice, and personalized guidance with Voyager.' : 'Conversación natural, práctica real y acompañamiento con Voyager.'}
          </p>
        </div>

        <button
          onClick={onExploreApp}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0D224A] hover:bg-[#15346e] text-amber-300 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer shrink-0 active:scale-95"
        >
          <span>{isEn ? 'Explore USA Voyager' : 'Explorar USA Voyager'}</span>
          <ArrowRight className="w-4 h-4 text-amber-300" />
        </button>
      </div>
    </div>
  );
};
