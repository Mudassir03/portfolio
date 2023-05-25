

import {  pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


  

function ResumeNew() {
 

 
  return (
    <div className="cont" >
      <center  >
        <h4>Mobile No. :  8805680285</h4><br/>
        <h4>E-Mail     :456aazib@gmail.com</h4><br/>
        <pre>Join us for more news stories</pre><br/>

      </center>
     
    </div>
  );
}

export default ResumeNew;
