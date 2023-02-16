package com.nuarch_challenge.todo.service;

import com.nuarch_challenge.todo.model.Task;
import com.nuarch_challenge.todo.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepo taskRepo;

    public void createTask(Task task) {
        taskRepo.save(task);
    }

    public Task getTask(int id) {
        return taskRepo.findById(id).get();
    }

    public List<Task> getAllTasks() {
        return taskRepo.findAll();
    }

    public void updateDescription(int id, String description) {
        Task task = taskRepo.findById(id).get();
        task.setDescription(description);
        taskRepo.save(task);
    }

    public void updateCompleted(int id, boolean completed) {
        Task task = taskRepo.findById(id).get();
        task.setCompleted(completed);
        taskRepo.save(task);
    }

    public void deleteTask(int id) {
        taskRepo.deleteById(id);
    }
}
