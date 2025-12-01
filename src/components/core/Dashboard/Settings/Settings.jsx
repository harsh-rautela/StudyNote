import ChangeProfilePicture from "./ChangeProfilePicture";
import DeleteAccount from "./DeleteAccount";
import EditProfile from "./EditProfile";
import UpdatePassword from "./UpdatePassword";

function Settings(){
    return (
        <>
            <h1 className="mb-14 text-3xl font-medium text-[#BEC3FF]">Edit Profile</h1>
            <ChangeProfilePicture></ChangeProfilePicture>
            <EditProfile></EditProfile>
            <UpdatePassword></UpdatePassword>
            <DeleteAccount></DeleteAccount>
        </>
    )
}
export default Settings
