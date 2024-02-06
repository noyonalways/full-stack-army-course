import useUserDetails from "../../hooks/get-user-details-hook";

const GetUserDetailsCache2 = () => {
  const { isLoading, nextHandle, prevHandle, user, max, id } = useUserDetails();

  return (
    <section className="container mx-auto flex items-center h-dvh">
      <div className="bg-slate-200 lg:max-w-2xl mx-auto p-3 w-full rounded-md">
        <h1 className="text-2xl font-bold text-center my-5">User Id is {id}</h1>
        {isLoading && <p>Loading....</p>}
        {!isLoading && user && (
          <div>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
        <div className="flex mx-auto gap-x-5 justify-center ">
          <button
            disabled={id === 1}
            className="px-3 py-1 rounded bg-red-400 text-white disabled:bg-red-200"
            onClick={prevHandle}
          >
            Previous
          </button>
          <button
            disabled={id === max}
            className="px-3 py-1 rounded bg-green-400 text-white disabled:bg-green-200"
            onClick={nextHandle}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetUserDetailsCache2;
