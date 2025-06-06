import profilePic from "./assets/warrior.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Hey! Suj</h2>
      <p className="card-text">I make Youtube videos and play video games</p>
    </div>
  );
}

export default Card;
