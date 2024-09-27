import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from 'react-toastify';
import { Link } from "react-router-dom";

export const AdminUsers = () => {
 
  const { authorizationtoken, API } = useAuth();
  const [users, setUsers] = useState("");
 


  const getallUserData = async () => {
   
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: { Authorization: authorizationtoken },
      });

      const data = await response.json();
      setUsers(data);
      setYes(!true)
      
    } catch (error) {
      console.log(error); 
    }
  };

  const deleteuser = async (id) => {
    try {
      const response = await fetch(
        `${API}/api/admin/user/delete/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: authorizationtoken },
        }
      );
      if(response.ok){

        const data = await response.json();
        toast.error(data.message)
        getallUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallUserData();
    
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead> 
            <tbody>
              {console.log("div")}
              {users || users.length
                ? users.map((userdata, index) => {
                    return (
                      <tr key={index}>
                        <td>{userdata.username}</td>
                        <td>{userdata.email}</td>
                        <td>{userdata.phone}</td>
                        <td>
                          <Link to={`/admin/update/${userdata._id}/edit`}><button>Edit</button></Link>
                        </td>
                        
                        <td>
                          <button
                            onClick={() => {
                              deleteuser(userdata._id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : <h2>Loading...</h2>}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};


