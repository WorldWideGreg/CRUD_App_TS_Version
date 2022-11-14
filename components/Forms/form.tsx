import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state: any, event: React.ChangeEvent<HTMLInputElement>) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {

  const [formData, setFormData] = useReducer(formReducer, {});

  const formId = useSelector((state: any) => state.app.client.formId);

  return (
    <div className="">
      {formId ? UpdateUserForm({ formId, formData, setFormData }) : AddUserForm({ formData, setFormData })} </div>
  )
}

