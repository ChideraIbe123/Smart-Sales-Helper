package com.People.Weave.service;

import com.People.Weave.entity.ProdPref;
import org.springframework.stereotype.Service;

@Service
public interface ProdPrefService {
    ProdPref saveProdPref(ProdPref prodPref);

    ProdPref updateProdPref(ProdPref prodPref, Long perfId);

}
