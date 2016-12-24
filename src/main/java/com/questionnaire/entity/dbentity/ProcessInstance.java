package com.questionnaire.entity.dbentity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

/**
 * @author Igor_Strakhov
 */
public class ProcessInstance {

    @Id
    private String idInstance;
    @DBRef
    private ProcessTemplate template;
    @DBRef
    private List<StepInstance> steps;
}
