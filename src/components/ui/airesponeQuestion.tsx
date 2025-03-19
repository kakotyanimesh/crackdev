// In AIresponseQuestion.tsx
interface AIresponseQuestionProps {
    questiontitle: string | undefined,
    input: string | undefined;
    expectedQutput: string | undefined;
  }
  
  export default function AIresponseQuestion({ questiontitle, input, expectedQutput }: AIresponseQuestionProps) {
    const formattedInput = typeof input === "object" ? JSON.stringify(input, null, 2) : input;
    const formattedOutput = typeof expectedQutput === "object" ? JSON.stringify(expectedQutput, null, 2) : expectedQutput;
  
    return (
      <div>
        <h2>{questiontitle}</h2>
        <div>
          <strong>Input:</strong>
          <pre>{formattedInput}</pre>
        </div>
        <div>
          <strong>Expected Output:</strong>
          <pre>{formattedOutput}</pre>
        </div>
      </div>
    );
  }
  