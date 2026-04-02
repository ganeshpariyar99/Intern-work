import { useAuth } from "./context/AuthContext";

const ProfilePage = () => {
    const { user } = useAuth();

    return (
        <>
        <h1>Welcome, {user?.name}!</h1>
        <h3>role: {user?.role}</h3>
        <h3>phone: {user?.phone}</h3>
        <h3>weight: {user?.weight}</h3>
        </>
        
    );

};

export default ProfilePage;