package com.People.Weave.controller;

import com.People.Weave.entity.Customer;
import com.People.Weave.service.CustomerService;
import jakarta.persistence.NoResultException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // Save operation
    @PostMapping("/customer")
    public Customer saveCustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    // Read operation
    @GetMapping("/customers/{emailid}")
    public List<Customer> fetchCustomerList(@PathVariable("emailid") String emailid) {
        return customerService.fetchCustomerListByEmailId(emailid);
    }

    // Update operation
    @PutMapping("/customers/{emailid}")
    public Customer
    updateItem(@RequestBody Customer customer,
               @PathVariable("emailid") String emailId) {
        List<Customer> customerList =customerService.fetchCustomerListByEmailId(emailId);
        Customer customerExist = customerList.size()>0? customerList.get(0):null;

        if (customerExist !=null && customerExist.getCustomerEmail().equals(emailId)) {
            return customerService.updateCustomer(
                    customer, customerExist.getCustomerId());
        }
        else {
            throw new NoResultException();
        }
    }
}
