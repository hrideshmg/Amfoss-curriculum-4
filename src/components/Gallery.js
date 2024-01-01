import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGalleryContext } from "./GalleryContext";

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

const Gallery = () => {
  const { state, dispatch } = useGalleryContext();
  const navigate = useNavigate();
  console.log(state.images);

  function backClick() {
    navigate("/");
  }
  return (
    <div className="gallery_container">
      <div className="gallery_grid">
        {state.images.map((image) => {
          const imageUrl = URL.createObjectURL(image);
          return <img src={imageUrl} />;
        })}
      </div>
      <div className="nav_container">
        <ActionButton onClick={backClick}>Back</ActionButton>
      </div>
    </div>
  );
};

export default Gallery;
