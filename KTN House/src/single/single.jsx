import "./single.css";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Single = () => {
  return (
    <div className="singlepost">
      <div className="singlepostwrapper">
        <img
          className="singlepostimg"
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <h1 className="singleposttitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singleedit">
            <div className="singleicons">
              <BiEdit />
              <RiDeleteBin6Line />
            </div>
          </div>
        </h1>
        <div className="singlepostinfo">
          <span className="singlepostauthor">
            Author: <b>Christa Eunice</b>
          </span>
          <span className="singlepostdate">1 Hour ago</span>
        </div>
        <p className="singlepostdesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          quia, nesciunt nemo nihil quae ipsam optio architecto officiis vel
          dolore quas vero fugit incidunt praesentium voluptatem? Quaerat
          obcaecati aperiam fugit!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Accusantium quia, nesciunt nemo nihil quae ipsam
          optio architecto officiis vel dolore quas vero fugit incidunt
          praesentium voluptatem? Quaerat obcaecati aperiam fugit!Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Accusantium quia,
          nesciunt nemo nihil quae ipsam optio architecto officiis vel dolore
          quas vero fugit incidunt praesentium voluptatem? Quaerat obcaecati
          aperiam fugit!Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Accusantium quia, nesciunt nemo nihil quae ipsam optio
          architecto officiis vel dolore quas vero fugit incidunt praesentium
          voluptatem? Quaerat obcaecati aperiam fugit!Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Accusantium quia, nesciunt nemo
          nihil quae ipsam optio architecto officiis vel dolore quas vero fugit
          incidunt praesentium voluptatem? Quaerat obcaecati aperiam fugit!Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quia,
          nesciunt nemo nihil quae ipsam optio architecto officiis vel dolore
          quas vero fugit incidunt praesentium voluptatem? Quaerat obcaecati
          aperiam fugit!
        </p>
        <section id="testimonial">
          <div className="title-text">
            <h1>Comments</h1>
          </div>
          <div class="testimonial-row">
            <div class="testimonial-col">
              <div class="user">
                <img
                  src="https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />

                <div className="user-info">
                  <h4>R WAYNE</h4>
                  <small>@wyneleo</small>
                </div>
              </div>
              <p>
                Donec eget ultricies sapi. Sed porttitor, mauris ater lob
                facilisis, elit sapie eliefend ligula.Donec eget ultricies sapi.
                Donec eget ultricies sapi. Sed porttitor, mauris ater lob
                facilisis, elit sapie eliefend ligula. Donec eget ultricies
                sapi.{" "}
              </p>
            </div>
            <div class="testimonial-col">
              <div className="user">
                <img
                  src="https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />

                <div className="user-info">
                  <h4>Atoni Alice</h4>
                  <small>@Aliceatoni</small>
                </div>
              </div>
              <p>
                Donec eget ultricies sapi. Sed porttitor, mauris ater lob
                facilisis, elit sapie eliefend ligula.Donec eget ultricies sapi.
                Donec eget ultricies sapi.
              </p>
            </div>
            <div className="testimonial-col">
              <div class="user">
                <img
                  src="https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                  alt=""
                />
                <div className="user-info">
                  <h4>Morgan Katia</h4>
                  <small>@morgan4katy</small>
                </div>
              </div>
              <p>
                Donec eget ultricies sapi. Sed porttitor, mauris ater lob
                facilisis, elit sapie eliefend ligula.Donec eget ultricies sapi.
                Donec eget ultricies sapi. Sed porttitor, mauris ater lob
                facilisis, elit sapie eliefend ligula. Donec eget ultricies
                sapi.{" "}
              </p>
            </div>
          </div>
        </section>
        <button className="addcomments">Add Comments</button>
      </div>
    </div>
  );
};
