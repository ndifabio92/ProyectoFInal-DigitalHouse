import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';






const ImageModal = ({ images }) => {
  // const images = ["../futbol1.png", "../futbol2.png", "../futbol3.png", "../futbol4.png", "../futbol5.png", "../tenis4.png", "../tenis1.png", "../tenis2.png", "../tenis3.png", "../tenis4.png", "../padel1.jpg", "../padel2.jpg", "../padel3.jpg", "../padel4.jpg", "../padel5.jpg", "../nat1.png", "../nat2.png", "../nat4.jpg", "../nat5.jpg", "../nata3.jpg"
  // ]

  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>

      <Box sx={{
        textAlign: 'left',
        margin: '10px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <Button
          variant="contained"
          sx={{
            padding: '10px',
          }}
          onClick={handleOpen}
        >
          Ver Mas
        </Button>
      </Box>


      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{ margin: '50px' }}
        fullScreen={true}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers={scroll === 'paper'} sx={{ padding: '30px' }}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}

          >
            <ImageList variant="masonry" cols={3} gap={8} >
              {
                images?.map((image, imageIndex) => (
                  <ImageListItem key={imageIndex}>
                    <img
                      src={image}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))
              }
            </ImageList>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageModal




/*

return (
    <>

    <Box sx={{
        textAlign:'left',
        margin: '10px',
        display:'flex',
        justifyContent:'flex-end'
      }}>
      <Button 
      variant="contained"
      sx={{
        padding: '10px',
      }}
      onClick={handleOpen}
    >
      Ver Mas
    </Button>
    </Box>
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.map((image, imageIndex) => (
              <ImageListItem key={imageIndex}>
                <img
                  src={image}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Modal>
    </div>
    </>
  );
}
*/