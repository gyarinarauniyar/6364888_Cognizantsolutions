import { Link } from "react-router-dom";

function TrainersList({ trainers }) {
  return (
    <div>
      <h2>Trainers List</h2>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.trainerId}>
            {/* Pass TrainerId as a parameter in URL */}
            <Link to={`/trainer/${trainer.trainerId}`}>
              {trainer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;
