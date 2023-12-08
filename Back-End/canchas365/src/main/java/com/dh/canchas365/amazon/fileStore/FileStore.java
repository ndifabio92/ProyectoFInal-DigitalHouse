package com.dh.canchas365.amazon.fileStore;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Optional;

@Service
public class FileStore {

    @Autowired
    private AmazonS3 s3;

    public void saveImage(String path,
                          String fileName,
                          Optional<Map<String, String>> optionalMetadata,
                          InputStream inputStream){

        ObjectMetadata metadata = new ObjectMetadata();
        optionalMetadata.ifPresent(map -> {
            if(!map.isEmpty()){
                map.forEach(metadata::addUserMetadata);
            }
        });
        try{
            s3.putObject(path, fileName, inputStream, metadata);
        }
        catch (AmazonS3Exception e){
            throw new IllegalStateException("Fallo en guardar la imagen en S3", e);
        }
    }

    public byte[] dowload(String path, String key) {
        try{
            S3Object object = s3.getObject(path, key);
            return IOUtils.toByteArray(object.getObjectContent());

        } catch (AmazonS3Exception | IOException e){
            throw new IllegalStateException("Fallo en descargar la imagen en S3", e);
        }
    }
}
