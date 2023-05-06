package com.positivepathways.storiesapi.service;

import com.positivepathways.storiesapi.dto.story.AddStoryRequestDto;
import com.positivepathways.storiesapi.entity.Story;
import com.positivepathways.storiesapi.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoryService {
    private StoryRepository storyRepo;

    @Autowired
    public StoryService(StoryRepository storyRepo) {
        this.storyRepo = storyRepo;
    }

    public void addStory(AddStoryRequestDto request) {
        Story newStory = new Story();
        newStory.setText(request.getText());
        storyRepo.save(newStory);
    }

    public Iterable<Story> getAllStories() {
        return storyRepo.findAll();
    }

}
