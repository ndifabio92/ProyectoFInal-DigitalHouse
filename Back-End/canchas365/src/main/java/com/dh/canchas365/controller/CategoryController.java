package com.dh.canchas365.controller;

import com.dh.canchas365.exceptions.CustomFieldException;
import com.dh.canchas365.exceptions.ResourceNotFoundException;
import com.dh.canchas365.model.Category;
import com.dh.canchas365.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController extends CustomFieldException {

    @Autowired
    private CategoryService service;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Category category, BindingResult bindingResult){
        try{
            if(bindingResult.hasErrors()) {
                return validate(bindingResult);
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(service.create(category));
        } catch (Exception ex) {
            return customResponseError(ex);
        }
    }

    @GetMapping
    public List<Category> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") Long id){
        try {
            Optional<Category> optional = service.findById(id);
            if(optional.isPresent()){
                return ResponseEntity.ok(optional.get());
            }else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El id ingresa no existe");
            }
        } catch (Exception ex) {
            return customResponseError(ex);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Category category, @PathVariable Long id, BindingResult bindingResult){
        try {
            if(bindingResult.hasErrors()) {
                return validate(bindingResult);
            }
            Optional<Category> optional = service.findById(id);
            if(optional.isPresent()) {
                return ResponseEntity.status(HttpStatus.OK).body(service.update(category,id));
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El id ingresa no existe");
            }
        }
        catch (Exception ex) {
            return customResponseError(ex);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            Optional<Category> optional = service.findById(id);
            if(optional.isPresent()) {
                service.delete(id);
                return ResponseEntity.status(HttpStatus.OK).body("Categoria Eliminada exitosamente");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El id ingresa no existe");
            }
        } catch (Exception ex) {
            return customResponseError(ex);
        }
    }
}
