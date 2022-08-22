import React from 'react';
import logo from './logo.svg';
import './App.css';

// editor actions

import MenubarToolbar from "./Menubar/MenubarToolbar";
import PrimeAccordion from "./PrimeAccordion";
import {ScrollPanel} from "primereact/scrollpanel";
import PrimeTabView from "./TabView/PrimeTabView";

import {Splitter, SplitterPanel} from "primereact/splitter";

import { Button } from 'primereact/button';

function App() {
  return (
    <div>
    
  <MenubarToolbar graph={null} undoMgr={null} filename={"test.txt"}/>
  <Splitter style={{height: "100%", width: "100%"}} className="p-mb-5">
    <SplitterPanel >
      <PrimeAccordion graph={null} filename={"undefined"} handleFilenameChange={(e:any) => console.log(e)}/>
    </SplitterPanel>

    <SplitterPanel >
      <div className="graph-container" style={{height:"100%", width: "100%", outline: "none"}}  id="divGraph" tabIndex={0} />
    </SplitterPanel>

    <SplitterPanel >
          <PrimeTabView graph={null}/>
    </SplitterPanel>
  </Splitter>
    {/* <PrimeTabView graph={null}/> */}
  </div>
  );
}

export default App;


// <Splitter style={{height: window.innerHeight, width: window.innerWidth}} className="p-mb-5">
// <SplitterPanel >
//   <PrimeAccordion graph={null} filename={"undefined"} handleFilenameChange={(e:any) => console.log(e)}/>
// </SplitterPanel>

// <SplitterPanel style={{width: "60%"}}>
//   <div className="graph-container" style={{height: window.innerHeight, width: "100%", outline: "none"}}  id="divGraph" tabIndex={0} />
// </SplitterPanel>

// <SplitterPanel >
//       <PrimeTabView graph={null}/>
//       <Button label="Click" icon="pi pi-check" />
//       <Button label="Click" icon="pi pi-check" iconPos="right" />
//       <Button icon="pi pi-check" iconPos="right" />
//       <Button label="Click" icon="pi pi-check" />
//       <Button label="Click" icon="pi pi-check" iconPos="right" />
//       <Button icon="pi pi-check" iconPos="right" />
//       <Button label="Click" icon="pi pi-check" />
//       <Button label="Click" icon="pi pi-check" iconPos="right" />
//       <Button icon="pi pi-check" iconPos="right" />
// </SplitterPanel>
// </Splitter>