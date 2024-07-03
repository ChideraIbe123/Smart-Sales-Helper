package com.People.Weave.repository;

import com.People.Weave.entity.ProdPref;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdPrefRepository  extends JpaRepository<ProdPref, Long> {


}
