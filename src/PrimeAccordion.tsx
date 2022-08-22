import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, {Component} from "react";
import {Accordion, AccordionTab} from "primereact/accordion";
import {InputText} from "primereact/inputtext";

import {AutoComplete} from "primereact/autocomplete";

type City = { label: string, value: string };
type Country = { label: string, code:string, items:City[] };

interface PrimeAccordionProps {
    graph: null;
    filename: string;
    handleFilenameChange: (filename: string) => void;
  }

  interface PrimeAccordionState {
    activeIndex: number[]|null;
    selectedCity: City | null;
    filteredCities: City[];
    groupedCities: Country[];
  }

//TODO: replace search and data with loaded shapes from graph

export default class PrimeAccordion extends Component<PrimeAccordionProps, PrimeAccordionState> {
  constructor(props:PrimeAccordionProps) {
    super(props);
    this.state = {
      // TODO: replace with shapes from folders
      groupedCities: [
        {
          label: "Germany", code: "DE",
          items: [
            {label: "Berlin", value: "Berlin"},
            {label: "Frankfurt", value: "Frankfurt"},
            {label: "Hamburg", value: "Hamburg"},
            {label: "Munich", value: "Munich"},
          ],
        },
        {
          label: "USA", code: "US",
          items: [
            {label: "Chicago", value: "Chicago"},
            {label: "Los Angeles", value: "Los Angeles"},
            {label: "New York", value: "New York"},
            {label: "San Francisco", value: "San Francisco"},
          ],
        },
        {
          label: "Japan", code: "JP",
          items: [
            {label: "Kyoto", value: "Kyoto"},
            {label: "Osaka", value: "Osaka"},
            {label: "Tokyo", value: "Tokyo"},
            {label: "Yokohama", value: "Yokohama"},
          ],
        },
      ],
      activeIndex: [0],
      // basic search from: https://www.primefaces.org/primereact/showcase/#/autocomplete
      selectedCity: null,
      filteredCities: [],
    };
  }

    searchCity = (event: { query: string }) => {
      const query = event.query;
      const filteredCities = [];

      for (const country of this.state.groupedCities) {
        const filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        if (filteredItems && filteredItems.length) {
          // _filteredCities.push({...country, ...{items: filteredItems}}); //add country with cities
          filteredCities.push(...filteredItems); // only add cities
        }
      }
      // same as {filteredCities : filteredCities}
      this.setState({filteredCities});
    }

    render() {
      console.log("render nodes sidepanel", this.props.graph);
      return (
        <>
          Save As: <InputText placeholder={this.props.filename} type="text" onChange={(e) => {
            this.props.handleFilenameChange(e.target.value);
          }}/>
          <>
            {/* TODO: implement search by image name
            <span className="p-input-icon-right">
              <AutoComplete value={this.state.selectedCity} suggestions={this.state.filteredCities} completeMethod={this.searchCity} field="label" onChange={(e) => this.setState({selectedCity: e.value})} />
              <i className="pi pi-search" />
            </span>
            <div className="search-results">
                    Search Results
            </div> */}
          </>
          <Accordion className="accordion-custom" multiple activeIndex={this.state.activeIndex}>
            {/* <AccordionTab header={<React.Fragment><i className="pi pi-calendar"></i><span>General</span></React.Fragment>}>
              <p>Test</p>
            </AccordionTab> */}
            {// Create tabs and images based on folders
              // fileUtils.loadImageFolderToNode(this.props.graph, true)
            }
            {//TODO: Create tabs and images based on stencil files
              // fileUtils.loadStencilFolderToNode(this.props.graph, true)
            }
            <AccordionTab header={<React.Fragment><i className="pi pi-calendar"></i><span>Image Upload</span></React.Fragment>}>
              <p>Upload your own images</p>
            </AccordionTab>
          </Accordion>
        </>
      );
    }
}
