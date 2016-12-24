package com.questionnaire.entity.dbentity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

/**
 * @author Igor_Strakhov
 */
public class UserGroup {

    @Id
    private String idUserGroup;
    private String groupName;

    @DBRef
    private List<User> users;
}
