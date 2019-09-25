const login = (email, password) => {
  fetch("/login", {
    method: "Post",
    body: {
      email,
      password
    }
  })
    .then(res => res.json())
    .then(res => {
      return {
        type: "LOGIN",
        data: res
      };
    });
};
