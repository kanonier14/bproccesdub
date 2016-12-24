package com.questionnaire.entity.dbentity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

/**
 * @author Igor_Strakhov
 */
public class User {

    @Id
    private String idUser;
    private String userName;
    private String password;
    @DBRef
    private UserGroup group;
}
