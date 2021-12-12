import { Alert,Button,Snackbar} from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import app_config from "../config";
import UpdateForm from "./updateform";

const ManageUsers = () => {
  const url = app_config.api_url;

  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [snakbarOpen, setSnakbarOpen] = useState(false);
  const [updateFormData,setUpdateForm]=useState({});

  //   for fetching data from backend
  const fetchUsersData = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsersList(data);
        setLoading(false);
      });
  };

  const deleteUser = (id) => {
    const reqOpt = {
      method: "DELETE",
    };

    fetch(url + "/user/delete/" + id, reqOpt)
      .then((res) => {
        if (res.status === 200) {
          console.log("item deleted");
          fetchUsersData();
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  };

  const updateUser = (User) =>{

      setShowUpdateForm(true);
      setUpdateFormData(user);
  };
  //   for displaying users list inside table
  const showUsers = () => {
    if (!loading) {
      return usersList.map((user, index) => (
        <tr key={index}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>
            <Button
              onClick={() => {
                deleteUser(user._id);
              }}
              variant="contained"
              color="error"
            >
              <i className="fas fa-trash-alt"></i>
              &nbsp; Delete
            </Button>
          </td>
          <td>
            <Button
              onClick={() => {
                deleteUser(user._id);
              }}
              variant="contained"
              color="warning"
            >
              <i className="fas fa-pen-alt"></i>
              Edit
            </Button>
          </td>
        </tr>
      ));
    } else {
      return <h2>Loading ...</h2>;
    }
  };

  //   it will run automatically after component is opened
  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div className="container">
      <h1>Manage Users</h1>
      <hr />

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete User</th>
            <th>Update User</th>
          </tr>
        </thead>
        <tbody>{showUsers()}</tbody>
      </table>
    </div>
  );
};

export default ManageUsers;