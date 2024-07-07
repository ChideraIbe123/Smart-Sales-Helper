package com.People.Weave.repository;

import com.People.Weave.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
    @Query(
            nativeQuery = true,
            value
                    = "SELECT c.customer_id, c.customer_first_name, c.customer_email, c.customer_last_name, c.customer_user_name FROM `customer-product`.customer c where c.customer_email=:emailId")
    List<Customer> fetchCustomerListByEmailId(@Param("emailId") String emailId);

    @Override
    Optional<Customer> findById(Long id);


}
