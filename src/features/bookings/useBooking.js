import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const params = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", params.bookingId],
    queryFn: () => getBooking(Number(params.bookingId)),
  });

  return { bookingId: params.bookingId, booking, isLoading, error };
}
