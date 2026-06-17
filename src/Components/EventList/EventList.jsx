import { EventItem } from "../EventItem/EventItem";

export const EventList = ({ qwe }) => {
  return (
    <ul>
      {qwe.map((event) => {
        return (
        //   <li key={event.name}>
        //     <h2>{event.name}</h2>
        //     <ul>
        //       <li>
        //         <p>{event.location}</p>
        //         <p>{event.name}</p>
        //         <p>{event.time.start}</p>
        //         <p>{event.time.end}</p>
        //       </li>
        //     </ul>
        //   </li>
        <EventItem key={event.name} name={event.name} location={event.location} start={event.time.start} end={event.time.end}/>
        );
      })}
    </ul>
  );
};
