import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import JoditEditor from "jodit-react";
import "./Addblog.css";

export const Addblog = () => {
  const editor = useRef(null);
  const [description, setdescription] = useState("");
  const navigate = useNavigate();

  const [title, settitle] = useState("");

  const [image, setimage] = useState([]);
  const [header, setheader] = useState([]);
  const [category, setcategory] = useState([]);

  const token = localStorage.getItem("token");
  console.log("Token =", token);

  const configuration = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handleclear = () => {
    settitle("");
    setheader("");
    setdescription("");
    setcategory("");
  };
  const handleblog = async (e) => {
    e.preventDefault();

    const imageInput = document.getElementById("imageInput");
    const image = imageInput.files[0];

    const BlogData = new FormData();
    BlogData.append("title", title);
    BlogData.append("description", description);
    BlogData.append("image", image);
    BlogData.append("header", header);
    BlogData.append("category", category);

    try {
      const make = await axios.post(
        "https://lastlast.onrender.com/api/post/create/",
        BlogData,
        configuration
      );

      console.log(make);
      if (make.status === 200) {
        alert("failed to post a blog");
      }
    } catch (error) {
      console.log(error);
      alert("blog created successfuly");
    }
  };
  return (
    <div className="blog-dash-container">
      <div className="addblog">
        <b>
          <label>Title</label>
        </b>
        <input
          type="Text"
          className="addblog_text"
          placeholder="title..."
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <b>
          <label>Header</label>
        </b>
        <input
          type="Text"
          className="addblog_text"
          placeholder="header..."
          value={header}
          onChange={(e) => setheader(e.target.value)}
        />
        <b>
          <label>Description</label>
        </b>
        <textarea
          className="addblog_desc"
          name="Message"
          id=""
          cols="30"
          rows="9"
          placeholder="description..."
          value={description}
          onChange={(e) => setdescription(e.target.value)}></textarea>
        {/* <JoditEditor
          ref={editor}
          value={description}
          onChange={(newdescription) => setdescription(newdescription)}
        /> */}

        <b>
          <label>Category</label>
        </b>
        <input
          type="Text"
          className="addblog_text"
          placeholder="category..."
          value={category}
          onChange={(e) => setcategory(e.target.value)}
        />
        <input
          type="file"
          value={image}
          id="imageInput"
          accept="image/*"
          onChange={(e) => setimage(e.target.value)}
        />
        <button className="publish" onClick={handleblog}>
          Publish
        </button>
        <button className="cancel">Cancel</button>
        <button className="clear" onClick={handleclear}>
          Clear
        </button>
        <Link to="/">
          <span>{"View Your publsihed blogs >>>"}</span>
        </Link>
      </div>
    </div>
  );
};
