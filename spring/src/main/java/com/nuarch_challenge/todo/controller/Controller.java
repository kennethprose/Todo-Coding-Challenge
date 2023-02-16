package com.nuarch_challenge.todo.controller;

import com.nuarch_challenge.todo.model.Task;
import com.nuarch_challenge.todo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task")
public class Controller {

    @Autowired
    private TaskService taskService;

    @PostMapping("/create")
    public void createTask(@RequestBody Task task) {
        taskService.createTask(task);
    }

    @GetMapping("/getTask")
    public Task getTask(@RequestBody Task task) {
        return taskService.getTask(task.getId());
    }

    @GetMapping("/getAllTasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping("/updateTask")
    public void updateTask(@RequestBody Task task) {
        taskService.updateTask(task.getId(), task.getDescription());
    }

    @PostMapping("/updateCompleted")
    public void updateCompleted(@RequestBody Task task) {
        taskService.updateCompleted(task.getId(), task.isCompleted());
    }

    @PostMapping("/deleteTask")
    public void deleteTask(@RequestBody Task task) {
        taskService.deleteTask(task.getId());
    }

}
