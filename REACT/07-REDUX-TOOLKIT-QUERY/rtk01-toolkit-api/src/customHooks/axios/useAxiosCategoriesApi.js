import { useEffect, useState } from "react";
import { axiosCatApi } from "./axiosApi";


export default function useAxiosCategoriesApi(){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");

    const getApiData = async () => {
        try {
            const response = await axiosCatApi("/breeds");
            const responseData = await response?.data;
            setData(responseData);
            setIsLoading(false);
        } catch (err) {
            setIsError(true);
            setError("Veri alınırken bir sorun meydana geldi...");
            throw new Error(err);
        }
    }
    useEffect(() => {
        setInterval(() => getApiData(),1500);
    },[])

    return [data, isLoading, isError,error];
}