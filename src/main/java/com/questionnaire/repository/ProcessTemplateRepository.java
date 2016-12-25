package com.questionnaire.repository;

import com.questionnaire.entity.dbentity.ProcessTemplate;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by Igor on 25.12.2016.
 */
public interface ProcessTemplateRepository extends MongoRepository<ProcessTemplate, String> {

    ProcessTemplate findById(String id);
}
