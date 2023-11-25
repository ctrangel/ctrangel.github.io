import Navbar from "./components/Navbar";

function App() {



  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;








































//################# just tutorial stuff #################
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";
// import Button from "./components/Button";
// import { useState } from "react";

// function App() {

//   let items = ['butter', 'milk', 'eggs', 'bread', 'cheese']

//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
//       <ListGroup
//         heading="Heading"
//         items={items}
//         onSelectItem={(item) => console.log(item)}
//       />
//       <Button color="primary" children="OI OI ERwin PP...P P" onClick={() => setAlertVisibility(true)}/>
//     </div>
//   );
// }

// export default App;
