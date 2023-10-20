import React from "react";

export const singlepage = () => {
  return (
    <div className="single-post">
      <div className="post">
        <h4>East or West Food is the best</h4>
        <p>
          One cannot think well, love well, sleep well, if one has not dined
          wellOne cannot think well, love well, sleep well, if one has not dined
          wellOne cannot think well, love well, sleep well, if one has not dined
          wellOne cannot think well, love well, sleep well, if one has not dined
          wellOne cannot think well, love well, sleep well, if one has not dined
          wellOne cannot think well, love well, sleep well, if one has not dined
          wellOne cannot think well, love well, sleep well, if one has not dined
          wellOne cannot think well, love well, sleep well, if one has not dined
        </p>

        <div className="field">
          <input type="text" name="Name" placeholder="Your Names" required="" />
        </div>
        <div className="field">
          <input
            type="email"
            name="Email"
            placeholder="Your Email Address"
            required=""
          />
        </div>
        <div class="fld-1">
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="9"
            placeholder="Enter Message Here..."
            required=""></textarea>
        </div>
        <div className="btn-send">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};
