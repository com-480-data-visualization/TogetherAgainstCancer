# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Thibaut HENNEL | 300459 |
| Abir HAMMOUMI  | 302910 |
| Hamza ABID     | 371438 |

[Milestone 1](#milestone-1) • [Milestone 2](#milestone-2) • [Milestone 3](#milestone-3)

## Milestone 1 (29th March, 5pm)

**10% of the final grade**

This is a preliminary milestone to let you set up goals for your final project and assess the feasibility of your ideas.
Please, fill the following sections about your project.

*(max. 2000 characters per section)*

### Dataset

Find a dataset (or multiple) that you will explore. Assess the quality of the data it contains and how much preprocessing / data-cleaning it will require before tackling visualization. We recommend using a standard dataset as this course is not about scraping nor data processing.

> We will use the GBD databank (https://vizhub.healthdata.org/gbd-results/) from which we will query and download datasets, choosing particular features of interest. We will focus on data about different types of cancers and the number of deaths associated with each. We are able to choose different metrics and locations, but also to filter cases according to age and sex of the subjects. Data has been recorded from 1990 to 2019. We chose this dataset because of its ease of use, we can already apply filters prior to downloading the data, which will save some preprocessing and potential compatibility issues between datasets.


### Problematic

Frame the general topic of your visualization and the main axis that you want to develop.
   - What am I trying to show with my visualization?

>We are trying to show correlations between different types of cancer, their deadliness, the identity of people having those cancers (origin, sex, age of death). We also want to show the disability-adjusted life years (DALY) along with the years of life lost (YLLs) and years lived with disability (YLDs).

  - Think of an overview for the project, your motivation, and the target audience.

>Overview : We want to create a user-friendly website containing cancer data. We want to emphasize the interactiveness of the website and the fact that it’s suitable for all audiences. We don’t want a website in which we display row data. We prefer less data and more stylized interactions and displays to a more accurate and exhaustive data displaying website.
The main feature will be an interactive body that enables users to choose from various organs susceptible to cancer. By clicking on a particular organ, users gain access to relevant data, including a map, pertaining to that specific type of cancer. The map will be interactive and feature the European Union and Switzerland to get some easy comparisons. 

>Motivation : Our main motivation is to raise awareness about cancers. According to WHO, “nearly every family globally is affected by cancer, either directly – 1 in 5 people are diagnosed with cancer during their lifetime  – or as caregivers or family members”. Thus, we feel that anyone should be able to easily access information about this disease. We will try to create a playful website to make learning about cancer cool, as it is usually so dreary.

>Target audience : The target audience would be the average population i.e not medicine professional. The information will be displayed in such a way that everyone can understand it and be “impacted” by it.
Our website will not be intended for scientific organizations that need precise statistics and scientific analysis.


### Exploratory Data Analysis

Pre-processing of the data set you chose
  - Show some basic statistics and get insights about the data

> See the [notebook](./EDA_cleaned.ipynb).

### Related work


 - What others have already done with the data?

>https://jamanetwork.com/journals/jamaoncology/fullarticle/2787350
>In the paper “Cancer Incidence, Mortality, Years of Life Lost, Years Lived With Disability, and Disability-Adjusted Life Years for 29 Cancer Groups From 2010 to 2019”, the dataset has been used for a study and has highlighted global disparities in cancer burden across different socio-demographic index quintiles. For example, it displays maps showing cancer rates across the world from 2010 to 2019 and rankings by absolute DALYS in specific cancer groups.

  - Why is your approach original?

> According to what we have seen in other websites, our approach described above on displaying the information is quite original. Indeed, we haven’t seen a website pairing the map and the human body.
Furthermore, as stated above, we want everyone to have easy access to cancer data in a playful manner. Usually cancer data is displayed in a more scientific-oriented way, that can be dreary for such a thematic. 

 - What source of inspiration do you take? Visualizations that you found on other websites or magazines (might be unrelated to your data).

>We thought about an interactive map thanks to geographical games such as https://www.jeux-geographiques.com/. 
We also looked at how we could do it and this website comforted us in our decision : https://simplemaps.com/docs/interactive-list.
This idea of an interactive map led to the idea of an interactive body. We then checked if some websites used this and we found this website : https://portal.gdc.cancer.gov/. 
Those websites were our main inspiration.

## Milestone 2 (26th April, 5pm)

**10% of the final grade**

See [this](./milestone2.pdf) document.

The technology used for the website is Next.js. The website is published on github pages. You access it with this url : [link](https://com-480-data-visualization.github.io/TogetherAgainstCancer/)

## Milestone 3 (31st May, 5pm)

**80% of the final grade**

Report : see [this](./process-book.pdf) document.

Screencast : see [this](./screencast.mov) video, or follow this [link](https://drive.google.com/file/d/1AD6ra_8-1B4KuhSMNeaNRR3B0gnMOVWJ/view?usp=sharing).

Website : follow this [link](https://com-480-data-visualization.github.io/TogetherAgainstCancer/).

Please find the code and utilities for the website in the `public` branch. 

In the main branch you will find notebooks for exploratory data analysis and graphs generation. You will also find the dataset we used and a codebook explaining the metrics and measures it contains.



## Late policy

- < 24h: 80% of the grade for the milestone
- < 48h: 70% of the grade for the milestone

