import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const { authorizationtoken,API } = useAuth();
  const [contdata, setContdata] = useState("");

  const getContacts = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: { Authorization: authorizationtoken },
      });
      if (response.ok) {
        const data = await response.json();
        setContdata(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteContact =async(id)=>{
    try {
      const response = await fetch(`${API}/api/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{Authorization:authorizationtoken}
      })
      if(response.ok){
        getContacts();
        toast.error("successfully deleted")
      }
    } catch (error) {
      console.log(error)
    }
  }

  

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <>
      <section className="admin-contacts-section">
        <div>
          <h1>Admin Contacts Data</h1>
        </div>
        <div className=" contact-con" >
          {!contdata || contdata.length===0?<h2>Loading...</h2>:contdata.map((cdata, index) => { 
            return (
              <div key={index} className="contact-card" >
               <div className="card-content">
               <p>name:-{cdata.username}</p>
                <p>email:-{cdata.email}</p>
                <p>msg:-{cdata.message}</p>
               </div>
                <button className="fixed-button" onClick={()=>{deleteContact(cdata._id)}}>delete</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
