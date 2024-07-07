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
                prodPref.getId())) {
            prodPrefDB.setId(
                    prodPref.getId());
        }
        if (Objects.nonNull(prodPref.getTitle())
                && !"".equalsIgnoreCase(
                prodPref.getTitle())) {
            prodPrefDB.setTitle(
                    prodPref.getTitle());
        }
        if (Objects.nonNull(prodPref.getStatus())
                && !"".equalsIgnoreCase(
                prodPref.getStatus())) {
            prodPrefDB.setStatus(
                    prodPref.getStatus());
        }

        return prodPrefRepository.save(prodPrefDB);
    }
}
