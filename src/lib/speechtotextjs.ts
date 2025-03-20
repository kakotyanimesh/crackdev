export class SpeechToText {
    private audioRecognition: SpeechRecognition | null;
    public isRecording: boolean;
    public transcript: string;

    constructor() {
        const SpeechRecognitionAPI =
            (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (!SpeechRecognitionAPI) {
            console.log("No speech recognition API available");
            this.audioRecognition = null;
            this.isRecording = false;
            this.transcript = "";
            return;
        }

        this.audioRecognition = new SpeechRecognitionAPI();
        this.audioRecognition.continuous = true;
        this.audioRecognition.interimResults = false;
        this.audioRecognition.lang = "en-US";

        this.isRecording = false;
        this.transcript = "";

        this.audioRecognition.onresult = (event: SpeechRecognitionEvent) => {
            const lastResult = event.results[event.results.length - 1];
            if (lastResult.isFinal) {
                this.transcript = lastResult[0].transcript;
                console.log(this.transcript);
            }
        };

        this.audioRecognition.onerror = (event: SpeechRecognitionEvent) => {
            console.error("Speech Recognition Error:", event);
        };
    }

    startRecording() {
        if (!this.audioRecognition) {
            console.error("Speech recognition is not available");
            return;
        }

        if (!this.isRecording) {
            this.transcript = "";
            this.audioRecognition.start();
            this.isRecording = true;
            console.log("Recording started...");
        }
    }

    stopRecording() {
        if (!this.audioRecognition) {
            console.error("Speech recognition is not available");
            return;
        }

        if (this.isRecording) {
            this.audioRecognition.stop();
            this.isRecording = false;
            console.log("Recording stopped.");
        }
    }

    getTranscript(): string {
        return this.transcript.trim();
    }
}
