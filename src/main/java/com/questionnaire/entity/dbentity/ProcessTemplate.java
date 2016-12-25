package com.questionnaire.entity.dbentity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

/**
 * @author Igor_Strakhov
 */
public class ProcessTemplate {

    @Id
    private String id;
    private String name;
    @DBRef
    private List<TemplateStep> steps;
    @DBRef
    private User startedUser;
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

    public List<TemplateStep> getSteps() {
        return steps;
    }

    public void setSteps(List<TemplateStep> steps) {
        this.steps = steps;
    }

    public User getStartedUser() {
        return startedUser;
    }

    public void setStartedUser(User startedUser) {
        this.startedUser = startedUser;
    }
}
