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
    private Integer order;

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public StepType getType() {
        return type;
    }

    public void setType(StepType type) {
        this.type = type;
    }

    public ProcessTemplate getTemplate() {
        return template;
    }

    public void setTemplate(ProcessTemplate template) {
        this.template = template;
    }

    public TemplateStep getPreviousStep() {
        return previousStep;
    }

    public void setPreviousStep(TemplateStep previousStep) {
        this.previousStep = previousStep;
    }

    public TemplateStep getNextStep() {
        return nextStep;
    }

    public void setNextStep(TemplateStep nextStep) {
        this.nextStep = nextStep;
    }
}
