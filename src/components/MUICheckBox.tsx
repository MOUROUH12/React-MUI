import { Stack,Typography,FormGroup,FormControlLabel,Checkbox  } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"
const MUICheckBox = () => {
  return (
    <div>
      <Typography variant="h3">CheckBoxes</Typography>
      <Stack spacing={2} direction="row">
          <Checkbox color="secondary"  aria-label="checkbox demo" defaultChecked />
          <Checkbox color="secondary"  aria-label="checkbox demo"/>
          <Checkbox color="secondary"  aria-label="checkbox demo" disabled/>
          <Checkbox color="secondary"  aria-label="checkbox demo" disabled checked/>
      </Stack>
      <Typography variant="h3">CheckBox labels</Typography>
      <Stack spacing={2} direction="row">
          <FormGroup>
            <FormControlLabel  control={<Checkbox  color="warning" defaultChecked/>} label="Label" />
            <FormControlLabel  control={<Checkbox  color="warning" disabled/>} label="Disabled" />
          </FormGroup>
      </Stack>
      <Typography variant="h3">CheckBox Icon</Typography>
      <Stack spacing={2} direction="row">
          <Checkbox  color="secondary"  aria-label="checkbox icon"  icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
      </Stack>
      <Typography variant="h3">Label placement</Typography>
          <Stack>
          <FormGroup row aria-label="label placement">
              <FormControlLabel control={<Checkbox/>} label='Top' labelPlacement="top" />
              <FormControlLabel control={<Checkbox/>} label='Start' labelPlacement="start" />
              <FormControlLabel control={<Checkbox/>} label='Bottom' labelPlacement="bottom" />
              <FormControlLabel control={<Checkbox/>} label='End' labelPlacement="end" />
          </FormGroup>
          </Stack>
    
    </div>
  )
}

export default MUICheckBox;
