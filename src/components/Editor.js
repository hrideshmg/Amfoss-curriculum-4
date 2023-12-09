import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../../node_modules/@fontsource/roboto/300.css";
const FilterButton = styled(Button)({
  backgroundColor: "#5C8374",
  caretColor: "transparent",
  ":hover": { backgroundColor: "#93B1A6", caretColor: "transparent" },
});

const Editor = () => {
  console.log(__dirname);
  const location = useLocation();
  const image = location.state.image;
  const image_url = URL.createObjectURL(image);
  return (
    <div>
      <div className="editor_container">
        <img className="image" src={image_url}></img>
        <div className="filter_container">
          <Typography
            color="white"
            variant="h4"
            sx={{ caretColor: "transparent" }}
          >
            Filters:
          </Typography>
          <FilterButton variant="contained">Grayscale</FilterButton>
          <FilterButton variant="contained"></FilterButton>
          <FilterButton variant="contained"></FilterButton>
        </div>
      </div>
    </div>
  );
};

export default Editor;
