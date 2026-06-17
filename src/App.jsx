import "./App.css";
import events from "./upcoming-events.json";
import GlobalStyle from "./styles/GlobalStyle";
import { Sections } from "./Components/Sections/Sections";
import { Title } from "./Components/Title/Title";
import { EventList } from "./Components/EventList/EventList";

function App() {
  return (
    <>
    <GlobalStyle/>
      <Sections>
        <Title text="24th Core Worlds Coalition Conference"></Title>
      <EventList qwe={events}/>
      </Sections>
    </>
  );
}

export default App;
