import React, { useState } from "react";

const GalleryReadText = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const maxHeight = expanded ? "700px" : "500px"; // Adjust the maximum height as needed

  return (
    <div
      className={`bg-blue-500 mt-10 p-4 rounded-lg shadow-lg overflow-hidden transition-max-h duration-300 ease-in-out max-h-${maxHeight}`}
      style={{ maxHeight }}
    >
      <p className="text-white font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        nobis alias dignissimos? Quas quae iste temporibus totam. Incidunt
        perspiciatis nam praesentium inventore natus odit et, dolorem quae
        accusantium odio. Ratione distinctio, sapiente adipisci nulla numquam
        cupiditate at pariatur eos cum ipsa ipsam ut, magni repudiandae?
        Numquam, iusto ducimus esse molestias modi nisi aspernatur nihil
        pariatur voluptate incidunt, reprehenderit vero dolores fugit fuga
        dignissimos enim facere quidem eius neque earum tempore ipsam
        exercitationem omnis rem! Natus, nulla atque dolorum omnis dolores
        aperiam alias. Mollitia ipsum non ut, blanditiis dicta perferendis sed
        ex. Quod, expedita. Quidem ad vel debitis rerum ex ipsam?
      </p>
      {expanded && (
        <>
          {/* Add your additional content here */}
          <p className="text-white mt-4">Additional content goes here.</p>
        </>
      )}
      <button
        className="bg-white text-blue-500 px-4 py-2 mt-2 rounded-lg hover:bg-blue-100 hover:text-blue-600"
        onClick={toggleExpand}
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default GalleryReadText;
