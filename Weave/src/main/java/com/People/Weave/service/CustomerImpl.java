package com.People.Weave.service;

import com.People.Weave.entity.Customer;
import com.People.Weave.repository.CustomerRepository;
import com.People.Weave.repository.ProdPrefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CustomerImpl implements CustomerService{
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private ProdPrefRepository prodRepository;


    @Override
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }


    @Override public List<Customer> fetchCustomerListByEmailId(String emailId) {
        return  customerRepository.fetchCustomerListByEmailId(emailId);

    }
    @Override
    public Customer saveCustomer(Customer customer)
    {
        return customerRepository.save(customer);
    }
    @Override
    public Customer updateCustomer(Customer customer, Long customerId) {
        Customer currentDB = customerRepository.findById(customerId).get();

        currentDB.setCustomerEmail(currentDB.getCustomerEmail());
//        if (Objects.nonNull(customer.getCustomerFirstName())
//                && !"".equalsIgnoreCase(
//                customer.getCustomerFirstName())
//                && !currentDB.getCustomerFirstName().equalsIgnoreCase(
//                customer.getCustomerFirstName())) {
//            currentDB.setCustomerFirstName(
//                    customer.getCustomerFirstName());
//        }
//        if (Objects.nonNull(customer.getCustomerLastName())
//                && !"".equalsIgnoreCase(
//                customer.getCustomerLastName())
//                && !currentDB.getCustomerLastName().equalsIgnoreCase(
//                customer.getCustomerLastName())) {
//            currentDB.setCustomerLastName(
//                    customer.getCustomerLastName());
//        }

        if (Objects.nonNull(customer.getCustomerUserName())
                && !"".equalsIgnoreCase(
                customer.getCustomerUserName())
                && !customer.getCustomerUserName().equalsIgnoreCase(
                currentDB.getCustomerUserName())) {
            currentDB.setCustomerUserName(
                    customer.getCustomerUserName());
        }
        if (customer.getProdPrefList() !=null) {
            if (customer.getProdPrefList().size()> 0) {

                customer.getProdPrefList().stream().filter(prodPref ->
                        currentDB.getProdPrefList().stream().anyMatch(p -> prodPref.getPrefId().equals(p.getPrefId())));
                prodRepository.saveAllAndFlush(customer.getProdPrefList());
            } else {
                currentDB.setProdPrefList(customer.getProdPrefList());
            }
        }
        return customerRepository.save(currentDB);
    }
}
