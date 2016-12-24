package com.questionnaire.entity.dbentity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * @author Igor_Strakhov
 */
public class StepInstance {

    @Id
    private String idStepInstance;

}
