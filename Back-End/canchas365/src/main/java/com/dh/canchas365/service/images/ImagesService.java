package com.dh.canchas365.service.images;

import com.dh.canchas365.dto.images.ImageDto;
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

    public List<ImageDto> getImagesByClub(Long id){
        ModelMapper mapper = new ModelMapper();
        List<ImageDto> imageDtos = new ArrayList<>();
        for (Images im: imagesRepository.getImagesByClub(id)){
            imageDtos.add(mapper.map(im, ImageDto.class));
        }
        return imageDtos;
    }

}
