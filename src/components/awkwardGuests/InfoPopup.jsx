import InfoIcon from "@mui/icons-material/Info";
import { IconButton, Popover, Typography } from "@mui/material";
import { useState, useRef } from "react";

const InfoPopup = ({ className, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef();

  return (
    <div ref={anchorRef} className={className}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <InfoIcon />
      </IconButton>
      <Popover
        open={isOpen}
        anchorEl={anchorRef.current}
        onClose={() => setIsOpen(!isOpen)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }} style={{ whiteSpace: 'pre-line' }}>{info}</Typography>
      </Popover>
    </div>
  );
};

export default InfoPopup;
