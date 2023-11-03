package com.dh.canchas365.service.images;

import com.dh.canchas365.dto.images.ImageDTO;
import com.dh.canchas365.model.images.Images;
import com.dh.canchas365.repository.images.ImagesRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImagesService {

    @Autowired
    private ImagesRepository imagesRepository;

    public List<ImageDTO> getImagesByClub(Long id){
        ModelMapper mapper = new ModelMapper();
        List<ImageDTO> imageDTOS = new ArrayList<>();
        for (Images im: imagesRepository.getImagesByClub(id)){
            imageDTOS.add(mapper.map(im, ImageDTO.class));
        }
        return imageDTOS;
    }

}
