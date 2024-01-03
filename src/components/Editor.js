import React, { useRef } from "react";
import { useGalleryContext } from "./GalleryContext";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import domtoimage from "dom-to-image";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "../../node_modules/@fontsource/roboto/300.css";

const ActionButton = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        backgroundColor: "#183D3D",
        caretColor: "transparent",
        ":hover": { backgroundColor: "#93B1A6", caretColor: "transparent" },
      }}
      size="large"
      variant="contained"
      component="label"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const FilterButton = styled(Button)({
  backgroundColor: "#5C8374",
  caretColor: "transparent",
  ":hover": { backgroundColor: "#93B1A6", caretColor: "transparent" },
});

const Editor = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(null);
  const location = useLocation();
  const image_file = location.state.image;
  const image_url = URL.createObjectURL(image_file);
  const imgResult = useRef(null);
  const { state, dispatch } = useGalleryContext();

  function backClick() {
    navigate("/");
  }

  function downloadImage() {
    domtoimage.toBlob(imgResult.current).then(function (blob) {
      saveAs(blob, "image.png");
    });
  }

  function addToGallery() {
    domtoimage.toBlob(imgResult.current).then(function (blob) {
      dispatch({ type: "ADD_IMAGE", payload: blob });
    });
  }

  return (
    <div>
      <div className="editor_container">
        <img
          className="image"
          src={image_url}
          style={{ filter: filter }}
          ref={imgResult}
        ></img>
        <div className="filter_container">
          <Typography
            color="white"
            variant="h4"
            sx={{ caretColor: "transparent" }}
          >
            Filters:
          </Typography>
          <FilterButton
            variant="contained"
            onClick={() => setFilter("grayscale(100%)")}
          >
            Grayscale
          </FilterButton>
          <FilterButton
            variant="contained"
            onClick={() => setFilter("invert(100%)")}
          >
            Invert
          </FilterButton>
          <FilterButton
            variant="contained"
            onClick={() =>
              setFilter(
                "contrast(250%) brightness(120%) saturate(200%) grayscale(10%)",
              )
            }
          >
            Deepfry
          </FilterButton>
          <FilterButton
            variant="contained"
            onClick={() => setFilter("contrast(150%)")}
          >
            Boost Contrast
          </FilterButton>
          <FilterButton
            variant="contained"
            onClick={() => setFilter("sepia(80%)")}
          >
            Sepia
          </FilterButton>
          <FilterButton
            variant="contained"
            onClick={() => setFilter("brightness(150%)")}
          >
            Brighten
          </FilterButton>
          <FilterButton
            variant="contained"
            onClick={() => setFilter("blur(5px)")}
          >
            Blur
          </FilterButton>
        </div>
        <div className="action_container">
          <Typography
            color="white"
            variant="h4"
            sx={{ caretColor: "transparent" }}
          >
            Actions:{" "}
          </Typography>
          <ActionButton onClick={addToGallery}>Add To Gallery</ActionButton>
          <ActionButton onClick={downloadImage}>Download Image</ActionButton>
        </div>
      </div>
      <div className="nav_container">
        <ActionButton onClick={backClick}>Back</ActionButton>
      </div>
    </div>
  );
};

export default Editor;
