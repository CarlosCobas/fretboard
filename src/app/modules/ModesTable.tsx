import React from "react";
import { generateMajorScale } from "../utils/notes";
import { modes_data } from "../utils/modalities";
import { Container } from "../../../node_modules/@mui/material/index";

export default function ModesTable({rootNote} : {rootNote:string}) {


    const generateModesTable = (rootNote: string) => {

        const baseMajorScale = generateMajorScale(rootNote);
        const res : Array<Object> = [];

        baseMajorScale.forEach((element, index) => {
            const mode = {
                'name': modes_data[index].name,
                'order': modes_data[index].order,
                'signature': modes_data[index].signature,
                'intervals': modes_data[index].intervals,
                'root_note': element,
                'full_mode': [],
            }

            

            res.push(mode)
        });
        return res;
    }


    // const tableElements = generateModesTable(rootNote).map((mode, index) => <TableElement key={`table_elem_${index}`} mode={mode} />);

    return (
        <section className="modes-table">
           <Container maxWidth="l">
                <div className="header-holder">
                    <h1>Tabla de modos complementarios para {rootNote}</h1>
                </div>

                <div className="table-holder">
                </div>
           </Container>
        </section>
    );

}