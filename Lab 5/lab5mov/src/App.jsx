import { useState } from "react";
import "./App.css";

function App() {
  const [movs, setmovs] = useState([]);

  return (
    <>
      <h1>Movie Show</h1>

      <Create setmovs={setmovs} />
      <Show arrs={movs} setmovs={setmovs} />
    </>
  );
}

function Show({ arrs, setmovs }) {
  const removeMovie = (indexToRemove) => {
    const confirmDelete = confirm(`Remove "${arrs[indexToRemove].name}"?`);
    if (confirmDelete) {
      setmovs((prev) => prev.filter((_, index) => index !== indexToRemove));
    }
  };

  const addReview = (index, comment, stars) => {
    if (comment.trim() === "") {
      alert("Comment cannot be empty");
      return;
    }
    setmovs((prev) =>
      prev.map((movie, i) =>
        i === index
          ? { ...movie, reviews: [...movie.reviews, { comment, stars }] }
          : movie
      )
    );
  };

  return (
    <div>
      {arrs.length === 0 ? (
        <p>No movies yet</p>
      ) : (
        arrs.map((movie, index) => (
          <div key={index}>
            <h3>{movie.name}</h3>

            {movie.reviews.length === 0 ? (
              <p>No comments yet</p>
            ) : (
              <ul>
                {movie.reviews.map((rev, rIndex) => (
                  <li key={rIndex}>
                    Comment: {rev.comment} | Rating: {rev.stars}⭐
                  </li>
                ))}
              </ul>
            )}

            <AddReview index={index} addReview={addReview} />
            <button onClick={() => removeMovie(index)}>Remove Movie</button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

function AddReview({ index, addReview }) {
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const handleAdd = () => {
    addReview(index, comment, stars);
    setComment("");
    setStars(0);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="5"
        value={stars}
        onChange={(e) => setStars(Number(e.target.value))}
      />
      <button onClick={handleAdd}>Add Comment</button>
    </div>
  );
}

function Create({ setmovs }) {
  const [name, setname] = useState("");

  const addMovie = () => {
    if (name.trim() === "") {
      alert("Movie name cannot be empty");
      return;
    }

    setmovs((prev) => [...prev, { name, reviews: [] }]);
    setname("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
}

export default App;
