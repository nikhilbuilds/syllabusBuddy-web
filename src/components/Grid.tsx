import { Grid as MuiGrid, GridProps } from "@mui/material";
import { forwardRef } from "react";

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  return <MuiGrid ref={ref} {...props} />;
});

Grid.displayName = "Grid";
