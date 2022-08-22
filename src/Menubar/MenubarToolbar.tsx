import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import "./MenubarToolbar.css";

import {Component, useState} from "react";
import {Menubar, MenubarStartTemplate, MenubarEndTemplate} from "primereact/menubar";

import {InputText} from "primereact/inputtext";
// https://www.primefaces.org/primereact/showcase/#/icons
import {PrimeIcons} from "primereact/api";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";



// a tutorial https://www.primefaces.org/primereact/showcase/#/menumodel

interface MenubarToolbarProps {
  graph: null;
  undoMgr: null;
  filename:string;
}

interface MenubarToolbarState {
  // items:MenuItem[];
  items:any[];
  start:MenubarStartTemplate;
  end:MenubarEndTemplate;
  displayAbout: boolean;
  displayHelp: boolean;
  displaySaveAs: boolean;
}

export default class MenubarToolbar extends Component<MenubarToolbarProps, MenubarToolbarState> {
  constructor(props:MenubarToolbarProps) {
    super(props);
    this.state = {
      items: [
        {
          label: "File",
          // icon: "pi pi-fw pi-file",
          items: [
            {label: "New", icon: PrimeIcons.PLUS, command: ()=>{
              //TODO: create popup warning that everything will be deleted
              // editorActions.deleteAll(this.props.graph);
            }},
            {label: "New Window", icon: PrimeIcons.PLUS, command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Open", icon: PrimeIcons.FILE, command: (e:any)=>{
              //TODO: use react version: https://www.cluemediator.com/open-an-input-file-on-a-button-click-in-react
              // editorActions.openFile(this.props.graph).click();
              // alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Save", icon: PrimeIcons.SAVE, command: ()=>{
              const filename = this.props.filename ? this.props.filename : "untitled.graphted";
              // editorActions.saveFile(editorActions.saveXml(this.props.graph), filename );
            }},
            {label: "Save as", icon: PrimeIcons.SAVE, command: ()=>{
            // save as location is handled by browser saving settings
              this.setState({displaySaveAs: true});
            }},
            {separator: true},
            {label: "Import", icon: PrimeIcons.DOWNLOAD, command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Export", icon: PrimeIcons.UPLOAD, command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Import Stencil", icon: PrimeIcons.DOWNLOAD, command: ()=>{
              // editorActions.openStencilFile().click();
            }},
            {separator: true},
            {label: "Page Setup", icon: PrimeIcons.FILE},
            {label: "Print", icon: PrimeIcons.PRINT, command: ()=>{
              const filename = this.props.filename ? this.props.filename : "untitled.graphted";
              // graphFileUtils.printDivGraph("divGraph", this.props.graph, filename);
              // TODO: print only selection etc.
              // alert("Not yet implemented");
            }},
          ],
        },
        {
          label: "Edit",
          // icon: "pi pi-fw pi-pencil",
          items: [
            {label: "Undo", icon: PrimeIcons.REPLAY, command: ()=>{
              // editorActions.undo(this.props.undoMgr);
            }},
            {label: "Redo", icon: PrimeIcons.REFRESH, command: ()=>{
              // editorActions.redo(this.props.undoMgr);
            }},
            {separator: true},
            {label: "Cut", icon: "bi bi-scissors", command: ()=>{
              // editorActions.cut(this.props.graph);
            }},
            {label: "Copy", icon: PrimeIcons.COPY, command: ()=>{
              // editorActions.copy(this.props.graph);
            }},
            {label: "Paste", icon: PrimeIcons.COPY, command: ()=>{
              // editorActions.paste(this.props.graph);
            }},
            {label: "Delete", icon: PrimeIcons.TIMES, command: ()=>{
              // editorActions.deleteSelection(this.props.graph);
            }},
            {separator: true},
            {label: "Duplicate", icon: PrimeIcons.CLONE, command: ()=>{
              // editorActions.duplicate(this.props.graph);
            }},
            {separator: true},
            {label: "Edit", icon: PrimeIcons.PENCIL,
              items: [
                {label: "Edit", icon: PrimeIcons.PENCIL, command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Edit Data", icon: "bi bi-server", command: ()=>{
                  // this.editDataAndSave(this.props.graph.getSelectionCells());
                  //TODO: use implementation of Primetabview
                  alert("Not yet implemented");
                }},
                {label: "Edit Tooltip", icon: "bi bi-chat-left-dots flipY", command: ()=>{
                  //TODO: save in cell in order to enable using it with graph.getTooltipForCell(cell)
                  alert("Not yet implemented");
                }},
                {separator: true},
                {label: "Edit Style", icon: "bi bi-easel", command: ()=>{
                  alert("Not yet implemented");
                  //code in tabView
                  //TODO: move up displayResponsive variable and use props for menu and primetab
                }},
                {label: "Edit Link", icon: PrimeIcons.LINK, command: ()=>{
                  //TODO: use url as image link
                  //TODO: use url as text anchor
                  alert("Not yet implemented");
                }},
              ]},
            {label: "Open Link", icon: PrimeIcons.LINK, command: ()=>{
              //TODO: open url
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Lock/Unlock", icon: PrimeIcons.UNLOCK, command: ()=>{
              alert("Not yet implemented");
            }},
          ],
        },
        {
          label: "Selection",
          items: [
            {label: "Select Vertices", icon: "bi bi-bounding-box-circles", command: ()=>{
              // editorActions.selectAllVertices(this.props.graph);
            }},
            {label: "Select Edges", icon: "bi bi-bezier2", command: ()=>{
              // editorActions.selectAllEdges(this.props.graph);
            }},
            {label: "Select All", icon: "bi bi-hand-index-fill", command: ()=>{
              // editorActions.selectAll(this.props.graph);
            }},
            {label: "Select None", icon: "bi bi-hand-index", command: ()=>{
              // editorActions.clearSelection(this.props.graph);
            }},
            {separator: true},
            {
              label: "Select data source", icon: "bi bi-file-earmark-bar-graph",
              items: [
                {label: "Data Store", icon: "bi bi-server", command: ()=>{
                  // editorActions.selectAllDataSources(this.props.graph, "data_store");
                }},
                {label: "Data Provider", icon: "bi bi-person-badge", command: ()=>{
                  // editorActions.selectAllDataSources(this.props.graph, "data_provider");
                }},
                {label: "Data Sources", icon: "bi bi-file-earmark-bar-graph", command: ()=>{
                  // editorActions.selectAllDataSources(this.props.graph, "data_sources");
                }},
              ],
            },
          ],
        },
        {
          label: "View",
          items: [
            {label: "Format Panel", icon: "bi bi-layout-sidebar-inset-reverse", command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Outline", icon: "bi bi-eye", command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Layers", icon: "bi bi-layers", command: ()=>{
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Page View", icon: PrimeIcons.SEARCH, command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Page Scale", icon: "bi bi-arrows-fullscreen", command: ()=>{
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Scrollbars", icon: "bi bi-layout-sidebar-reverse", command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Tooltips", icon: "bi bi-chat-left-dots flipY", command: ()=>{
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Grid", icon: "bi bi-grid-3x3", command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Guides", icon: "bi bi-border", command: ()=>{
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Connection arrows", icon: "bi bi-arrow-right", command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Connection points", icon: "bi bi-textarea", command: ()=>{
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Reset View", icon: PrimeIcons.SEARCH, command: ()=>{
              // editorActions.zoomReset(this.props.graph);
            }},
            {label: "Zoom In", icon: PrimeIcons.SEARCH_PLUS, command: ()=>{
              // editorActions.zoomIn(this.props.graph);
            }},
            {label: "Zoom Out", icon: PrimeIcons.SEARCH_MINUS, command: ()=>{
              // editorActions.zoomOut(this.props.graph);
            }},
          ],
        },
        {
          label: "Arrange",
          items: [
            {label: "To Front", icon: "bi bi-front", command: ()=>{
              // editorActions.selectionToFront(this.props.graph);
            }},
            {label: "To Back", icon: "bi bi-back", command: ()=>{
              // editorActions.selectionToBack(this.props.graph);
            }},
            {separator: true},
            {label: "Direction", icon: "bi bi-signpost-split",
              items: [
                {label: "Flip Horizontal", icon: "bi bi-symmetry-horizontal", command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Flip Vertical", icon: "bi bi-symmetry-vertical", command: ()=>{
                  alert("Not yet implemented");
                }},
                {separator: true},
                {label: "Rotation", icon: PrimeIcons.REFRESH + " pi-spin ", command: ()=>{
                  alert("Not yet implemented");
                }},
              ],
            },
            {label: "Rotate shape only by 90° / Reverse", icon: PrimeIcons.REPLAY + " flipX", command: ()=>{
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Align", icon: PrimeIcons.ALIGN_JUSTIFY,
              items: [
                {label: "Left", icon: "bi bi-align-start", command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Center", icon: "bi bi-align-center", command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Right", icon: "bi bi-align-end", command: ()=>{
                  alert("Not yet implemented");
                }},
                {separator: true},
                {label: "Top ", icon: "bi bi-align-top", command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Middle", icon: "bi bi-align-middle", command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Bottom", icon: "bi bi-align-bottom", command: ()=>{
                  alert("Not yet implemented");
                }},
              ],
            },
            {label: "Distribute", icon: "bi bi-layout-wtf", items: [
              {label: "Horizontal", icon: "bi bi-symmetry-horizontal", command: ()=>{
                alert("Not yet implemented");
              }},
              {label: "Vertical", icon: "bi bi-symmetry-vertical", command: ()=>{
                alert("Not yet implemented");
              }},
            ]},
            {separator: true},
            // {label: "Navigation", command: ()=>{
            //   alert("Not yet implemented");
            // }},
            {label: "Insert", icon: PrimeIcons.EXTERNAL_LINK,
              items: [
                {label: "Link ...", icon: PrimeIcons.LINK, command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Image ...", icon: PrimeIcons.IMAGE, command: ()=>{
                  alert("Not yet implemented");
                }},
              ],
            },
            {
              label: "Layout", icon: "bi bi-grid",
              items: [
                {label: "Horizontal Flow", icon: "bi bi-distribute-horizontal", command: ()=>{
                  alert("Not yet implemented");
                }},
                {label: "Vertical Flow", icon: "bi bi-distribute-vertical", command: ()=>{
                  alert("Not yet implemented");
                }},
              ],
            },
            {separator: true},
            {label: "Group", icon: "bi bi-union", command: ()=>{
              // editorActions.group(this.props.graph);
            }},
            {label: "Ungroup", icon: "bi bi-subtract", command: ()=>{
              // editorActions.ungroup(this.props.graph);
            }},
            {label: "Remove from Group", icon: "bi bi-exclude", command: ()=>{
              // editorActions.ungroup(this.props.graph);
            }},
            {separator: true},
            {label: "Add Waypoint", icon: "bi bi-plus-circle", command: ()=>{
              // editorActions.addWaypoint(this.props.graph);
            }},
            {label: "Remove Waypoint", icon: "bi bi-dash-circle", command: ()=>{
              // editorActions.removeWaypoint(this.props.graph, evt as MouseEvent));
              alert("Not yet implemented");
            }},
            {label: "Clear Waypoints", icon: "bi bi-x-circle", command: ()=>{
              // editorActions.clearAllWaypoints(this.props.graph);
            }},
            {label: "Autosize", icon: "bi bi-aspect-ratio", command: ()=>{
              alert("Not yet implemented");
            }},
          ],
        },
        {
          label: "Extras",
          items: [
            {label: "Copy to Connect", command: ()=>{
              alert("Not yet implemented");
            }},
            {label: "Collapse/Expand", command: ()=>{
              alert("Not yet implemented");
            }},
            {separator: true},
            {label: "Edit Diagram", icon: "bi bi-diagram-3", command: ()=>{
              alert("Not yet implemented");
            }},
          ],
        },
        {
          label: "Help",
          items: [
            {label: "Help", icon: PrimeIcons.QUESTION_CIRCLE, command: ()=>{
              this.setState({displayHelp: true});
            }},
            {label: "About", icon: PrimeIcons.INFO_CIRCLE, command: ()=>{
              this.setState({displayAbout: true});
            }},
          ],
        },
      ],
      start: <img alt="logo"  onError={(e) => {
        const target = e.target as any; if (target) target.src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png";
      }} height="40" className="p-mr-2"></img>,
      end: <InputText placeholder="Search" type="text" />,
      displayAbout: false,
      displayHelp: false,
      displaySaveAs: false,
    };
  }

  render() {
    console.log("render menubar", this.props.graph);
    let filename = "filename.txt";
    return (
      <div>
        <div className="card">
          <Menubar model={this.state.items} start={this.state.start} end={this.state.end}/>
          <Dialog header='About' visible={this.state.displayAbout} onHide={() => this.setState({displayAbout: false})} breakpoints={{"960px": "75vw"}} style={{width: "50vw"}} footer={<Button label="OK" onClick={() => this.setState({displayAbout: false})} autoFocus />}>
                  Created with
            <ul>
              <li><a href="https://github.com/jgraph/mxgraph">Mxgraph</a></li>
              <li><a href="https://www.primefaces.org/primereact/">PRIMEREACT</a></li>
              <li><a href="https://icons.getbootstrap.com/">Bootstrap icons</a></li>
            </ul>
          </Dialog>
          <Dialog header='Help' visible={this.state.displayHelp} onHide={() => this.setState({displayHelp: false})} breakpoints={{"960px": "75vw"}} style={{width: "50vw"}} footer={<Button label="OK" onClick={() => this.setState({displayHelp: false})} autoFocus />}>
            {// TODO: Setup keys by json config file
            }
            <h3>Keyboard Shortcuts</h3>
            <ul>
              <li>Copy: CTRL + C</li>
              <li>Paste: CTRL + V</li>
            </ul>
            <h3>Mobile Usage</h3>
            {// FIXME: mxgraph mobile support broke => fix graph view touch events
              // TODO: splitters are not responsive => use sidebars left and right for mobile view, or small screens
            }
                  Not yet targeted for mobile devices!
            <ul>
              <li>Drag nodes: begin dragging and click into graph view</li>
              <li>Mark multiple nodes: drag rectange window over graph view</li>
            </ul>
          </Dialog>
          <Dialog header='SaveAs' visible={this.state.displaySaveAs} onHide={() => this.setState({displaySaveAs: false})} breakpoints={{"960px": "75vw"}} style={{width: "50vw"}} footer={<Button label="OK" onClick={() => {
            this.setState({displaySaveAs: false});
            // editorActions.saveFile(editorActions.saveXml(this.props.graph), filename);
          }
          } autoFocus />}>
          Save As: <InputText placeholder="filename.txt" type="text" onChange={(e) => {
              filename = e.target.value;
            }}/>
          </Dialog>


        </div>
      </div>
    );
  }
}
