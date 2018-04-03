/*
 * dev/App.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 21.08.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import MetisMenu from '../src';

// Embeds styles
import '../less/standart.less';

const menu1 = [
  {
      "icon": "dashboard",
      "label": "Inlet Manifold",
      "id": "G01.01",
      "to": "#G01.01",
      "content": [
          {
              "icon": "dashboard",
              "label": "Inlet Bolts",
              "id": "G01.01.01",
              "to": "#G01.01.01"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Inlet Casing",
      "id": "G01.02",
      "to": "#G01.02",
      "content": [
          {
              "icon": "dashboard",
              "label": "Inlet Casing Seals ",
              "id": "G01.02.01",
              "to": "#G01.02.01"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Journal Bearing Housing #2",
      "id": "G01.03",
      "to": "#G01.03",
      "content": [
          {
              "icon": "dashboard",
              "label": "Journal Bearing #2",
              "id": "G01.03.01",
              "to": "#G01.03.01"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Thrust Bearing Housing ",
      "id": "G01.04",
      "to": "#G01.04",
      "content": [
          {
              "icon": "dashboard",
              "label": "Thrust Bearing ",
              "id": "G01.04.01",
              "to": "#G01.04.01"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "G01.05",
      "id": "G01.05",
      "to": "#G01.05",
      "content": [
          {
              "icon": "dashboard",
              "label": "Inlet Guide Vane Actuator Drive",
              "id": "G01.05.01",
              "to": "#G01.05.01"
          },
          {
              "icon": "dashboard",
              "label": "Inlet Guide Vane Actuator Ring",
              "id": "G01.05.02",
              "to": "#G01.05.02",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Inlet Guide Vane Indicator",
                      "id": "G01.05.02.01",
                      "to": "#G01.05.02.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Inlet Guide Vane",
              "id": "G01.05.03",
              "to": "#G01.05.03"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Compressor Casing",
      "id": "G02.01",
      "to": "#G02.01",
      "content": [
          {
              "icon": "dashboard",
              "label": "G02.01.00",
              "id": "G02.01.00",
              "to": "#G02.01.00",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Ring 1",
                      "id": "G02.01.00.01",
                      "to": "#G02.01.00.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 1",
              "id": "G02.01.01",
              "to": "#G02.01.01"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 2",
              "id": "G02.01.02",
              "to": "#G02.01.02"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 3",
              "id": "G02.01.03",
              "to": "#G02.01.03"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 4",
              "id": "G02.01.04",
              "to": "#G02.01.04"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 5",
              "id": "G02.01.05",
              "to": "#G02.01.05"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 6",
              "id": "G02.01.06",
              "to": "#G02.01.06"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 7",
              "id": "G02.01.07",
              "to": "#G02.01.07"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 8",
              "id": "G02.01.08",
              "to": "#G02.01.08"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 9",
              "id": "G02.01.09",
              "to": "#G02.01.09"
          },
          {
              "icon": "dashboard",
              "label": "Compressor Diaphragm Row 10",
              "id": "G02.01.10",
              "to": "#G02.01.10"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "G02.02",
      "id": "G02.02",
      "to": "#G02.02",
      "content": [
          {
              "icon": "dashboard",
              "label": "Compressor Blade ring 2",
              "id": "G02.02.01",
              "to": "#G02.02.01",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Diaphragm R11",
                      "id": "G02.02.01.01",
                      "to": "#G02.02.01.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Compressor Diaphragm R12",
                      "id": "G02.02.01.02",
                      "to": "#G02.02.01.02"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Compressor Diaphragm R13",
                      "id": "G02.02.01.03",
                      "to": "#G02.02.01.03"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Blade ring 3",
              "id": "G02.02.02",
              "to": "#G02.02.02",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Diaphragm R11",
                      "id": "G02.02.02.01",
                      "to": "#G02.02.02.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Compressor Diaphragm R15",
                      "id": "G02.02.02.02",
                      "to": "#G02.02.02.02"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Compressor Diaphragm R16",
                      "id": "G02.02.02.03",
                      "to": "#G02.02.02.03"
                  }
              ]
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "G02.03",
      "id": "G02.03",
      "to": "#G02.03",
      "content": [
          {
              "icon": "dashboard",
              "label": "Compressor Front Shaft",
              "id": "G02.03.01",
              "to": "#G02.03.01",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 1",
                      "id": "G02.03.01.01",
                      "to": "#G02.03.01.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 2",
                      "id": "G02.03.01.02",
                      "to": "#G02.03.01.02"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 3",
                      "id": "G02.03.01.03",
                      "to": "#G02.03.01.03"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 4",
              "id": "G02.03.02",
              "to": "#G02.03.02",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 4",
                      "id": "G02.03.02.01",
                      "to": "#G02.03.02.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 5",
              "id": "G02.03.03",
              "to": "#G02.03.03",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 5",
                      "id": "G02.03.03.01",
                      "to": "#G02.03.03.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 6",
              "id": "G02.03.04",
              "to": "#G02.03.04",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 6",
                      "id": "G02.03.04.01",
                      "to": "#G02.03.04.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 7",
              "id": "G02.03.05",
              "to": "#G02.03.05",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 7",
                      "id": "G02.03.05.01",
                      "to": "#G02.03.05.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 8",
              "id": "G02.03.06",
              "to": "#G02.03.06",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 8",
                      "id": "G02.03.06.01",
                      "to": "#G02.03.06.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 9",
              "id": "G02.03.07",
              "to": "#G02.03.07",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 9",
                      "id": "G02.03.07.01",
                      "to": "#G02.03.07.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 10",
              "id": "G02.03.08",
              "to": "#G02.03.08",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 10",
                      "id": "G02.03.08.01",
                      "to": "#G02.03.08.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 11",
              "id": "G02.03.09",
              "to": "#G02.03.09",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 11",
                      "id": "G02.03.09.01",
                      "to": "#G02.03.09.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 12",
              "id": "G02.03.10",
              "to": "#G02.03.10",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 12",
                      "id": "G02.03.10.01",
                      "to": "#G02.03.10.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 13",
              "id": "G02.03.11",
              "to": "#G02.03.11",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 13",
                      "id": "G02.03.11.01",
                      "to": "#G02.03.11.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 14",
              "id": "G02.03.12",
              "to": "#G02.03.12",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 14",
                      "id": "G02.03.12.01",
                      "to": "#G02.03.12.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 15",
              "id": "G02.03.13",
              "to": "#G02.03.13",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 15",
                      "id": "G02.03.13.01",
                      "to": "#G02.03.13.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Compressor Disc Row 16",
              "id": "G02.03.14",
              "to": "#G02.03.14",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Compressor Blade Row 16",
                      "id": "G02.03.14.01",
                      "to": "#G02.03.14.01"
                  }
              ]
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Compressor - Combustor Casing",
      "id": "G03.01",
      "to": "#G03.01"
  },
  {
      "icon": "dashboard",
      "label": "G03.02",
      "id": "G03.02",
      "to": "#G03.02",
      "content": [
          {
              "icon": "dashboard",
              "label": "Main Nozzle",
              "id": "G03.02.01",
              "to": "#G03.02.01"
          },
          {
              "icon": "dashboard",
              "label": "Pilot Nozzle",
              "id": "G03.02.02",
              "to": "#G03.02.02"
          },
          {
              "icon": "dashboard",
              "label": "Top Hat",
              "id": "G03.02.04",
              "to": "#G03.02.04"
          },
          {
              "icon": "dashboard",
              "label": "Combustor Basket",
              "id": "G03.02.05",
              "to": "#G03.02.05",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Cross Fire Tube assembly",
                      "id": "G03.02.05.01",
                      "to": "#G03.02.05.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Transition Piece assembly",
              "id": "G03.02.06",
              "to": "#G03.02.06",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Transition Piece Seal",
                      "id": "G03.02.06.01",
                      "to": "#G03.02.06.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Transition Piece Support (Bullhorn)",
                      "id": "G03.02.06.02",
                      "to": "#G03.02.06.02"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "By-pass Elbow",
              "id": "G03.02.07",
              "to": "#G03.02.07"
          },
          {
              "icon": "dashboard",
              "label": "By-pass Internal Ring",
              "id": "G03.02.08",
              "to": "#G03.02.08"
          },
          {
              "icon": "dashboard",
              "label": "Ignitor",
              "id": "G03.02.09",
              "to": "#G03.02.09"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Torque Tube",
      "id": "G03.03",
      "to": "#G03.03",
      "content": [
          {
              "icon": "dashboard",
              "label": "Torque Tube Cover And Inner Diffuser",
              "id": "G03.03.01",
              "to": "#G03.03.01"
          },
          {
              "icon": "dashboard",
              "label": "Torque Tube Seal Housing",
              "id": "G03.03.02",
              "to": "#G03.03.02"
          },
          {
              "icon": "dashboard",
              "label": "Support Ring & Static Seal",
              "id": "G03.03.03",
              "to": "#G03.03.03"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Turbine Casing Assembly",
      "id": "G04.01",
      "to": "#G04.01",
      "content": [
          {
              "icon": "dashboard",
              "label": "Blade Ring 1",
              "id": "G04.01.01",
              "to": "#G04.01.01",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Vane 1 Assembly",
                      "id": "G04.01.01.01",
                      "to": "#G04.01.01.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Ring Segment 1 Assembly",
                      "id": "G04.01.01.02",
                      "to": "#G04.01.01.02"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Blade Ring 2",
              "id": "G04.01.02",
              "to": "#G04.01.02",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Vane 2 Assembly",
                      "id": "G04.01.02.01",
                      "to": "#G04.01.02.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Ring Segment 2 Assembly",
                      "id": "G04.01.02.02",
                      "to": "#G04.01.02.02"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Ring Seal 2",
                      "id": "G04.01.02.03",
                      "to": "#G04.01.02.03"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Blade Ring 3",
              "id": "G04.01.03",
              "to": "#G04.01.03",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Vane 3 Assembly",
                      "id": "G04.01.03.01",
                      "to": "#G04.01.03.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Ring Segment 3 Assembly",
                      "id": "G04.01.03.02",
                      "to": "#G04.01.03.02"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Ring Seal 3",
                      "id": "G04.01.03.03",
                      "to": "#G04.01.03.03"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Blade Ring 4",
              "id": "G04.01.04",
              "to": "#G04.01.04",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Vane 4 Assembly",
                      "id": "G04.01.04.01",
                      "to": "#G04.01.04.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Ring Segment 4 Assembly",
                      "id": "G04.01.04.02",
                      "to": "#G04.01.04.02"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Ring Seal 4",
                      "id": "G04.01.04.03",
                      "to": "#G04.01.04.03"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Turbine Casing Support (shell)",
              "id": "G04.01.05",
              "to": "#G04.01.05"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Turbine Rotor Assembly",
      "id": "G04.02",
      "to": "#G04.02",
      "content": [
          {
              "icon": "dashboard",
              "label": "Turbine Disc Row 1",
              "id": "G04.02.01",
              "to": "#G04.02.01",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Blade 1",
                      "id": "G04.02.01.01",
                      "to": "#G04.02.01.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Turbine Disc Row 2",
              "id": "G04.02.02",
              "to": "#G04.02.02",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Blade 2",
                      "id": "G04.02.02.01",
                      "to": "#G04.02.02.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Turbine Disc Row 3",
              "id": "G04.02.03",
              "to": "#G04.02.03",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Blade 3",
                      "id": "G04.02.03.01",
                      "to": "#G04.02.03.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Turbine Disc Row 4",
              "id": "G04.02.04",
              "to": "#G04.02.04",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Turbine Blade 4",
                      "id": "G04.02.04.01",
                      "to": "#G04.02.04.01"
                  },
                  {
                      "icon": "dashboard",
                      "label": "Turbine Rotor Tie Bolts",
                      "id": "G04.02.04.02",
                      "to": "#G04.02.04.02"
                  }
              ]
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Exhaust Casing",
      "id": "G05.01",
      "to": "#G05.01",
      "content": [
          {
              "icon": "dashboard",
              "label": "Journal Bearing Assembly",
              "id": "G05.01.02",
              "to": "#G05.01.02",
              "content": [
                  {
                      "icon": "dashboard",
                      "label": "Journal Bearing",
                      "id": "G05.01.02.01",
                      "to": "#G05.01.02.01"
                  }
              ]
          },
          {
              "icon": "dashboard",
              "label": "Exhaust Cylinder Static Seal",
              "id": "G05.01.03",
              "to": "#G05.01.03"
          }
      ]
  },
  {
      "icon": "dashboard",
      "label": "Exhaust Manifold",
      "id": "G05.02",
      "to": "#G05.02",
      "content": [
          {
              "icon": "dashboard",
              "label": "Manifold's Hanging Support",
              "id": "G05.02.03",
              "to": "#G05.02.03"
          },
          {
              "icon": "dashboard",
              "label": "OST Overspeed Trip",
              "id": "G05.02.04",
              "to": "#G05.02.04"
          },
          {
              "icon": "dashboard",
              "label": "Manifold Piping",
              "id": "G05.02.06",
              "to": "#G05.02.06"
          }
      ]
  }
];

const menu2 = [
  {
    id: 1,
    icon: 'bolt',
    label: 'Menu 3',
  },
  {
    id: 2,
    parentId: 1,
    icon: 'bolt',
    label: 'Test',
    to: '#test',
  },
  {
    id: 3,
    icon: 'bars',
    label: 'Menu 4',
  },
  {
    id: 4,
    parentId: 3,
    icon: 'bold',
    label: 'Sub Menu 1',
    to: '#sub-menu-1',
  },
  {
    id: 5,
    parentId: 3,
    icon: 'image',
    label: 'Sub Menu 2',
  },
  {
    id: 6,
    parentId: 5,
    icon: 'cog',
    label: 'Level 3 Menu 1',
    to: '#level-3-menu-1',
  },
  {
    id: 7,
    parentId: 5,
    icon: 'group',
    label: 'Level 3 Menu 2',
    to: '#level-3-menu-2',
  },
];


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: menu1,
    };
  }
  render() {
    return (
      <div>
          <MetisMenu
                                
                                activeLinkFromLocation
                               
                                content={this.state.menu}
                                onSelected={(e) => {
                                    e.preventDefault();
                                    console.log('onSelected', e);
                                }}
                                
                            />
        {/* { <MetisMenu
          
          activeLinkFromLocation
         
          
          
          
       
          content={this.state.menu}
        /> } */}

        <div className="body">
          <h1>react-metismenu@1.1.1</h1>
          <h3>Examples to Change Active Link</h3>
          <p>
            Activate link with ref using <b>changeActiveLinkLabel</b> method
            <br />
            <button
              onClick={() => {
                this.menu.changeActiveLinkLabel('Test');
              }}
            >
              Test
            </button>
          </p>

          <p>
            Activate link with ref using <b>changeActiveLinkTo</b> method
            <br />
            <button
              onClick={() => {
                this.menu.changeActiveLinkTo('#level-3-menu-4');
              }}
            >
              #level-3-menu-4
            </button>
          </p>

          <p>
            Activate link with state using <b>activeLinkLabel</b> prop*
            <br />
            <button
              onClick={() => {
                this.setState({ activeLinkId: null, activeLinkLabel: 'Sub Menu 1' });
              }}
            >
              Sub Menu 1
            </button>
          </p>

          <p>
            Activate link with state using <b>activeLinkId</b> prop*
            <br />
            <button
              onClick={() => {
                this.setState({ activeLinkId: 2, activeLinkLabel: null });
              }}
            >
              2 (Menu 2 Id)
            </button>
          </p>

          <p>
            Also after selecting a link, you can refresh browser.
            In this case, it will automatically activates link matched
            location thanks to <b>activeLinkFromLocation</b> prop*.
          </p>

          <h3>Example to Change Content</h3>
          <p>
            Toggles content between two similar menu objects with state
            using <b>content</b> prop. (*Keeps active link, only if
            active link set as prop)
            <br />
            <button
              onClick={() => {
                this.setState(this.state.menuToggle
                  ? { menuToggle: false, menu: menu1 }
                  : { menuToggle: true, menu: menu2 },
                );
              }}
            >
              Toggle Content
            </button>
          </p>

          <br />

          <h3>Fixed Menu Style</h3>
          <p>
            <code>react-metismenu</code> default wrapper <code>display</code>
            style is <code>block</code>.
            To make menu looks like this, you should add some style manually;
          </p>
          <pre>
            <code>{`
.metismenu {
  position: fixed;
  width: 280px;

  bottom: 0;
  left: 0;
  top: 0;
}
            `}</code>
          </pre>

        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
