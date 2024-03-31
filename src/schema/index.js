import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(5).max(35).required("Pleaser enter your name"),
    email : Yup.string().email().required("Pleaser enter your email"),
    number : Yup.number().min(6).required("please enter your Number"),
    // confirm_password : Yup.string().required().oneOf([Yup.ref("password"), null], "password must be match")
})

