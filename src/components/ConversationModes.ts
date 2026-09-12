export type ConversationMode = 'ADAPTIVE' | 'AMERICAN_ENGLISH' | 'SPANISH' | 'BILINGUAL' | 'LIVE_TRANSLATOR' | 'LISTEN_ONLY' | 'ENGLISH_ASSESSMENT';

export interface ModeDefinition {
  id: ConversationMode;
  nameEn: string;
  nameEs: string;
  descriptionEn: string;
  descriptionEs: string;
  systemMessage: string;
  systemMessageEnd: string;
  chatInfoMessageEn: string;
  chatInfoMessageEs: string;
}

const ADAPTIVE_MODE_DEF: ModeDefinition = {
  id: 'ADAPTIVE',
  nameEn: 'ADAPTIVE',
  nameEs: 'ADAPTIVO',
  descriptionEn: 'Recognizes English and Spanish, switching back and forth seamlessly as necessary.',
  descriptionEs: 'Reconoce inglés y español, cambiando entre ambos idiomas según sea necesario.',
  systemMessage: "[SYSTEM MESSAGE: Mode changed. Adaptive Mode active. Recognize both English and Spanish dynamically, and switch back and forth seamlessly as necessary based on what the user says or asks. Automatically adapt language, speed, and scaffolding.]",
  systemMessageEnd: "[SYSTEM MESSAGE: Adaptive Mode active.]",
  chatInfoMessageEn: '⚡ Adaptive Mode active: Recognizes English and Spanish and switches back and forth as necessary.',
  chatInfoMessageEs: '⚡ Modo Adaptativo activo: Reconoce inglés y español y cambia según sea necesario.'
};

export const CONVERSATION_MODES: Record<ConversationMode, ModeDefinition> = {
  ADAPTIVE: ADAPTIVE_MODE_DEF,
  AMERICAN_ENGLISH: ADAPTIVE_MODE_DEF,
  SPANISH: ADAPTIVE_MODE_DEF,
  BILINGUAL: ADAPTIVE_MODE_DEF,
  LIVE_TRANSLATOR: ADAPTIVE_MODE_DEF,
  LISTEN_ONLY: ADAPTIVE_MODE_DEF,
  ENGLISH_ASSESSMENT: ADAPTIVE_MODE_DEF,
};
