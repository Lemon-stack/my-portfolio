import { Link, NavLink } from "react-router-dom";
import cvPdf from "/cv.pdf";

export default function Top() {
  const handleDownload = () => {
    fetch(cvPdf)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "cv.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error fetching PDF: ", error);
      });
  };

  return (
    <div className="flex justify-between items-center px-4 py-4">
      <Link to="/" className="text-xl lg:text-2xl cursor-pointer">
        Lemon.<span className="text-green-500">dev</span>
      </Link>

      <ul className="flex justify-evenly space-x-6 text-md lg:text-lg items-center">
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "color:text-green-500" : "text-gray-50"
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="cursor-pointer" onClick={handleDownload}>
          Resume
        </li>
      </ul>
    </div>
  );
}
