// DownloadCv.js

import cvPdf from '/cv.pdf'; // Import the PDF file

const DownloadCv = () => {
  const handleDownload = () => {
    fetch(cvPdf)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'cv.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error('Error fetching PDF: ', error);
      });
  };

  return (
    <button className="hover:bg-gray-50 hover:text-zinc-900 absolute top-3 right-3 md:right-5 border-gray-50 rounded-lg text-gray-50 border md:w-1/5 w-1/4 " onClick={handleDownload}>Download CV</button>
  );
};

export default DownloadCv;
