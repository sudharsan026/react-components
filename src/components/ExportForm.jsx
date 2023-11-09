// MultiPagePdfGenerator.js

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const MultiPagePdfGenerator = (pageRefs) => {
  const pdf = new jsPDF("p", "mm", "a4", true);

  const addImageToPdf = (imgData, canvas) => {
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;
    pdf.addImage(
      imgData,
      "PNG",
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio
    );
  };

  const generatePdf = () => {
    pageRefs.forEach((pageRef, index) => {
      const input = pageRef.current;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        addImageToPdf(imgData, canvas);

        if (index < pageRefs.length - 1) {
          pdf.addPage();
        } else {
          pdf.save("multi-page-document.pdf");
        }
      });
    });
  };

  return generatePdf;
};

export default MultiPagePdfGenerator;
