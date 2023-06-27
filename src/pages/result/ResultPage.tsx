import Loading from "../../components/Loading/Loading";
import DisplayResult from "../../components/DisplayResult/DisplayResult";
import useResult from "./hooks/useResult";
import Error from "../../components/Error/Error";

export default function ResultPage() {
    const {loading, distances, error, cities, passengers, date} = useResult();

    const isValidResult = !loading && !error && distances.length > 0;
    const isLoading = loading && !error
    const isError = error && !loading

    return <>
        {isLoading && <Loading />}
        {isError && <Error />}
        {isValidResult && <DisplayResult distances={distances} cities={cities} passengers={passengers} date={date} />}
    </>;
}
