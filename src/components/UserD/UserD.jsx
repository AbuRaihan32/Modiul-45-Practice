import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserD = () => {
    const param = useParams();
    console.log(param)
    const userD = useLoaderData()
    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className="modal-box mx-auto">
                <h3 className="font-bold text-lg">Name: {userD.name}</h3>
                <p className="py-4">User Name : {userD.username}</p>
                <p className="py-4">Phone Number : {userD.phone}</p>
                <p className="py-4">Email : {userD.email}</p>
                <p className="py-4">Website : {userD.website}</p>
                <button className="btn w-[80%]" onClick={goBackHandler}>Go Back</button>
            </div>
        </div>
    );
};

export default UserD;