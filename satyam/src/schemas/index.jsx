import * as Yup from "yup";


export const signUpSchema = Yup.object({
    name:Yup.string().min(3,"too short").max(20).required("Please enter your name"),
    sname:Yup.string().min(2).max(20).required("Please enter student name"),
    email:Yup.string().email().required("Please enter your email"),
    phone:Yup.number().min(10).required("Enter your phone number"),
    years:Yup.number().min(4).required("Enter the year"),
    grade:Yup.string().min(2).max(6).required("Enter the Grade"),
    previous_school:Yup.string().min(2).max(20).required("Enter your Previous school name"),
    address1:Yup.string().min(6).max(25).required("Enter the permenant  address"),
    address2:Yup.string().min(6).max(25).required("Enter the address"),
    address3:Yup.string().min(6).max(25).required("Enter the address"),
    selectedOption: Yup.string().notOneOf(['', 'default'], 'Please select an option').required('Required'),
});

