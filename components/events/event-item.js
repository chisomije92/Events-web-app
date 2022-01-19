import Link from "next/link";
import classes from "./event-item.module.css";
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const parsedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = location.replace(", ", `\n`);
  const goToLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <h2>{parsedDate}</h2>
          </div>
          <div className={classes.address}>
            <address>{address}</address>{" "}
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={goToLink}>Proceed To Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
