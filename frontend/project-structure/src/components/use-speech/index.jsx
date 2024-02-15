import { useSpeech } from "react-use";

const voices = window.speechSynthesis.getVoices();

const UseSpeech = () => {
  const state = useSpeech(
    "ReactUse is a React.js application that allows you to track all the components made using React-Use",
    {
      rate: 0.8,
      pitch: 0.5,
      voice: voices[1],
    }
  );

  return (
    <div
      style={{
        margin: "1rem 0",
      }}
    >
      <h1>Use Speech Hook</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default UseSpeech;
