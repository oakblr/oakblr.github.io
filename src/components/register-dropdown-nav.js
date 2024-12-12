import * as React from "react"
import { Button, Menu, MenuItem, Box, Modal, Typography } from "@mui/material"
import siteData from "../site-data"


function RegisterDropdownNav() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
      
    
    return (
        <>
        <Button
        onClick={handleOpen}
        target="_blank"
        rel="noreferrer"
        disabled={siteData.registerButton.disabled}
        sx={{
          width: 150, // Change back to 150 later
          mx: 1,
          my: 2,
          textAlign: "center",
          display: "block",
        }}
        variant="contained"
      >
        {siteData.registerButton.text}
      </Button>

    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: "center"}}>
            Register for Oakridge Codefest!
        </Typography>
        <Typography id="modal-modal-internalPrice" sx={{ mt: 2, mb: 1, textAlign: "center" }}>
            Internal Registration: {siteData.registerButton.internalPrice}
        </Typography>
        <Typography id="modal-modal-externalPrice" sx={{ mt: 0, mb: 2, textAlign: "center" }}>
            External Registration: {siteData.registerButton.externalPrice}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2, textAlign: "center" }}>
            {siteData.registerButton.description}
        </Typography>

        <Box display="flex"
        justifyContent="center"
        alignItems="center">

            <Button
                href={siteData.registerButton.internalUrl}
                target="_blank"
                rel="noreferrer"
                sx={{
                width: 150,
                mx: 1,
                my: 1,
                textAlign: "center",
                display: "block",
                }}
                variant="contained">
                    Internal
            </Button>
            <Button
                href={siteData.registerButton.externalUrl}
                target="_blank"
                rel="noreferrer"
                sx={{
                width: 150,
                mx: 1,
                my: 1,
                textAlign: "center",
                display: "block",
                }}
                variant="contained">
                    External
            </Button>
            
        </Box>

        

        </Box>
    </Modal>
</>

      
    )
  }
  
  export default RegisterDropdownNav
  