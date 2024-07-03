package com.People.Weave.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name="prd_pref")
public class ProdPref {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long prefId;
    private Long customerId;
    private String productId;
    private String productName;
    private boolean thumbsUp;

}
