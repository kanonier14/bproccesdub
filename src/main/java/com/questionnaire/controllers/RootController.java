package com.questionnaire.controllers;

import com.questionnaire.core.StepState;
import com.questionnaire.entity.dbentity.ProcessInstance;
import com.questionnaire.entity.dbentity.ProcessTemplate;
import com.questionnaire.entity.dbentity.StepInstance;
import com.questionnaire.entity.dbentity.TemplateStep;
import com.questionnaire.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * @author Igor_Strakhov
 */
@Controller
public class RootController {


    private final String STEP_TITLE_REGEXP = "step_([0-9]+)_title";
    private final Pattern questionPattern = Pattern.compile(STEP_TITLE_REGEXP);

    @Autowired
    private ProcessInstanceRepository processInstanceRepository;
    @Autowired
    private ProcessTemplateRepository processTemplateRepository;
    @Autowired
    private TemplateStepRepository templateStepRepository;
    @Autowired
    private UserGroupRepository userGroupRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private StepInstanceRepository stepInstanceRepository;

    @RequestMapping("/")
    public String getMainPage() {
        return "index";
    }

    @RequestMapping(value = "/template/create", method = RequestMethod.GET)
    public String getCreateTemplatePage() {
        return "create-template";
    }

    @RequestMapping(value = "/template/create", method = RequestMethod.POST)
    public void saveTemplate(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String processName = request.getParameter("process_name");
        ProcessTemplate processTemplate = new ProcessTemplate();
        processTemplate.setName(processName);

        List<TemplateStep> steps = request.getParameterMap().entrySet().stream()
                .filter(parameterEntry -> questionPattern.matcher(parameterEntry.getKey()).matches())
                .map(parameterEntry -> {
                    TemplateStep templateStep = new TemplateStep();
                    templateStep.setName(parameterEntry.getValue()[0]);
                    String orderParam = parameterEntry.getKey() + "_order";
                    templateStep.setOrder(Integer.valueOf(request.getParameter(orderParam)));
                    templateStepRepository.save(templateStep);
                    return templateStep;
                }).collect(Collectors.toList());
        processTemplate.setSteps(steps);
        processTemplateRepository.save(processTemplate);
        response.sendRedirect("/");
    }

    @RequestMapping("/process/available")
    public String getAvailableProcessPage(Model model) {
        List<ProcessTemplate> processTemplates = processTemplateRepository.findAll();
        model.addAttribute("processTemplates", processTemplates);
        return "available-process";
    }

    @RequestMapping("/process/inprocessing")
    public String getProcessingProcessesPage() {
        return "inprocessing";
    }

    @RequestMapping("/step/add")
    public String getCreateTemplatePageAfterAddedStep() {
        /*processing by add step*/
        return "create-template";
    }

    @RequestMapping("/process/start")
    public void startProcess(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        createProcessInstance(id);
        response.sendRedirect("/");
    }

    private void createProcessInstance(String id) {
        ProcessTemplate processTemplate = processTemplateRepository.findById(id);
        ProcessInstance instance = new ProcessInstance();
        instance.setTemplate(processTemplate);
        List<StepInstance> stepInstances = processTemplate.getSteps().stream()
                .map(step -> {
                    StepInstance stepInstance = new StepInstance();
                    stepInstance.setTemplateStep(step);
                    if(step.getOrder() == 0){
                        stepInstance.setStepState(StepState.ACTIVE);
                    } else {
                        stepInstance.setStepState(StepState.WAITED);
                    }
                    stepInstanceRepository.save(stepInstance);
                    return stepInstance;
                }).collect(Collectors.toList());
        instance.setSteps(stepInstances);
        processInstanceRepository.save(instance);
    }
}
