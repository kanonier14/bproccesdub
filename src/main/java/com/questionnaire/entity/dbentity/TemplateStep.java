package com.questionnaire.entity.dbentity;

import com.questionnaire.core.StepType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * @author Igor_Strakhov
 */
public class TemplateStep {

    @Id
    private String id;
    private String name;
    private StepType type;
    @DBRef
    private ProcessTemplate template;
    @DBRef
    private TemplateStep previousStep;
    @DBRef
    private TemplateStep nextStep;


}
