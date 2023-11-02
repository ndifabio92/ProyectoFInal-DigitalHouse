package com.dh.canchas365.service;

import com.dh.canchas365.model.Category;
import com.dh.canchas365.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    
    @Autowired
    private CategoryRepository repository;

    public Category create(Category category){
        return repository.save(category);
    }

    public Category update(Category category, Long id){
        Optional<Category> optional = findById(id);
        if(optional.isEmpty()) {
            throw  new IllegalArgumentException("El id ingresado no existe");
        }
        Category categoryUpdate = optional.get();
        categoryUpdate.setTitle(category.getTitle());
        categoryUpdate.setDescription(category.getDescription());
        categoryUpdate.setUrl(category.getUrl());
        return repository.save(categoryUpdate);
    }

    public List<Category> getAll(){
        return repository.findAll();
    }

    public void delete(Long id){
        repository.deleteById(id);
    }

    public Optional<Category> findById(Long id){
        return repository.findById(id);
    }
}
