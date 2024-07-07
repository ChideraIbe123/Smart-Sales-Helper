package com.People.Weave.service;

import com.People.Weave.entity.Customer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CustomerService {

   List<Customer> fetchCustomerListByEmailId(String emailid);

   Optional<Customer> findById(Long id);

   Customer saveCustomer(Customer customer);
   Customer updateCustomer(Customer customer, Long customerId);

}
