import "../App.css";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useNavigate } from "react-router-dom";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const MainMenuButton = ({ children, onClick }) => {
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

const MainMenu = () => {
  const navigate = useNavigate();

  function image_upload(image) {
    navigate("/edit", { state: { image: image } });
  }

  return (
    <div className="main_container">
      <Typography sx={{ caretColor: "transparent" }} color="white" variant="h3">
        Welcome to image viewer!
      </Typography>
      <div className="menu_container">
        <MainMenuButton startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => image_upload(event.target.files[0])}
          />
        </MainMenuButton>
        <MainMenuButton>Open the gallery</MainMenuButton>
        <MainMenuButton>Quit App</MainMenuButton>
      </div>
    </div>
  );
};

export default MainMenu;
