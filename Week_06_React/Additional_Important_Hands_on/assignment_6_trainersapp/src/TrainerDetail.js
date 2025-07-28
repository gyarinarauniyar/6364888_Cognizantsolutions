import { useParams } from "react-router-dom";
import { TrainersData } from "./TrainersMock";

function TrainerDetail() {
  const { id } = useParams();
  const trainer = TrainersData.find(t => t.trainerId === parseInt(id));

  if (!trainer) return <h2>Trainer not found</h2>;

  return (
    <div>
      <h2>{trainer.name}</h2>
      <p><b>Email:</b> {trainer.email}</p>
      <p><b>Phone:</b> {trainer.phone}</p>
      <p><b>Technology:</b> {trainer.technology}</p>
      <p><b>Skills:</b> {trainer.skills}</p>
    </div>
  );
}
export default TrainerDetail;
