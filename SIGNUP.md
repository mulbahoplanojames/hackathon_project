```js
  // Signup
  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    const { firstName, lastName, email, rollNumber, phoneNumber, password } =
      data;
    try {
      const response = await axios.post("http://localhost:8000/register", {
        firstName,
        lastName,
        email,
        rollNumber,
        phone: phoneNumber,
        password,
      });
      console.log("Response from the sign form", response);
      return response;
    } catch (error) {
      console.log("Registration failed from the form request :", error);
    }
  };

```

```js
  // Login
  const onHandleLoginSubmit = async (data: z.infer<typeof loginSchema>) => {
    // console.log(data);
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: data.email,
        password: data.password,
      });
      console.log("Response from the login form success block", response);
      return response;
    } catch (error) {
      console.error("Login failed from the login catch block:", error);
    }
  };
```
