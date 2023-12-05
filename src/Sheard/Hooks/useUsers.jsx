import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import axios from "axios";

const useUsers = () => {
    const axiosSecure = useAxios()
    // const {user} = useAuth()
    const { data: usersData=[],isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const {data} = await axios.get(`http://localhost:5000/users`)
            // const {data} = await axios.get(`https://body-pulse.vercel.app/users`)
            return data
        }
      })
      return {usersData,isLoading,refetch}
};

export default useUsers;