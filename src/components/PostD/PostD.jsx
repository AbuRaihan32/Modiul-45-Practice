import { useLoaderData, useNavigate } from "react-router-dom";

const PostD = () => {
    const navigate = useNavigate();
    const postD = useLoaderData();

    const goBackHandler = () =>{
        navigate(-1)
    }

    return (
        <div className="modal-box mx-auto mt-8">
            <h1 className="text-xl font-semibold py-6">{postD.body}</h1>
            <button className="btn w-full" onClick={goBackHandler}>Go Back</button>
        </div>
    );
};

export default PostD;