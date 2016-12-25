package com.questionnaire.repository;

import com.questionnaire.entity.dbentity.StepInstance;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by Igor on 25.12.2016.
 */
public interface StepInstanceRepository extends MongoRepository<StepInstance, String> {
}
