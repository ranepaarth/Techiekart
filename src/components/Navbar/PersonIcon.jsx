import { useAuth0 } from "@auth0/auth0-react";
import { Fade, Tooltip } from "@mui/material";
import React from "react";
import { BsFillPersonCheckFill, BsFillPersonPlusFill } from "react-icons/bs";
const PersonIcon = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <Tooltip
      title={`${isAuthenticated ? "Logout" : "Login"}`}
      placement="bottom"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <span className="">
        {isAuthenticated ? (
          <BsFillPersonCheckFill
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="text-green-600"
          />
        ) : (
          <BsFillPersonPlusFill
            onClick={() => loginWithRedirect()}
            className="text-red-600"
          />
        )}
      </span>
    </Tooltip>
  );
};

export default PersonIcon;
