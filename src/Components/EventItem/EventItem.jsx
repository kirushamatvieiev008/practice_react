import { formatDate } from "../../utils/formatDate";
import { differenceDate } from "../../utils/differenceDate";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiCalendar } from "react-icons/gi";
// import { FaRegClock } from "react-icons/fa6";


export const EventItem = ({ name, location, start, end }) => {
  return (
    <li>
      <h2>{name}</h2>
      <ul>
        <li>
          <p><FaLocationDot color="red"/>{location}</p>
          <p><FaUser />{name}</p>
          <p><GiCalendar />{formatDate(start)}</p>
          <p><FaRegClock />{differenceDate(start, end)}</p>
        </li>
      </ul>
    </li>
  );
};
