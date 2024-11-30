import { useState } from "react";

const Profile = () => {
    // Ism va yoshni o'z ichiga olgan ob'ekt bilan Boshlangich Stete(holatni) qiymat berilgan
    const [profile, setProfile] = useState({
        name: "",
        age: "",
    });

    // Input Ichidagi malumot oladi va ozgartiradi
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>User Profile</h2>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={profile.age}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <h3>Profile Information</h3>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
        </div>
    );
};

export default Profile;