import { formatDistanceStrict } from "date-fns";

export const differenceDate = (start, end) => {
    return formatDistanceStrict(Date.parse(start), Date.parse(end))
}