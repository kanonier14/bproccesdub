package com.questionnaire.repository;

import com.questionnaire.entity.dbentity.UsloviePerehoda;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by Igor on 27.12.2016.
 */
public interface UsloviePerehodaRepository extends MongoRepository<UsloviePerehoda, String> {
    UsloviePerehoda findById(String id);
}
