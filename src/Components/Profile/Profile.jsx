import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="profile-container">
                <p className="profile-name">Welcome, {user.name}</p>
            </div>
        )
    );
}

export default Profile;
