import React from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from '../doc/reglement_interieur_du_club.pdf';

function CV() {
    return (
        <div>
            <Document file={samplePDF}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
}
export default CV