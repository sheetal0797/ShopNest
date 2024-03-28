import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/Account/Order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border ">
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            src={"https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600"}
                            alt=""
                        />
                        <div className="ml-5">
                            <p className="mb-2">title</p>
                            <p className="opacity-50 text-xs font-semibold space-x-5">
                                <span>Size: M</span>
                            </p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>₹200</p>
                </Grid>
                <Grid item xs={4}>
                    <p className="space-y-2 font-semibold">
                        {true ? (
                            <>
                                <AdjustIcon
                                    sx={{ width: "15px", height: "15px" }}
                                    className="text-green-600 p-0 mr-2 text-sm"
                                />
                                <span>Delivered On Mar 03</span>

                            </>
                        ) : <>

                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>Expected Delivery On Mar 03</span>
                        </>}

                    </p>
                    <p className="text-xs">Your Item Has Been Delivered</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;
