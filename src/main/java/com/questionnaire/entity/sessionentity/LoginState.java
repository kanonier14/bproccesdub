package com.questionnaire.entity.sessionentity;

import java.io.Serializable;

/**
 * Created by Igor on 06.12.2016.
 */
public class LoginState implements Serializable {

    private Integer vkId;
    private String accessToken;

    public Integer getVkId() {
        return vkId;
    }

    public void setVkId(Integer vkId) {
        this.vkId = vkId;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public LoginState() {

    }

    public LoginState(Integer vkId, String accessToken) {

        this.vkId = vkId;
        this.accessToken = accessToken;
    }
}
