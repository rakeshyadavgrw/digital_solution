import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Updateuser = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const { authorizationtoken, API } = useAuth();

  let param = useParams();
  const id = param.undefined; 

  const showuser = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/user/data/${id}`,
        {
          method: "GET",
          headers: { Authorization: authorizationtoken },
        }
      );

      const responsedata = await response.json();
      if (response.ok) {
        setData(responsedata);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateuserdata = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        `${API}/api/admin/user/update/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationtoken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("successfully updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showuser();
  }, []);

  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <section>
      <div>
        <h1>Update User Data</h1>
      </div>
      <div className="container grid grid-two-cols">
        <section className="section-form">
          <div>
            <form onSubmit={updateuserdata}>
              <div>
                <label>username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleinput}
                  required
                />
              </div>
              <div>
                <label>email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleinput}
                  required
                />
              </div>
              <div>
                <label>phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleinput}
                  required
                />
              </div>
              <div>
                <button type="submit">update</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};
