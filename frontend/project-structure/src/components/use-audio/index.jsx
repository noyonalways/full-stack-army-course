import { useAudio } from "react-use";

const UseAudio = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "https://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/002.mp3",
    // autoPlay: true,
  });

  return (
    <div
      style={{
        margin: "1rem 0",
      }}
    >
      <h1>Use Audio Hook</h1>
      <audio ref={ref} controls={controls}>
        <source src={audio} type="audio/mpeg" />
      </audio>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  );
};

export default UseAudio;
