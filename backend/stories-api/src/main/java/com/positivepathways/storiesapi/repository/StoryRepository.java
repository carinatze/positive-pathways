package com.positivepathways.storiesapi.repository;

import com.positivepathways.storiesapi.entity.Story;
import org.springframework.data.repository.CrudRepository;

public interface StoryRepository extends CrudRepository<Story, String> {

}
