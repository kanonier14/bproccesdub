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

    public String getIdInstance() {
        return idInstance;
    }

    public void setIdInstance(String idInstance) {
        this.idInstance = idInstance;
    }

    public ProcessTemplate getTemplate() {
        return template;
    }

    public void setTemplate(ProcessTemplate template) {
        this.template = template;
    }

    public List<StepInstance> getSteps() {
        return steps;
    }

    public void setSteps(List<StepInstance> steps) {
        this.steps = steps;
    }
}
