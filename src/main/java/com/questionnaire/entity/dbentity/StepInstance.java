package com.questionnaire.entity.dbentity;

import com.questionnaire.core.StepState;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * @author Igor_Strakhov
 */
public class StepInstance {

    @Id
    private String idStepInstance;
    private StepState stepState;
    @DBRef
    private ProcessInstance processInstance;
    @DBRef
    private TemplateStep templateStep;
    @DBRef
    private UserGroup userGroup;
    private String timeStart;

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public UserGroup getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(UserGroup userGroup) {
        this.userGroup = userGroup;
    }

    public TemplateStep getTemplateStep() {
        return templateStep;
    }

    public void setTemplateStep(TemplateStep templateStep) {
        this.templateStep = templateStep;
    }

    public String getIdStepInstance() {
        return idStepInstance;
    }

    public void setIdStepInstance(String idStepInstance) {
        this.idStepInstance = idStepInstance;
    }

    public StepState getStepState() {
        return stepState;
    }

    public void setStepState(StepState stepState) {
        this.stepState = stepState;
    }

    public ProcessInstance getProcessInstance() {
        return processInstance;
    }

    public void setProcessInstance(ProcessInstance processInstance) {
        this.processInstance = processInstance;
    }
}
