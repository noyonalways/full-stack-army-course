import BatteryStatus from "../../components/battery-status";
import Container from "../../components/shared/container";
import UseAudio from "../../components/use-audio";
import UseSpeech from "../../components/use-speech";

const ReactUse = () => {
  return (
    <section>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: ".5rem",
            margin: "1rem 0",
          }}
        >
          <h1>React-Use Hook</h1>
          <p>
            ReactUse is a React.js application that allows you to track all the
            components made using React-Use
          </p>
        </div>
        <div>
          <BatteryStatus />
          <UseAudio />
          <UseSpeech />
        </div>
      </Container>
    </section>
  );
};

export default ReactUse;
