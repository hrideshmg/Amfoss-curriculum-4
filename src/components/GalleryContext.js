import { createContext, useContext, useReducer } from "react";

const GalleryContext = createContext();

const galleryReducer = (state, action) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return { images: [...state.images, action.payload] };
    default:
      return state;
  }
};

const GalleryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(galleryReducer, { images: [] });

  return (
    <GalleryContext.Provider value={{ state, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
};

const useGalleryContext = () => {
  return useContext(GalleryContext);
};

export { GalleryProvider, useGalleryContext };
