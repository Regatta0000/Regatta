import React from "react";

import AppHeader from "./components/appHeader/AppHeader";
import CharList from "./components/charList/charList";
import Fouter from "./components/fouter/Fouter";

function App() {
  return (
    <div>
      <AppHeader />
      <CharList />
      <Fouter />
    </div>
  );
}

export default App;
