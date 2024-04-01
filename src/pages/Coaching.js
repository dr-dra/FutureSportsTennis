import TrainingVideo from "../media/tennis_training.mp4";

const Coaching = () => {
  return (
    <div className="block75">
      <h2>Training and Coaching at FutureSports Tennis</h2>
      <div className="video-container">
        <video controls>
          <source src={TrainingVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="source">
        source: https://youtu.be/r1KRhB4QeCg?si=Q3lHgYSa1UPoFm2A
      </p>
    </div>
  );
};

export default Coaching;
