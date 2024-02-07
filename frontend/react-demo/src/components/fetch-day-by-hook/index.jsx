import useFetchData from "../../hooks/useFetchData2";

const FetchDataByCustomHook = () => {
  const users = useFetchData(
    "https://jsonplaceholder.typicode.com/users",
    (data) => data.map((item) => ({ id: item.id, name: item.name }))
  );
  const posts = useFetchData(
    "https://jsonplaceholder.typicode.com/posts",
    (data) => data.slice(0, 15)
  );
  const comments = useFetchData(
    "https://jsonplaceholder.typicode.com/comments",
    (data) => data.slice(0, 20)
  );

  return (
    <section className="container  mx-auto">
      <h1 className="text-2xl font-bold text-center py-3 mb-3">
        Fetch Data App by using React custom Hook
      </h1>
      <div className="flex gap-x-4">
        <div className="bg-slate-200 lg:max-w-2xl mx-auto p-3 w-full rounded-md">
          <h1 className="text-2xl font-bold text-center my-5">Users</h1>
          {users.isLoading && <p>Loading....</p>}
          {!users.isLoading && users.data && (
            <ul className="list-decimal list-inside">
              {users.data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="bg-slate-200 lg:max-w-2xl mx-auto p-3 w-full rounded-md">
          <h1 className="text-2xl font-bold text-center my-5">Posts</h1>
          {posts.isLoading && <p>Loading....</p>}
          {!posts.isLoading && posts.data && (
            <ul className="list-decimal list-inside">
              {posts.data.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="bg-slate-200 lg:max-w-2xl mx-auto p-3 w-full rounded-md">
          <h1 className="text-2xl font-bold text-center my-5">Comments</h1>
          {comments.isLoading && <p>Loading....</p>}
          {!comments.isLoading && comments.data && (
            <ul className="list-decimal list-inside">
              {Array.isArray(comments.data) &&
                comments.data.map((comment) => (
                  <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default FetchDataByCustomHook;
