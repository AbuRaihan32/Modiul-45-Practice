
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const { name, phone, email, id} = user;
    const navigate = useNavigate();

    const seeMoreHandler = () =>{
        navigate(`/users/${id}`);
    }
    return (
        <div className="flex flex-col font-bold p-7 border-2 rounded-xl border-orange-600">
            <h1 className="text-3xl">Name : {name}</h1>
            <h1 className="text-2xl">Phone : {phone}</h1>
            <h1 className="text-xl flex-grow">Email : {email}</h1>
            <Link className='btn' to={`/users/${id}`}>show details</Link>
            <button onClick={seeMoreHandler} className='btn mt-3'>See More</button>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}
export default User;