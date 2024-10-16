import React from "react";
import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"; //new(useNavigate)

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate(); //new
  
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const url = `${import.meta.env.VITE_BASE_URL}/auth/login`;
    axios
      .post(url, data)
      .then((response) => {            
        var UserName = response.data.name; //new        
        console.log(response.data);
        toast.success("Hi..! " + UserName  + " Welcome to our site"); //new
        navigate("/dashboard"); //new    

        var Useremail = response.data.email        
        var UserDetails = UserName + "   " + Useremail
        localStorage.setItem('username', UserDetails);
        console.log(" Name and Mail Id : "+ UserDetails);          
      })
      .catch((error) => {
        if (error?.response?.data?.error?.message)
          toast.error(error.response.data.error.message);
        else console.log(error);
      });
  };

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card sx={{ minWidth: 275 }} elevation={1}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
              <Typography variant="h6" align="center" component={"h3"}>
                Login
              </Typography>

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    size="small"
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    size="small"
                  />
                )}
              />

              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>

      <Typography>
        New user? <Link to={"/auth/signup"}>Create account</Link>
      </Typography>
    </Box>
  );
};

export default Login;
