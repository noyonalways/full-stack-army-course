/**
 * /user?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

/* function get (path, cb){
    const data = {} // somhow process it
    cb(data)
}; */

// JavaScript Callback Hell!
/* function getUserNameFromCommnet(username){
    get(`/user?username=${username}`, (user) => {
        get(`/posts?user_id=${user.id}`, (posts)=> {
            get(`'/comments?post_id=${posts[0].id}`, (comments) => {
                get(`/users.username=${comments[0].username}`, (user) => {
                    console.log(user);
                })
            })
        })
    })
} */

// JavaScipt Promise

/* function wait(ms){
    const promise = new Promise((resolve)=> {
        setTimeout(resolve, ms)
    })
    return promise;
} */

// short way
/* const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

wait(1000).then(() => {
    console.log("Done 1");
})
wait(2000).then(() => {
    console.log("Done 2");
})
wait(3000).then(() => {
    console.log("Done 3");
}) */

const get = (urlPath) => Promise.resolve();

/* get(`/users?username=${"noyon"}`)
	.then((user) => {
		return get(`/posts?user_id=${user.id}`);
	})
	.then((posts) => {
		const latestPost = posts[0];
		return get(`/comments?post_id=${latestPost.id}`);
	})
	.then((comments) => {
		const latestComment = comments[0];
		return get(`/users?username=${latestComment.username}`);
	})
	.then((finalUser) => {
		console.log(finalUser);
	})
	.catch((err) => {
		console.log("Error", err);
	});
 */

// JavaScript Async Await
async function getUserName(username) {
	try {
		const mainUser = await get(`/users?username=${username}`);
		const posts = await get(`/posts?user_id=${mainUser.id}`);
		const comments = await get(`/comments?post_id=${posts[0].id}`);
		const user = await get(`/users?username=${comments[0].username}`);
		console.log(user);
	} catch (err) {
        console.log(err);
    }
}
