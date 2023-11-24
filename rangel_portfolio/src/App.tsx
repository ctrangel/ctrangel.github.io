import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {

  let items = ['butter', 'milk', 'eggs', 'bread', 'cheese']

  return (
    <div>
      <Alert>
        Hello <span>Sweet Yams</span>World
      </Alert>
      <ListGroup
        heading="Heading"
        items={items}
        onSelectItem={(item) => console.log(item)}
      />
      <Button children="OI OI ERwin PP...P P" onClick={() => console.log('click')}/>
    </div>
  );
}

export default App;
