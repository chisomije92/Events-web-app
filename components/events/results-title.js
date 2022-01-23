import Button from "../UI/Button";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const parsedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {parsedDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
