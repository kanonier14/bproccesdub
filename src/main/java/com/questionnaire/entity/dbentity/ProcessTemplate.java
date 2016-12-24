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
}
