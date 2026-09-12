import React, { useState } from 'react';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { ConversationMode } from './ConversationModes';

interface CharlaOpeningSectionProps {
  selectedLang: 'EN' | 'ES';
  activeMode?: ConversationMode;
  onSelectMode?: (mode: ConversationMode) => void;
  onAskVoyager?: (text: string) => void;
  onSpeakExplanation?: (text: string) => void;
}

export const getExplanationText = (mode: ConversationMode): string => {
  return "En el modo Adaptativo, reconozco automáticamente el inglés y el español, cambiando entre ambos idiomas de manera fluida y natural según lo necesites en la conversación.";
};

export const CharlaOpeningSection: React.FC<CharlaOpeningSectionProps> = ({
  selectedLang,
  activeMode: propActiveMode,
  onSelectMode,
  onSpeakExplanation,
}) => {
  const [internalMode, setInternalMode] = useState<ConversationMode>('ADAPTIVE');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const activeMode = propActiveMode || internalMode;

  const handleModeClick = (mode: ConversationMode) => {
    setInternalMode(mode);
    if (onSelectMode) {
      onSelectMode(mode);
    }
  };

  const modeTabs: { id: ConversationMode; labelEs: string; labelEn: string }[] = [
    { id: 'ADAPTIVE', labelEs: 'ADAPTIVO', labelEn: 'ADAPTIVE' },
  ];

  return (
    <div className="bg-transparent text-left mb-4 p-2 md:p-3 transition-all duration-300 animate-fade-in select-none">
      {/* Title + Collapse Toggle */}
      <div className="flex items-center justify-between">
        <h1 
          style={{ fontFamily: '"American Typewriter", "Courier New", Courier, serif' }} 
          className="text-3xl sm:text-4xl font-normal tracking-tight text-[#1f2421] flex items-center gap-2.5 sm:gap-3"
        >
          <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-red-600 shrink-0" />
          <span>{selectedLang === 'EN' ? 'Charla' : 'La Charla'}</span>
        </h1>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 text-neutral-500 hover:text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
          title={isCollapsed ? (selectedLang === 'EN' ? 'Expand header' : 'Mostrar encabezado') : (selectedLang === 'EN' ? 'Collapse header' : 'Ocultar encabezado')}
        >
          {isCollapsed ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
        </button>
      </div>

      {!isCollapsed && (
        <>
          {/* Sub-navigation Mode Tabs */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 my-4 pb-1">
            {modeTabs.map((tab) => {
              const isActive = activeMode === tab.id;
              const label = selectedLang === 'EN' ? tab.labelEn : tab.labelEs;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleModeClick(tab.id)}
                  className="flex items-center gap-1.5 cursor-pointer bg-transparent border-none p-0 focus:outline-none transition-all"
                >
                  {isActive && (
                    <MessageSquare className="w-4 h-4 text-red-600 fill-red-600/10 shrink-0" />
                  )}
                  <span 
                    className={`text-xs md:text-sm tracking-wider uppercase font-sans ${
                      isActive 
                        ? 'text-black font-extrabold' 
                        : 'text-neutral-500 font-bold hover:text-black transition-colors'
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};


