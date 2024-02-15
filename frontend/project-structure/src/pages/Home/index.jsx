import CustomLink from "../../components/UI/custom-link";
import Container from "../../components/shared/container";

const UrlLinks = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/sign-up",
    text: "Sign Up",
  },
  {
    id: 3,
    path: "/sign-in",
    text: "Sign In",
  },
  {
    id: 4,
    path: "/react-use",
    text: "React Use",
  },
];

const Home = () => {
  return (
    <section>
      <Container
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Home Page
          </h1>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {UrlLinks.map((link) => (
              <CustomLink key={link.id} path={link.path} text={link.text} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Home;
