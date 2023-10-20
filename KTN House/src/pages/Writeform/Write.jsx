import "./Write.css";
import { GrAddCircle } from "react-icons/gr";
export const Write = () => {
  return (
    <div className="write">
      <form className="writeform">
        <div className="writeformgroup">
          <label htmlFor="fileInput">
            <GrAddCircle className="writeIcon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeformgroup">
          <textarea
            type="text"
            placeholder="Description.... "
            className="writeInput  writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};
