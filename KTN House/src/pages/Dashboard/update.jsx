import React from "react";
import "./update.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate("");
  useEffect(() => {
    axios
      .get(`https://lastlast.onrender.com/api/post/one/${id}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("title", data.title);
    formData.append("header", data.header);
    formData.append("description", data.description);
    formData.append("category", data.category);
    const apiKey = localStorage.getItem("token");

    axios
      .put(`https://lastlast.onrender.com/api/post/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Data updated successfully");
        navigate("/");
      });
  }
  return (
    <div className="update-container">
      <div className="update-form">
        <form onSubmit={handleUpdate}>
          <b>
            <label>Title</label>
          </b>
          <input
            type="Text"
            value={data.title}
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
            className="update_text"
            placeholder="title..."
          />
          <b>
            <label>Header</label>
          </b>
          <input
            type="Text"
            className="update_text"
            value={data.header}
            onChange={(e) => {
              setData({ ...data, header: e.target.value });
            }}
            placeholder="header..."
          />
          <b>
            <label>Description</label>
          </b>
          <textarea
            className="update_desc"
            value={data.description}
            onChange={(e) => {
              setData({ ...data, description: e.target.value });
            }}
            name="Message"
            id=""
            cols="30"
            rows="9"
            placeholder="description..."></textarea>

          <b>
            <label>Category</label>
          </b>
          <input
            type="Text"
            className="update_text"
            placeholder="category..."
            value={data.category}
            onChange={(e) => {
              setData({ ...data, category: e.target.value });
            }}
          />
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={(e) => {
              setData({ ...data, image: e.target.files[0] });
            }}
          />

          <button className="edit">Update</button>
        </form>
      </div>
    </div>
  );
};
