import { Fade, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ProductTitle = ({
  title,
  brand,
  paddingTop = 6,
  text = "base",
  font = "normal",
  underline = "no-underline",
}) => {
  return (
    <Tooltip
      title={title}
      placement="bottom"
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      <span
        className={`pt-${paddingTop} line-clamp-1 font-${font} text-${text} text-center ${underline} capitalize hover:underline`}
      >
        {title}
        <small> ({brand})</small>
      </span>
      </Tooltip>
  );
};

ProductTitle.propTypes = {
  title: PropTypes.string,
  brand: PropTypes.string,
  paddingTop: PropTypes.number,
  text: PropTypes.string,
  font: PropTypes.string,
  underline: PropTypes.string,
}

export default ProductTitle;
