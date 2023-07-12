async function useGetData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.ok ? await response.json() : new Error("Error!");
}
export default useGetData;
