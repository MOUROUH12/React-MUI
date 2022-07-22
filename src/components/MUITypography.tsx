import { Typography } from "@mui/material"

const MUITypography = () => {
  return (
    <div>
      {/* Heading */}
      <Typography variant='h1'>Heading h1</Typography>
      <Typography variant='h2'>Heading h2</Typography>
      <Typography variant='h3' component="h1" gutterBottom>Heading h3</Typography>
      <Typography variant='h4'>Heading h4</Typography>
      <Typography variant='h5'>Heading h4</Typography>
      <Typography variant='h6'>Heading h5</Typography>
    {/* Subtitles */}
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>
      {/* paragraph */}
      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur amet quae reprehenderit qui expedita exercitationem illo, deserunt esse. Est fuga, voluptas harum quas commodi culpa fugit nesciunt asperiores in.</Typography>
      <br />
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur amet quae reprehenderit qui expedita exercitationem illo, deserunt esse. Est fuga, voluptas harum quas commodi culpa fugit nesciunt asperiores in.</Typography>
   
    </div>
  )
}

export default MUITypography
