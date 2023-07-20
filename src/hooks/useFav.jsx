import { useContext } from "react";
import { FavContext } from "../context/favContext";

export const useFav = () => {
    const context = useContext(FavContext);
    return context;
  };