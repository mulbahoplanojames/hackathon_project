"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const AddTask = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  // Fetch tasks from local storage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  // Add a task to the list and store it in local storage
  const addTask = () => {
    if (newTask.trim() === "") return;
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask("");
  };

  // Delete a task from the list and update local storage
  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <Card className="w-full pt-4 col-span-2">
      <CardContent>
        <h1 className="pb-4 text-lg">Teacher Tasks</h1>
        <div className="flex items-center justify-between mb-4">
          <Input
            type="text"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={addTask} className="ml-2">
            Add
          </Button>
        </div>
        <RadioGroup className="space-y-3">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <RadioGroupItem id={`task-${index}`} value={""} />
                <label htmlFor={`task-${index}`} className="text-gray-700">
                  {task}
                </label>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => deleteTask(index)}
              >
                Delete
              </Button>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default AddTask;
