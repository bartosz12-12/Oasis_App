import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [serchParams] = useSearchParams();

  const filterValue = serchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const sortByRow = serchParams.get("sortBy") || "startDate-desc";

  const [field, direction] = sortByRow.split("-");
  const sortBy = { field, direction };

  const page = !serchParams.get("page") ? 1 : Number(serchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, error, count };
}
