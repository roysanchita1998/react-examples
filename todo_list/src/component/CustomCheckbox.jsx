import { Box, Checkbox } from "@mui/material";
import React, { useRef } from "react";

function CustomCheckbox({ defaultValue,callback }) {
  const checkRef = useRef(null);
  const handleCheckbox = (e) => {
    callback(defaultValue,checkRef?.current.checked)
  };
  return (
    <Box>
      <Checkbox
        sx={{ margin: 0, padding: 0 }}
        inputRef={checkRef}
        onChange={handleCheckbox}
        defaultChecked={defaultValue.complete}
      />
    </Box>
  );
}

export default CustomCheckbox;
