// types/speech-recognition.d.ts

// First, declare the interface
interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: (event: SpeechRecognitionEvent) => void;
    start(): void;
    stop(): void;
    abort(): void;
    // Add any other methods/properties you need
  }
  
  // Then declare a constructor
  interface SpeechRecognitionConstructor {
    new(): SpeechRecognition;
    prototype: SpeechRecognition;
  }
  
  interface SpeechRecognitionEvent extends Event {
    resultIndex: number;
    results: SpeechRecognitionResultList;
  }
  
  interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
  }
  
  interface SpeechRecognitionResult {
    isFinal: boolean;
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
  }
  
  interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
  }
  
  // Extend Window with the correct constructors
  declare global {
    interface Window {
      SpeechRecognition: SpeechRecognitionConstructor;
      webkitSpeechRecognition: SpeechRecognitionConstructor;
    }
    
    // Make the interface available globally without using var
    const SpeechRecognition: SpeechRecognitionConstructor;
    const webkitSpeechRecognition: SpeechRecognitionConstructor;
  }