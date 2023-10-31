import { useEffect, useState } from "react";
import "./single.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useParams } from "react-router-dom";

export const Single = () => {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [comment, setComments] = useState([]);
  const [message, setmessage] = useState("");
  const [author, setauthor] = useState("");
  const [post, setpost] = useState(null);

  // const [error, setError] = useState(null);

  const getAll = async () => {
    await fetch(`https://lastlast.onrender.com/api/post/one/${_id}`)
      .then((response) => response.json())
      .then((res) => {
        setBlogData(res.data);
        setComments(res.data.comments);
        setauthor(res.data.author);
      });

    // console.log(res);
  };
  useEffect(() => {
    getAll();
  }, []);
  console.log("comments are =", comment);
  console.log("POSTS", blogData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("commentBody", message);

    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    console.log("token", token);

    if (token) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      fetch(`https://lastlast.onrender.com/api/commenting/comment/${_id}`, {
        method: "POST",
        headers: headers,
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setmessage("");

            console.log("blog added");
            alert("Comment added successfully");
            getAll();
            return response.json();
          } else {
            console.error("Request failed with status:", response.status);
            alert("Request failed with status:", response.status);
          }
        })
        .catch((error) => {
          alert("Fetch error:", error);
        });
    } else {
      alert("Token not found in localStorage. Please log in.");
    }
  };
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img className="singlepostimg" src={blogData.image} alt="" />
        <div className="singleposttitle">
          <h1>{blogData.title}</h1>
        </div>

        <div className="singlepostdesc">
          <p>{blogData.description} </p>
        </div>

        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author:{" "}
            <b>
              {author.firstname}
              &nbsp;
              {author.lastname}
            </b>
          </span>
          <span className="singlepostdate">{blogData.createdAt}</span>
        </div>
        <section id="testimonial">
          <div className="title-text">
            <h1>Comments</h1>
          </div>
          <div class="testimonial-row">
            <form onSubmit={handleSubmit}>
              <textarea
                className="add-cmt"
                cols="30"
                rows="2"
                type="text"
                value={message}
                onChange={(e) => {
                  setmessage(e.target.value);
                }}
                placeholder="Add Comment"
              />
              <div className="send-button">
                <button className="addcomments">Post Comment</button>
              </div>
            </form>
            {Array.isArray(comment) && comment.length > 0 ? (
              <div className="comment">
                {comment.map((comments, index) => (
                  <div className="user" key={index}>
                    <img
                      className="user-img"
                      src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                    <div className="user-info">
                      <h4>{comments.user.lastname}</h4>
                      <small>{comments.user.email}</small>
                      <p>{comments.commentBody}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No comments to display</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
