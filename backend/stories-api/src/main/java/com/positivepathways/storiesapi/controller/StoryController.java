package com.positivepathways.storiesapi.controller;

import com.positivepathways.storiesapi.dto.story.AddStoryRequestDto;
import com.positivepathways.storiesapi.dto.story.GetAllStoriesResponseDto;
import com.positivepathways.storiesapi.entity.Story;
import com.positivepathways.storiesapi.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/story")
public class StoryController {
    private StoryService storyService;

    @Autowired
    public StoryController(StoryService storyService) {
        this.storyService = storyService;
    }
    @PostMapping("/")
    public void story(@RequestBody AddStoryRequestDto request) {
        storyService.addStory(request);
    }

    @GetMapping("/")
    public List<GetAllStoriesResponseDto> story() {
        Iterable<Story> stories = storyService.getAllStories();
        List<GetAllStoriesResponseDto> response = new ArrayList<>();
        for (Story story: stories) {
            GetAllStoriesResponseDto responseStory = new GetAllStoriesResponseDto();
            responseStory.setStoryId(story.getStory_id());
            responseStory.setText(story.getText());
            response.add(responseStory);
        }
        return response;
    }

}
