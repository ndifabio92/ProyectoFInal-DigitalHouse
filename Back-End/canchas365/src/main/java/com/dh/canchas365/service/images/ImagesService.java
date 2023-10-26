package com.dh.canchas365.service.images;

import com.dh.canchas365.dto.images.ImageDTO;
import com.dh.canchas365.model.Club;
import com.dh.canchas365.model.images.Images;
import com.dh.canchas365.repository.ClubRepository;
import com.dh.canchas365.repository.images.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagesService {

    @Autowired
    private ImagesRepository imagesRepository;

    @Autowired
    private ClubRepository clubRepository;

    public Images create(ImageDTO dto){
        Images image = new Images();
        image.setUrl(dto.getUrl());

        Optional<Club> optionalClub = clubRepository.findById(dto.getIdClub());
        if(optionalClub.isPresent()){
            image.setClub(optionalClub.get());
        }

        return imagesRepository.save(image);
    }

    public Images updateImage(Images images){
        return imagesRepository.save(images);
    }

    public List<Images> getAllImages(){
        return imagesRepository.findAll();
    }

    public void deleteImages(Long id){
        imagesRepository.deleteById(id);
    }

    public Images findById(Long id){
        Optional<Images> imageOptional = imagesRepository.findById(id);
        Images image = null;
        if(imageOptional.isPresent()){
            image = imageOptional.get();
        }
        return image;
    }

    public List<Images> getImagesByClub(Long idClub){

        return imagesRepository.getImagesByClub(idClub);
    }

}
