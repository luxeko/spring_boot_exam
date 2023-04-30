package com.exam.back_end.controllers;

import com.exam.back_end.Repositories.EmployeeRepository;
import com.exam.back_end.dto.ResponseDTO;
import com.exam.back_end.entities.EmployeeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping(path = "/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
    private ResponseDTO responseDTO;
    @GetMapping("")
    public ResponseEntity<?> index (@RequestParam(value = "keyword", required = false) String keyword) {
        List<EmployeeEntity> employeeEntityList = employeeRepository.findByQuery(keyword);
        if (employeeEntityList.size() == 0) {
            return ResponseEntity.noContent().build();
        }
        responseDTO = new ResponseDTO();
        responseDTO.setCode(200);
        responseDTO.setStatus("SUCCESS");
        responseDTO.setMessage("Find employees by " + keyword + " success");
        responseDTO.setData(employeeEntityList);
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable("id") long id) {
        Optional<EmployeeEntity> op = employeeRepository.findById(id);
        if (op.isPresent()) {
            responseDTO = new ResponseDTO();
            responseDTO.setCode(200);
            responseDTO.setStatus("SUCCESS");
            responseDTO.setMessage("find employee successfully");
            responseDTO.setData(op.get());
            return ResponseEntity.ok(responseDTO);
        }
        return ResponseEntity.noContent().build();
    }

    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody EmployeeEntity employee) {
        employeeRepository.save(employee);
        responseDTO = new ResponseDTO();
        responseDTO.setCode(200);
        responseDTO.setStatus("SUCCESS");
        responseDTO.setMessage("Create employee successfully");
        responseDTO.setData(employee);

        return ResponseEntity.ok(responseDTO);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") long id) {
        Optional<EmployeeEntity> op = employeeRepository.findById(id);
        if (op.isPresent()) {
            responseDTO = new ResponseDTO();
            employeeRepository.deleteById(id);
            responseDTO.setCode(200);
            responseDTO.setStatus("SUCCESS");
            responseDTO.setMessage("Delete employee successfully");
        }
        return ResponseEntity.noContent().build();
    }
}
