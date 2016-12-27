package com.questionnaire.controllers;

import com.questionnaire.entity.dbentity.User;
import com.questionnaire.entity.dbentity.UserGroup;
import com.questionnaire.repository.UserGroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Igor on 27.12.2016.
 */
@org.springframework.web.bind.annotation.RestController
public class RestController {

    @Autowired
    private UserGroupRepository userGroupRepository;

    @RequestMapping("/usersgroup/get")
    public List<UserGroup> getUserGroups() {
        initUserGroup();
        return userGroupRepository.findAll();
    }

    private void initUserGroup() {
        if(userGroupRepository.findAll().isEmpty()) {
            UserGroup engineers = new UserGroup();
            engineers.setGroupName("Инженеры");
            userGroupRepository.save(engineers);
            UserGroup constructors = new UserGroup();
            constructors.setGroupName("Конструкторы");
            userGroupRepository.save(constructors);
            UserGroup technicians = new UserGroup();
            technicians.setGroupName("Технологи");
            userGroupRepository.save(technicians);
            UserGroup marketings = new UserGroup();
            marketings.setGroupName("Экономисты");
            userGroupRepository.save(marketings);
            UserGroup director = new UserGroup();
            director.setGroupName("Менеджеры");
            userGroupRepository.save(director);
        }
    }
}
