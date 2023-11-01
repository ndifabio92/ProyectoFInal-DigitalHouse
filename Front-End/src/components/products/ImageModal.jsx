import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';



const ImageModal = ({ images }) => {
 
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
          <Box
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}

          >
            <ImageList variant="masonry" cols={3} gap={8} >
              {
                images?.map((image) => (
                  <ImageListItem key={image.id}>
                    <img
                      src={image.url}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))
              }
            </ImageList>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageModal