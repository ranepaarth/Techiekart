import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { BiDetail } from "react-icons/bi";
import { useProductContext } from "../../context/ProductContext";

const DetailsIcon = ({ currElem }) => {
  const { openProductModal, getProductDetails } = useProductContext();
  return (
    <>
      <Tooltip
        title="View Details"
        placement="bottom"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
      >
        <span
          className="hover:bg-yellow-200 p-2 rounded-full hover:text-yellow-700"
          onClick={() => {
            openProductModal();
            getProductDetails(currElem);
          }}
        >
          <BiDetail />
        </span>
      </Tooltip>
    </>
  );
};

export default DetailsIcon;
