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

    public String getIdUserGroup() {
        return idUserGroup;
    }

    public void setIdUserGroup(String idUserGroup) {
        this.idUserGroup = idUserGroup;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
