package com.positivepathways.storiesapi.dto.story;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddStoryRequestDto {
    private String text;

}