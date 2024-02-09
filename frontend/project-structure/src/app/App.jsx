import useForm from "../hooks/useForm";

const App = () => {
  const { formState } = useForm({
    init: {
      name: "",
      email: "",
      password: "",
    },
  });

  console.log(formState);

  return <div></div>;
};

export default App;
