package com.questionnaire.services;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Igor on 06.12.2016.
 */
public interface SessionCache<T> {

    void put(HttpServletRequest request, T t);

    T get(HttpServletRequest request, Class<T> clazz);

    void drop(HttpServletRequest request, Class<T> clazz);
}
