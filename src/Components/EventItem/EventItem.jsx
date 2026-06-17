export const EventItem = ({name, location, start, end}) => {
    return (
        <li>
            <h2>{name}</h2>
            <ul>
              <li>
                <p>{location}</p>
                <p>{name}</p>
                <p>{start}</p>
                <p>{end}</p>
              </li>
            </ul>
          </li>
    )
}