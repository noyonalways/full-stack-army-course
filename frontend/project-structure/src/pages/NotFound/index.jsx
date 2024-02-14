import Container from "../../components/shared/container";

const NotFound = () => {
  return (
    <Container
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Page Not Found</h1>
    </Container>
  );
};

export default NotFound;
