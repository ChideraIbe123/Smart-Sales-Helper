package com.People.Weave.service;

import com.People.Weave.entity.ProdPref;
import com.People.Weave.repository.ProdPrefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class ProdPrefImpl implements ProdPrefService{
    @Autowired
    private ProdPrefRepository prodPrefRepository;

    // Update operation
    @Override
    public ProdPref saveProdPref(ProdPref prodPref)
    {
        return prodPrefRepository.save(prodPref);
    }
    @Override
    public ProdPref updateProdPref(ProdPref prodPref, Long prefId)
    {
        ProdPref prodPrefDB
                = prodPrefRepository.findById(prefId)
                .get();

        if (Objects.nonNull(
                prodPref.getProductId())
                && !"".equalsIgnoreCase(
                prodPref.getProductId())) {
            prodPrefDB.setProductId(
                    prodPref.getProductId());
        }
        if (Objects.nonNull(prodPref.getProductName())
                && !"".equalsIgnoreCase(
                prodPref.getProductName())) {
            prodPrefDB.setProductName(
                    prodPref.getProductName());
        }
        if (Objects.nonNull(prodPref.isThumbsUp())
                && !prodPref.isThumbsUp()) {
            prodPrefDB.setThumbsUp(
                    prodPref.isThumbsUp());
        }

        return prodPrefRepository.save(prodPrefDB);
    }
}
