package com.questionnaire.services.impl;

import com.questionnaire.services.SessionCache;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Igor on 06.12.2016.
 */
@Service
public class SessionCacheImpl<T> implements SessionCache<T> {

    @Override
    public void put(HttpServletRequest request, T t) {
        request.getSession().setAttribute(t.getClass().getName(), t);
    }

    @Override
    public T get(HttpServletRequest request, Class<T> clazz) {
        return (T) request.getSession().getAttribute(clazz.getName());
    }

    @Override
    public void drop(HttpServletRequest request, Class<T> clazz) {
        request.getSession().removeAttribute(clazz.getName());
    }
}
