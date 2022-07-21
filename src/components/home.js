import HighlightCard from "./HighlightCard";
import HeaderFooter from "./HeaderFooter";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";
import { useContext } from "react";
import styled from "styled-components";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}Mode`}>
      <HeaderFooter>
        <HighlightCard />
      </HeaderFooter>
    </div>
  )
};