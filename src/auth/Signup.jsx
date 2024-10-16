import React from "react";
import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be atleast 3 characters long"),
  mobile: yup.string().required("Mobile is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const Signup = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const url = `${import.meta.env.VITE_BASE_URL}/auth/signup`;
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
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
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={2}
    >
      <Card sx={{ minWidth: 275 }} elevation={1}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
              <Typography variant="h6" align="center" component={"h3"}>
                Sign up
              </Typography>

              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    size="small"
                  />
                )}
              />

              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile"
                    variant="outlined"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    size="small"
                  />
                )}
              />

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

              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    size="small"
                  />
                )}
              />

              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
      <Typography>
        Already have account? <Link to={"/auth/login"}>Login</Link>
      </Typography>
    </Box>
  );
};

export default Signup;
