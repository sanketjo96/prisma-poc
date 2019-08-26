import React from 'react';
import { DropzoneArea } from 'material-ui-dropzone'
import Papa from 'papaparse';

const FileUploadControl = (props) => {
    const handleFileData = (data) => {
        props.handleFileData(data)
    }

    const handleDrop = (file) => {
        if (file.length) {
            var reader = new FileReader();
            reader.addEventListener('load', (e) => {
                const fileData = e.target.result;
                Papa.parse(fileData, {
                    header: true,
                    transformHeader: (colName) => {
                        return colName.replace(/\s/g, "_")
                            .replace("_&", "")
                            .replace(".", "")
                            ;
                    },
                    complete: handleFileData
                })
            });

            reader.readAsBinaryString(file[0]);
        }

    }

    return (
        <DropzoneArea
            acceptedFiles={['text/csv']}
            maxFileSize={200000000}
            filesLimit={1}
            dropzoneText="Drop PCR File Here. Make Sure Its In CSV Format"
            onChange={handleDrop}
        />
    );
}

export default FileUploadControl;