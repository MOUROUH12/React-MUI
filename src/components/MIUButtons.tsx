import { Button,Typography } from "@mui/material"
import Stack from "@mui/material/Stack"
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import ButtonGroup from "@mui/material/ButtonGroup";
const MIUButtons = () => {
  return (
    <div>
    <Typography variant="h4">Buttons variants</Typography>
      <Stack direction='row' spacing={2}> 
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      </Stack>
      <br/>
      {/* Button colors */}
      <Typography variant="h4">Buttons colors</Typography>

      <Stack direction='row' spacing={2} > 
      <Button variant="contained" color='primary'>Primary</Button>
      <Button variant="contained" color='secondary'>Secondary</Button>
      <Button variant="contained" color='warning'>Warning</Button>
      <Button variant="contained" color='info'>Info</Button>
      <Button variant="contained" color='success'>Success</Button>
      <Button variant="contained" color='error'>Error</Button>
      </Stack>
      <Typography  variant="h4">Buttons sizes</Typography>

      <Stack direction='row' spacing={2}> 
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large">Large</Button>

      </Stack>
      <Typography  variant="h4">Buttons sizes</Typography>

      <Stack direction='row' spacing={2}> 
      <Button variant="contained" size="small">Small</Button>
      <Button variant="contained" size="medium">Medium</Button>
      <Button variant="contained" size="large" >Large</Button>

      </Stack>
     
      <Typography  variant="h4">Buttons (Link,disabled,disableRipple)</Typography>

      <Stack direction='row' spacing={2}> 
      <Button variant="contained" href="https://www.google.com" target="_blank" color="warning">Link</Button>
      <Button variant="contained" disabled >Disabled</Button>
      <Button variant="contained" disableRipple >disableRipple</Button>
      <Button variant="contained" disableElevation >disableElevation (shadows)</Button>  
      </Stack>
      
     
      <Typography  variant="h4">Buttons icons</Typography>

      <Stack direction='row' spacing={2}> 
      <Button variant="contained" endIcon={<SendIcon/>} >Send</Button>
      <Button variant="contained" startIcon={<SendIcon/>} >Send</Button>
      <IconButton color='info' aria-label="send a picture" component='label'><SendIcon/></IconButton>
      </Stack>
  
      <Typography  variant="h4">Upload Button</Typography>

      <Stack direction='row' spacing={2}> 
      <Button variant="contained" color='success' aria-label="send a picture" component='label' endIcon={<PhotoCamera />}>
        upload
        <input type="file" accept="image/*" hidden multiple />
      </Button>
      </Stack>

      <Typography  variant="h4">Button Group</Typography>

      <Stack direction='row' spacing={2}> 
          <ButtonGroup variant='contained' color="warning" aria-label="button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
      </Stack>
      <br />
      <Stack direction='row' spacing={2}> 
          <ButtonGroup color="secondary" aria-label="button group" orientation="vertical" size="large">
            <Button onClick={()=> alert('One is clicked')}>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
      </Stack>
  
    </div>
  )
}

export default MIUButtons
