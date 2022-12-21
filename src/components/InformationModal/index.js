import { Modal, message } from "antd";
import { useState, useEffect} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import uso from '../../assets/pdf/uso.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function InformationModal({
    showModal,
    title,
    content
}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        console.log(showModal)
    })
    if(showModal){  return (
        <Modal
            title={title}
            open={true}
            style={{ textAlign: "center" }}
            bodyStyle={{ textAlign: "left" }}
            width={600}
            footer={null}
        >
            <embed id="teste" src="https://drive.google.com/file/d/1Kf1LJO9wTqNaV9QQvRLvUBs9soDElzQ0/preview" width="100%" height="480" allow="autoplay"></embed>
        </Modal>
    )} else return null
}