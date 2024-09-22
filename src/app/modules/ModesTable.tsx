import React from "react";
import { generateMajorScale, orderNotesOnRoot } from "../utils/notes";
import { modes_data } from "../utils/modalities";
import { Container } from "../../../node_modules/@mui/material/index";
import { DataGrid, GridColDef } from "../../../node_modules/@mui/x-data-grid";
import { intervals } from "../utils/intervals";


export default function ModesTable({rootNote} : {rootNote:string}) {

    const columns: GridColDef<(typeof rows)[number]>[] = [
        {
          field: 'mode',
          headerName: 'Modo',
          sortable: false,
        },
        {
          field: 'grado',
          headerName: 'Grado',
        },
        {
          field: 'feeling',
          headerName: 'Feeling',
          sortable: false,
        },
        {
          field: 'root',
          headerName: '0',
          sortable: false,
        },
        {
          field: 'b_second',
          headerName: 'b2',
          sortable: false,
        },
        {
          field: 'second',
          headerName: '2',
          sortable: false,
        },
        {
          field: 'b_third',
          headerName: 'b3',
          sortable: false,
        },
        {
          field: 'third',
          headerName: '3',
          sortable: false,
        },
        {
          field: 'fourth',
          headerName: '4',
          sortable: false,
        },
        {
          field: 'b_fifthxsharp_fourth',
          headerName: '4#/b5',
          sortable: false,
        },
        {
          field: 'fifth',
          headerName: '5',
          sortable: false,
        },
        {
          field: 'b_sixth',
          headerName: 'b6',
          sortable: false,
        },
        {
          field: 'sixth',
          headerName: '6',
          sortable: false,
        },
        {
          field: 'b_seventh',
          headerName: 'b7',
          sortable: false,
        },
        {
          field: 'seventh',
          headerName: '7',
          sortable: false,
        },
      ];

    

    const generateModesTable = (rootNote: string) => {

        const baseMajorScale = generateMajorScale(rootNote);
        const aux: { name: string; order: number; signature: string; intervals: string[]; root_note: string;  }[]  = [];
        const res: { mode: string; grado: number; feeling: string; root: string; b_second: string; second: string; b_third: string; third: string; fourth: string; b_fifthxsharp_fourth: string; fifth: string; b_sixth: string; sixth: string; b_seventh: string; seventh: string; }[] = []; 
        

        baseMajorScale.forEach((element, index) => {
            const mode = {
                'name': modes_data[index].name,
                'order': modes_data[index].order,
                'signature': modes_data[index].signature,
                'intervals': modes_data[index].intervals,
                'root_note': element,
            }
            aux.push(mode)
        });


        aux.forEach((element) => {

            const orderedNotes = orderNotesOnRoot(element.root_note);
            const mode_notes = {
                'b_second': '-',
                'second': '-',
                'b_third': '-',
                'third': '-',
                'fourth': '-',
                'b_fifthxsharp_fourth': '-',
                'fifth': '-',
                'b_sixth': '-',
                'sixth': '-',
                'b_seventh': '-',
                'seventh': '-',
            };

            element.intervals.forEach((element) => {
                const interval_index = intervals.indexOf(element);
                mode_notes[element as keyof typeof mode_notes] = orderedNotes[interval_index];
            })

            const test = {
                // 'id': `${element.name}_${element.order}_${element.root_note}`,
                'mode': element.name, 
                'grado': element.order,
                'feeling': '-',
                'root': element.root_note,
                'b_second': mode_notes.b_second,
                'second': mode_notes.second,
                'b_third': mode_notes.b_third,
                'third': mode_notes.third,
                'fourth': mode_notes.fourth,
                'b_fifthxsharp_fourth': mode_notes.b_fifthxsharp_fourth,
                'fifth': mode_notes.fifth,
                'b_sixth': mode_notes.b_sixth,
                'sixth': mode_notes.sixth,
                'b_seventh': mode_notes.b_seventh,
                'seventh': mode_notes.seventh,
            }

            res.push(test);
        })
        return res;
    }

    const rows = generateModesTable(rootNote);

    function getRowId(row) {
        return row.mode;
    }

    return (
        <section className="modes-table">
           <Container maxWidth="l">
                <div className="header-holder">
                    <h1>Tabla de modos complementarios para {rootNote}</h1>
                </div>

                <div className="table-holder">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: false
                        }}
                        // pageSizeOptions={[5]}
                        // checkboxSelection
                        disableRowSelectionOnClick
                        hideFooter={true}
                        getRowId={getRowId}
                    />
                </div>
           </Container>
        </section>
    );

}