package com.questionnaire.entity.dbentity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * Created by Igor on 27.12.2016.
 */
public class UsloviePerehoda {

    @Id
    private String id;
    @DBRef
    private TemplateStep currentStep;
    @DBRef
    private TemplateStep nextStep;
    private String title;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public TemplateStep getCurrentStep() {
        return currentStep;
    }

    public void setCurrentStep(TemplateStep currentStep) {
        this.currentStep = currentStep;
    }

    public TemplateStep getNextStep() {
        return nextStep;
    }

    public void setNextStep(TemplateStep nextStep) {
        this.nextStep = nextStep;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
