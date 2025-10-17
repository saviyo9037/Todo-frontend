// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';

// export const useUserList = (showUsers = true) => {
//     return useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const response = await axios.get("http://localhost:5000/users");
//       return response.data;
//     },
//     refetchOnWindowFocus: false,
//     enabled: showUsers
//   });
// };

// export const useUserListMutate = () => {
//     const queryClient = useQueryClient
//     return useMutation({
//       mutationFn:  async () => {
//         await axios.post("http://localhost:5000/users",{
//           id :6 ,
//           name : "saviyoGeorge",
//         },
//       );
//     },
//     onSuccess:() => {
//       queryClient.invalidateQueries({
//         queryKey:["users"],
//       });
//     },
//   })
// }