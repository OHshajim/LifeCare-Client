import PropTypes from 'prop-types';
import {
    List,
    ListItem,
    Drawer,
    Card,
} from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';
import useOrganizer from '../../../Hooks/useOrganizer';

const NavDrawer = ({ isDrawerOpen, closeDrawer }) => {
    const [isOrganizer] = useOrganizer();
    return (
        <div>
            <div className="">
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
                            {
                                isOrganizer ?

                                    <>
                                        <NavLink to={'/dashboard/profile'} >
                                            <ListItem onClick={() => closeDrawer()}>
                                                Profile
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to={'/dashboard/addCamp'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                add Camp
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to={'/dashboard/manageCamp'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                Manage Camp
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to={'/dashboard/manageRegisters'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                Manage Registered Camps
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to={'/dashboard/userManagement'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                Participant Management
                                            </ListItem>
                                        </NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink to={'/dashboard/analytics'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                Analytics
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to={'/dashboard/profile'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                Profile
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to={'/dashboard/registeredCamps'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                Registered Camps
                                            </ListItem>
                                        </NavLink>
                                        <NavLink to={'/dashboard/paymentHistory'}>
                                            <ListItem onClick={() => closeDrawer()}>
                                                Payment History
                                            </ListItem>
                                        </NavLink>
                                    </>

                            }
                            <hr className="my-2 border-blue-gray-50" />
                            <NavLink to={'/'}>
                                <ListItem onClick={() => closeDrawer()}>
                                    home
                                </ListItem>
                            </NavLink>
                            <NavLink to={'/'}>
                                <ListItem onClick={() => closeDrawer()}>
                                    Available Camps
                                </ListItem>
                            </NavLink>
                        </List>
                    </Card>
                </Drawer>
            </div>
        </div>
    );
};

export default NavDrawer;

NavDrawer.propTypes = {
    isDrawerOpen: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired
};
