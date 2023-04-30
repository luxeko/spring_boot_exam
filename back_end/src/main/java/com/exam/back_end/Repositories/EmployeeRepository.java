package com.exam.back_end.Repositories;

import com.exam.back_end.entities.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
    @Query("SELECT e from employees e where concat(e.id, e.name, e.createdAt, e.wage) like %?1%")
    public List<EmployeeEntity> findByQuery(String keyword);
}
