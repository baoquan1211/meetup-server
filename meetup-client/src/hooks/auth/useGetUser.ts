function useGetUser() {
  // get user data from local storage
  const user = localStorage.getItem("user");
  return { data: user ? JSON.parse(user) : null };
}

export default useGetUser;
