import "./App.css";
import { Container } from "./components/Container";
import { Filters } from "./components/Filters";
import { Form } from "./components/Form";
import { Info } from "./components/Info";
import { List } from "./components/List";
import { Title } from "./components/Title";
import { Wrapper } from "./components/Wrapper";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Container>
        <Wrapper
          dir="col"
          align="center"
          padding="1rem"
          stylex="max-w-[700px] mx-auto pb-10 px-3"
        >
          <Info />
          <Title stylex="mb-8">my todo list</Title>
          <Form stylex="mb-5" />
          <Filters stylex="mb-10" />
          <List />
        </Wrapper>
        <Toaster position="bottom-center" />
      </Container>
    </>
  );
}

export default App;
