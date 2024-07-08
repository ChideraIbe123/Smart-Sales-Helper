package com.People.Weave.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long customerId;
    private String customerEmail;
    private String customerFirstName;
    private String customerLastName;
    private String customerUserName;
    private String customerInterest;
    @OneToMany
    @JoinColumn(name ="customerId")
    private List<ProdPref> prodPrefList;
}
