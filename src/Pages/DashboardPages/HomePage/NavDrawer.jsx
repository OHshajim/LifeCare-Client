
import {
    Typography,
    List,
    ListItem,
    ListItemSuffix,
    Chip,
    Alert,
    Drawer,
    Card,
} from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
const NavDrawer = ({ isDrawerOpen, closeDrawer }) => {
    const { user, Logout } = useAuth()
    const handleLogout = () => {
        Swal.fire({
            title: "Log out now?",
            text: " Are you sure you want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                Logout();
                // sweetAlert
                Swal.fire({
                    title: "Successfully Logout",
                    text: "You are now logged out. Stay healthy!",
                    icon: "success",
                });
            }
        })
    }
    return (
        <div>
            <div className="hidden lg:flex">
                <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                    <Card
                        color="transparent"
                        shadow={false}
                        className="h-[calc(100vh-2rem)] w-full p-4"
                    >
                        <div className="mb-2 flex items-center gap-4 p-4">
                            <img src="https://i.ibb.co/H2J9x6Z/Screenshot-2024-06-02-202738.png" alt="" className="w-14" />
                            < h3 className="text-xl ">
                                <span className="text-2xl text-[#81C9E9] font-bold">L</span>ife<span className="text-2xl text-[#81C9E9] font-bold">C</span>are
                            </h3>
                        </div>

                        <List>
                            <hr className="my-2 border-blue-gray-50" />
                            <ListItem>

                                Inbox
                                <ListItemSuffix>
                                    <Chip
                                        value="14"
                                        size="sm"
                                        variant="ghost"
                                        color="blue-gray"
                                        className="rounded-full"
                                    />
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem>
                                Profile
                            </ListItem>
                            <ListItem>
                                Settings
                            </ListItem>
                            <ListItem>
                                Log Out
                            </ListItem>
                        </List>
                        {/* <Alert
                            open={openAlert}
                            className="mt-auto"
                            onClose={() => setOpenAlert(false)}
                        > */}
                            <Typography variant="h6" className="mb-1">
                                Upgrade to PRO
                            </Typography>
                            <Typography variant="small" className="font-normal opacity-80">
                                Upgrade to Material Tailwind PRO and get even more components,
                                plugins, advanced features and premium.
                            </Typography>
                            <div className="mt-4 flex gap-3">
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    className="font-medium opacity-80"
                                    // onClick={() => setOpenAlert(false)}
                                >
                                    Dismiss
                                </Typography>
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    className="font-medium"
                                >
                                    Upgrade Now
                                </Typography>
                            </div>
                        {/* </Alert> */}
                    </Card>
                </Drawer>
            </div>
        </div>
    );
};

export default NavDrawer;